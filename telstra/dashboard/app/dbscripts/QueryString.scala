package dbscripts

class QueryString {
 
  var GET_TABLES="""
                    select
                    sds.location as "ENVIRONMENT"
                  , sds.location as "SOURCE_SYSTEM"
                  , sds.location as "SSU_VALUE"
                  , dbs.name as "HIVE_DATABASE"
                  , tbls.tbl_name as "HIVE_TABLE_NAME"
                  , tbls.owner as "HIVE_TABLE_OWNER"
                  , sds.location as "HDFS_PATH"
                from hive.dbs as dbs
                inner join hive.tbls as tbls
                  on tbls.db_id = dbs.db_id
                inner join hive.sds as sds
                  on sds.sd_id = tbls.sd_id
                where 
                  substr(sds.location, 1, 22) = 'hdfs://tdcdv2/data/tdc'
                  and sds.location LIKE '%XXXXXX%'
                order by
                  1, 2, 3, 4
                    """

  var GET_SOURCE_LINEAGES="""
                    select
                    sds.location as "ENVIRONMENT"
                  , sds.location as "SOURCE_SYSTEM"
                  , sds.location as "SSU_VALUE"
                  , dbs.name as "HIVE_DATABASE"
                  , tbls.tbl_name as "HIVE_TABLE_NAME"
                  , parts.part_name as "SOURCE_LINEAGE"
                from dbs
                inner join tbls
                  on tbls.db_id = dbs.db_id
                inner join sds
                  on sds.sd_id = tbls.sd_id
                inner join partitions parts
                  on parts.tbl_id = tbls.tbl_id
                where 
                  substr(sds.location, 1, 22) = 'hdfs://tdcdv2/data/tdc'
                  and sds.location LIKE '%XXXXXX%'
                order by
                  1, 2, 3, 4, 5, 6
                    """

  var GET_COLUMNS="""
                    select
                    sds.location as "ENVIRONMENT"
                  , sds.location as "SOURCE_SYSTEM"
                  , sds.location as "SSU_VALUE"
                  , dbs.name as "HIVE_DATABASE"
                  , tbls.tbl_name as "HIVE_TABLE_NAME"
                  , cols.column_name as "HIVE_COLUMN_NAME"
                  , cols.type_name as "HIVE_COLUMN_DATA_TYPE"
                from dbs
                inner join tbls
                  on tbls.db_id = dbs.db_id
                inner join sds
                  on sds.sd_id = tbls.sd_id
                inner join columns_v2 cols
                  on cols.cd_id = sds.cd_id
                where 
                  substr(sds.location, 1, 22) = 'hdfs://tdcdv2/data/tdc'
                  and sds.location LIKE '%XXXXXX%'
                order by
                  1, 2, 3, 4, 5, cols.integer_idx
                    """

  var GET_SOM="SELECT * FROM SOURCE_OPTION_MATRIX_V4"
  
}