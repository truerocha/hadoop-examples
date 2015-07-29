package controllers
 
import play.api._
import play.api.mvc._
import play.api.Play.current
import scala.collection.mutable.MutableList
import models.CharacterSet
import views.html._
import dbHive.ScalaHiveJDBC
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.db._
import anorm._
import com.codahale.jerkson.Json._
import dbscripts.QueryString

package object Application extends Controller {
    val qs = new QueryString
    
    def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def dashboard = Action {

  
  Ok(views.html.dashboard("Hello World"))
  }

  def listTables = Action {

    var jsonString = getTablesFromDB()
    Ok(jsonString)
  }

  def getSourceLineage = Action {

    var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val cds = SQL(qs.GET_SOURCE_LINEAGES)
       
      
      val environments = cds().map(
        row => "ENVIRONMENT" -> row[String]("ENVIRONMENT")
      ).toList

      val source_systems = cds().map(
        row => "SOURCE_SYSTEM" -> row[String]("SOURCE_SYSTEM")
      ).toList

      val ssu_value = cds().map(
        row => "SSU_VALUE" -> row[String]("SSU_VALUE")
      ).toList

      val hive_databases = cds().map(
        row => "HIVE_DATABASE" -> row[String]("HIVE_DATABASE")
      ).toList

      val hive_table_names = cds().map(
        row => "HIVE_TABLE_NAME" -> row[String]("HIVE_TABLE_NAME")
      ).toList

      val source_lineages = cds().map(
        row => "SOURCE_LINEAGE" -> row[String]("SOURCE_LINEAGE")
      ).toList

      val environmentsList = environments.mkString(",")
      val source_systemsList = source_systems.mkString(",")
      val ssu_valueList = ssu_value.mkString(",")
      val hive_databasesList = hive_databases.mkString(",")
      val hive_table_namesList = hive_table_names.mkString(",")
      val source_lineagesList = source_lineages.mkString(",")

      json = Json.toJson(
      Map(
          "environments" -> Json.toJson(environmentsList),
          "source_systems" -> Json.toJson(source_systemsList),
          "ssu_value" -> Json.toJson(ssu_valueList),
          "hive_databases" -> Json.toJson(hive_databasesList),
          "hive_table_names" -> Json.toJson(hive_table_namesList),
          "source_lineages" -> Json.toJson(source_lineagesList)
        ))
      
    }

    var jsonString = Json.stringify(json)
    Ok(jsonString)
  }

  def getColumns = Action {

    var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val cds = SQL(qs.GET_COLUMNS)
       
      
      val environments = cds().map(
        row => "ENVIRONMENT" -> row[String]("ENVIRONMENT")
      ).toList

      val source_systems = cds().map(
        row => "SOURCE_SYSTEM" -> row[String]("SOURCE_SYSTEM")
      ).toList

      val ssu_value = cds().map(
        row => "SSU_VALUE" -> row[String]("SSU_VALUE")
      ).toList

      val hive_databases = cds().map(
        row => "HIVE_DATABASE" -> row[String]("HIVE_DATABASE")
      ).toList

      val hive_table_names = cds().map(
        row => "HIVE_TABLE_NAME" -> row[String]("HIVE_TABLE_NAME")
      ).toList

      val hive_column_names = cds().map(
        row => "HIVE_COLUMN_NAME" -> row[String]("HIVE_COLUMN_NAME")
      ).toList

      val hive_column_data_types = cds().map(
        row => "HIVE_COLUMN_DATA_TYPE" -> row[String]("HIVE_COLUMN_DATA_TYPE")
      ).toList

      val environmentsList = environments.mkString(",")
      val source_systemsList = source_systems.mkString(",")
      val ssu_valueList = ssu_value.mkString(",")
      val hive_databasesList = hive_databases.mkString(",")
      val hive_table_namesList = hive_table_names.mkString(",")
      val hive_column_namesList = hive_column_names.mkString(",")
      val hive_column_data_typesList = hive_column_data_types.mkString(",")

      json = Json.toJson(
      Map(
          "environments" -> Json.toJson(environmentsList),
          "source_systems" -> Json.toJson(source_systemsList),
          "ssu_value" -> Json.toJson(ssu_valueList),
          "hive_databases" -> Json.toJson(hive_databasesList),
          "hive_table_names" -> Json.toJson(hive_table_namesList),
          "hive_column_names" -> Json.toJson(hive_column_namesList),
          "hive_column_data_types" -> Json.toJson(hive_column_data_typesList)
        ))
      
    }

    var jsonString = Json.stringify(json)
    Ok(jsonString)
  }

  def getSourceMatrix = Action {

    var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val cds = SQL("""
                    select * from source_matrix limit 1
                    """)
       
      val datas = cds().map(
        row => "data" -> row
      ).toList

      val datasList = datas.mkString(",")

      json = Json.toJson(
      Map(
          "datas" -> Json.toJson(datasList)
        ))
      
    }

    var jsonString = Json.stringify(json)
    Ok(jsonString)
  }

def getTablesFromDB():String = {
   var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val query = SQL(qs.GET_TABLES)
       
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
      ).toList

      json = Json.toJson(resultSet)
      
    }

    var jsonString = Json.stringify(json)
   return jsonString
}

} 

