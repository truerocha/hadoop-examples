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
 def manOf[T: Manifest](t: T): Manifest[T] = manifest[T]
 val qs = new QueryString
def getTablesFromDB(searchString:String):String = {
    var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val query = SQL(qs.GET_TABLES.replace("XXXXXX",searchString))
       
      val resultSet = query().map(
        row => 
        Map(
          "path" -> row[String]("ENVIRONMENT"),
          "environment" -> row[String]("ENVIRONMENT").split("/")(5).trim,
          "source_system" -> row[String]("SOURCE_SYSTEM").split("/")(8).trim,
          "ssu_value" -> row[String]("SSU_VALUE").split("/")(6).trim,
          "hive_database" -> row[String]("HIVE_DATABASE"),
          "hive_table_name" -> row[String]("HIVE_TABLE_NAME"),
          "hive_table_owner" -> row[String]("HIVE_TABLE_OWNER"),
          "hdfs_path" -> row[String]("HDFS_PATH")
        )
      )

      val newResultSet = resultSet filter (x => ((x("path").split("/")(7) == "base")))
      // val newResultSet2 = newResultSet1 filter (_("path").split("/")(8) == searchString)

      json = Json.toJson(
        Json.obj("tables" -> newResultSet))
      
    }

    var jsonString = Json.stringify(json)
   return jsonString
}

def getSourceLineagesFromDB(searchString:String):String = {
   var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val query = SQL(qs.GET_SOURCE_LINEAGES.replace("XXXXXX",searchString))
       
      val resultSet = query().map(
        row => 
        Map(
          "path" -> row[String]("ENVIRONMENT"),
          "environment" -> row[String]("ENVIRONMENT").split("/")(5),
          "source_system" -> row[String]("SOURCE_SYSTEM").split("/")(8),
          "ssu_value" -> row[String]("SSU_VALUE").split("/")(6),
          "hive_database" -> row[String]("HIVE_DATABASE"),
          "hive_table_name" -> row[String]("HIVE_TABLE_NAME"),
          "source_lineage" -> row[String]("SOURCE_LINEAGE")
        )
      )

      val newResultSet = resultSet filter (x => ((x("path").split("/")(7) == "base")))
      // val newResultSet2 = newResultSet1 filter (_("path").split("/")(8) == searchString)

      json = Json.toJson(Json.obj("source_lineages" -> newResultSet))
      
    }

    var jsonString = Json.stringify(json)
   return jsonString
}

