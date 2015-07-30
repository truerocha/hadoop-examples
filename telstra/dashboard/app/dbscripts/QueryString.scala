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

  var GET_SOM="SELECT * FROM SOURCE_OPTION_MATRIX_V4 WHERE source LIKE '%XXXXXX%'"

  var UPDATE_INTERNAL=""" UPDATE SOURCE_OPTION_MATRIX_V4
                          SET 
                          user_story='AAAAAA', 
                          kanban_state='BBBBBB', 
                          big_data_owner='CCCCCC'
                          WHERE source='QQQQQQ'
                      """

  var UPDATE_APPLICATION_METADATA=""" UPDATE SOURCE_OPTION_MATRIX_V4
                                      SET 
                                      app_id='AAAAAA', 
                                      data_description='BBBBBB',
                                      architecture_domain='CCCCCC', 
                                      use_cases='DDDDDD', 
                                      contact_person_details='EEEEEE',
                                      data_layout='FFFFFF'
                                      WHERE source='QQQQQQ'
                                  """
  
  var UPDATE_SENSITIVITY_INDICATORS=""" UPDATE SOURCE_OPTION_MATRIX_V4
                                      SET 
                                      customer_data='AAAAAA', 
                                      financial_and_banking_information='BBBBBB',
                                      sensitive_customer_information='CCCCCC', 
                                      telstra_identifiers_and_service_history='DDDDDD', 
                                      credit_card_data='EEEEEE',
                                      financial_reporting_data='FFFFFF',
                                      privacy_data='GGGGGG',
                                      regulatory_data='HHHHHH', 
                                      is_any_high_sensitivity_data_captured='IIIIII', 
                                      nbn_confidential_information='JJJJJJ',
                                      nbn_compliant='KKKKKK'
                                      WHERE source='QQQQQQ'
                                  """

  var UPDATE_SSU=""" UPDATE SOURCE_OPTION_MATRIX_V4
                          SET 
                          is_this_data_ssu_ready='AAAAAA', 
                          ssu_remediation_method='BBBBBB'
                          WHERE source='QQQQQQ'
                      """

  var UPDATE_TECH_DETAILS=""" UPDATE SOURCE_OPTION_MATRIX_V4
                                      SET 
                                      customer_data='AAAAAA', 
                                      financial_and_banking_information='BBBBBB',
                                      sensitive_customer_information='CCCCCC', 
                                      telstra_identifiers_and_service_history='DDDDDD', 
                                      credit_card_data='EEEEEE',
                                      financial_reporting_data='FFFFFF',
                                      privacy_data='GGGGGG',
                                      regulatory_data='HHHHHH', 
                                      is_any_high_sensitivity_data_captured='IIIIII', 
                                      nbn_confidential_information='JJJJJJ',
                                      nbn_compliant='KKKKKK'
                                      WHERE source='QQQQQQ'
                                  """

  var UPDATE_TRACKING_AND_DS=""" UPDATE SOURCE_OPTION_MATRIX_V4
                          SET 
                          firewall_status='AAAAAA', 
                          tables_sourced='BBBBBB'
                          WHERE source='QQQQQQ'
                      """

}