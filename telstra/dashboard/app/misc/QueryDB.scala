package misc

import play.api._
import play.api.mvc._
import play.api.Play.current
import scala.collection.mutable.MutableList
import models.CharacterSet
import views.html._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.db._
import anorm._
import com.codahale.jerkson.Json._
import dbscripts.QueryString

class QueryDB {
 
 val qs = new QueryString
def getTablesFromDB(searchString:String):String = {
    var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val query = SQL(qs.GET_TABLES.replace("XXXXXX", searchString))
       
      val resultSet = query().map(
        row => 
        Map(
          "environment" -> row[String]("ENVIRONMENT"),
          "source_system" -> row[String]("SOURCE_SYSTEM"),
          "ssu_value" -> row[String]("SSU_VALUE"),
          "hive_database" -> row[String]("HIVE_DATABASE"),
          "hive_table_name" -> row[String]("HIVE_TABLE_NAME"),
          "hive_table_owner" -> row[String]("HIVE_TABLE_OWNER"),
          "hdfs_path" -> row[String]("HDFS_PATH")
        )
      )

      json = Json.toJson(
        Json.obj("tables" -> resultSet))
      
    }

    var jsonString = Json.stringify(json)
   return jsonString
}

def getSourceLineagesFromDB(searchString:String):String = {
   var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val query = SQL(qs.GET_SOURCE_LINEAGES.replace("XXXXXX", searchString))
       
      val resultSet = query().map(
        row => 
        Map(
          "environment" -> row[String]("ENVIRONMENT"),
          "source_system" -> row[String]("SOURCE_SYSTEM"),
          "ssu_value" -> row[String]("SSU_VALUE"),
          "hive_database" -> row[String]("HIVE_DATABASE"),
          "hive_table_name" -> row[String]("HIVE_TABLE_NAME"),
          "source_lineage" -> row[String]("SOURCE_LINEAGE")
        )
      )

      json = Json.toJson(Json.obj("source_lineages" -> resultSet))
      
    }

    var jsonString = Json.stringify(json)
   return jsonString
}

def getColumnsFromDB(searchString:String):String = {
   var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val query = SQL(qs.GET_COLUMNS.replace("XXXXXX", searchString))
       
      val resultSet = query().map(
        row => 
        Map(
          "environment" -> row[String]("ENVIRONMENT"),
          "source_system" -> row[String]("SOURCE_SYSTEM"),
          "ssu_value" -> row[String]("SSU_VALUE"),
          "hive_database" -> row[String]("HIVE_DATABASE"),
          "hive_table_name" -> row[String]("HIVE_TABLE_NAME"),
          "hive_column_name" -> row[String]("HIVE_COLUMN_NAME"),
          "hive_column_data_type" -> row[String]("HIVE_COLUMN_DATA_TYPE")
        )
      )

      json = Json.toJson(Json.obj("columns" -> resultSet))
      
    }

    var jsonString = Json.stringify(json)
   return jsonString
}
  
}