def getColumnsFromDB(searchString:String):String = {
   var json = Json.toJson(1)
    DB.withConnection("hive") { implicit c =>

      val query = SQL(qs.GET_COLUMNS.replace("XXXXXX",searchString))
       
      val resultSet = query().map(
        row => 
        Map(
          "path" -> row[String]("ENVIRONMENT"),
          "environment" -> row[String]("ENVIRONMENT").split("/")(5),
          "source_system" -> row[String]("SOURCE_SYSTEM").split("/")(8),
          "ssu_value" -> row[String]("SSU_VALUE").split("/")(6),
          "hive_database" -> row[String]("HIVE_DATABASE"),
          "hive_table_name" -> row[String]("HIVE_TABLE_NAME"),
          "hive_column_name" -> row[String]("HIVE_COLUMN_NAME"),
          "hive_column_data_type" -> row[String]("HIVE_COLUMN_DATA_TYPE")
        )
      )

      val newResultSet = resultSet filter (x => ((x("path").split("/")(7) == "base")))
      // val newResultSet2 = newResultSet1 filter (_("path").split("/")(8) == searchString)

      json = Json.toJson(Json.obj("columns" -> newResultSet))
      
    }

    var jsonString = Json.stringify(json)

   return jsonString
}

  def getSOMFromDB(searchString:String):String = {
     var json = Json.toJson(1)
      DB.withConnection("som") { implicit c =>

        val query = SQL(qs.GET_SOM.replace("XXXXXX",searchString))
         
        val resultSet = query().map(
          row => 
          Map(
            "user_story" -> row[String]("user_story"),
            "kanban_state" -> row[String]("kanban_state"),
            "big_data_owner" -> row[String]("big_data_owner"),
            "app_id" -> row[String]("app_id"),
            "source" -> row[String]("source"),
            "data_description" -> row[String]("data_description"),
            "architecture_domain" -> row[String]("architecture_domain"),
            "use_cases" -> row[String]("use_cases"),
            "contact_person_details" -> row[String]("contact_person_details"),
            "data_layout" -> row[String]("data_layout"),
            "customer_data" -> row[String]("customer_data"),
            "financial_and_banking_information" -> row[String]("financial_and_banking_information"),
            "sensitive_customer_information" -> row[String]("sensitive_customer_information"),
            "telstra_identifiers_and_service_history" -> row[String]("telstra_identifiers_and_service_history"),
            "credit_card_data" -> row[String]("credit_card_data"),
            "financial_reporting_data" -> row[String]("financial_reporting_data"),
            "privacy_data" -> row[String]("privacy_data"),
            "regulatory_data" -> row[String]("regulatory_data"),
            "is_any_high_sensitivity_data_captured" -> row[String]("is_any_high_sensitivity_data_captured"),
            "nbn_confidential_information" -> row[String]("nbn_confidential_information"),
            "nbn_compliant" -> row[String]("nbn_compliant"),
            "is_this_data_ssu_ready" -> row[String]("is_this_data_ssu_ready"),
            "ssu_remediation_method" -> row[String]("ssu_remediation_method"),
            "historical_data_available1" -> row[String]("historical_data_available1"),
            "historical_data_file_size1" -> row[String]("historical_data_file_size1"),
            "frequency_of_delta_update1" -> row[String]("frequency_of_delta_update1"),
            "time_data_should_be_available1" -> row[String]("time_data_should_be_available1"), 
            "data_latency" -> row[String]("data_latency"),
            "subsequent_data_file_size_as_per_frequency" -> row[String]("subsequent_data_file_size_as_per_frequency"),
            "sensitive_customer_information" -> row[String]("sensitive_customer_information"),
            "format_it_comes_in" -> row[String]("format_it_comes_in"),
            "data_sourcing_method" -> row[String]("data_sourcing_method"),
            "host_name" -> row[String]("host_name"),
            "host_ip" -> row[String]("host_ip"),
            "port_number" -> row[String]("port_number"),
            "network" -> row[String]("network"),
            "database_instance" -> row[String]("database_instance"),
            "file_location_on_server" -> row[String]("file_location_on_server"),
            "api_data_sourcing_string" -> row[String]("api_data_sourcing_string"),
            "other_comments" -> row[String]("other_comments"),
            "firewall_status" -> row[String]("firewall_status"),
            "tables_sourced" -> row[String]("tables_sourced")
          )
        )

        json = Json.toJson(Json.obj("som" -> resultSet))
        
      }

      var jsonString = Json.stringify(json)

     return jsonString
  }
  
    def updateInternalDB(q:String,us:String,kb:String,bdo:String):String = {
       
       var json = Json.toJson(1)
        DB.withConnection("som") { implicit c =>
          val query = SQL(
            qs.
            UPDATE_INTERNAL.
            replace("AAAAAA",us).
            replace("BBBBBB",kb).
            replace("CCCCCC",bdo).
            replace("QQQQQQ",q)).
            executeUpdate()
          println(query)
        }

       return "true"
    }

    def updateApplicationMetadataDB(
      q:String,
      appid:String,
      dd:String,
      ad:String,
      uc:String,
      cpd:String,
      dl:String):String = {
       
       var json = Json.toJson(1)
        DB.withConnection("som") { implicit c =>
          val query = SQL(
            qs.
            UPDATE_APPLICATION_METADATA.
            replace("AAAAAA",appid).
            replace("BBBBBB",dd).
            replace("CCCCCC",ad).
            replace("DDDDDD",uc).
            replace("EEEEEE",cpd).
            replace("FFFFFF",dl).
            replace("QQQQQQ",q)).
            executeUpdate()
          println(query)
        }

       return "true"
    }

  def updateSensitivityIndicatorsDB(
      q:String,cd:String,fabi:String,sci:String,
      tiash:String,ccd:String,frd:String,pd:String,
      rd:String,iahsdc:String,nci:String,nc:String
      ):String = {
       
       var json = Json.toJson(1)
        DB.withConnection("som") { implicit c =>
          val query = SQL(
            qs.
            UPDATE_SENSITIVITY_INDICATORS.
            replace("AAAAAA",cd).
            replace("BBBBBB",fabi).
            replace("CCCCCC",sci).
            replace("DDDDDD",tiash).
            replace("EEEEEE",ccd).
            replace("FFFFFF",frd).
            replace("GGGGGG",pd).
            replace("HHHHHH",rd).
            replace("IIIIII",iahsdc).
            replace("JJJJJJ",nci).
            replace("KKKKKK",nc).
            replace("QQQQQQ",q)).
            executeUpdate()
          println(query)
        }

       return "true"
    }

    def updateSSUDB(q:String,itdsr:String,srm:String):String = {
       
       var json = Json.toJson(1)
        DB.withConnection("som") { implicit c =>
          val query = SQL(
            qs.
            UPDATE_SSU.
            replace("AAAAAA",itdsr).
            replace("BBBBBB",srm).
            replace("QQQQQQ",q)).
            executeUpdate()
          println(query)
        }

       return "true"
    }

    def updateTechnicalDetailsDB(
      q:String,hda:String,hdfs1:String,fodu:String,
      tdsba:String,dl:String,sdfsapf:String,fici:String,
      dsm:String,hn:String,hi:String,pn:String,
      n:String,di:String,flos:String,adss:String,oc:String
      ):String = {
       
       var json = Json.toJson(1)
        DB.withConnection("som") { implicit c =>
          val query = SQL(
            qs.
            UPDATE_TECH_DETAILS.
            replace("AAAAAA",hda).
            replace("BBBBBB",hdfs1).
            replace("CCCCCC",fodu).
            replace("DDDDDD",tdsba).
            replace("EEEEEE",dl).
            replace("FFFFFF",sdfsapf).
            replace("GGGGGG",fici).
            replace("HHHHHH",dsm).
            replace("IIIIII",hn).
            replace("JJJJJJ",hi).
            replace("KKKKKK",pn).
            replace("LLLLLL",n).
            replace("MMMMMM",di).
            replace("NNNNNN",flos).
            replace("OOOOOO",adss).
            replace("PPPPPP",oc).
            replace("QQQQQQ",q)).
            executeUpdate()
          println(query)
        }

       return "true"
    }

    def updateTrackingAndDSDB(q:String,fs:String,ts:String):String = {
       
       var json = Json.toJson(1)
        DB.withConnection("som") { implicit c =>
          val query = SQL(
            qs.
            UPDATE_TRACKING_AND_DS.
            replace("AAAAAA",fs).
            replace("BBBBBB",ts).
            replace("QQQQQQ",q)).
            executeUpdate()
          println(query)
        }

       return "true"
    }

}