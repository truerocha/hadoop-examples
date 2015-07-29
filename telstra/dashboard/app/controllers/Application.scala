package controllers
 
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
import misc.QueryDB

package object Application extends Controller {
    
    val qdb = new QueryDB
    
    def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def dashboard = Action {

  
  Ok(views.html.dashboard("Hello World"))
  }

  def getTables(searchString:String) = Action {

    var jsonString = qdb.getTablesFromDB(searchString)
    Ok(jsonString)

  }

  def getSourceLineages(searchString:String) = Action {

    var jsonString = qdb.getSourceLineagesFromDB(searchString)
    Ok(jsonString)

  }

  def getColumns(searchString:String) = Action {

    var jsonString = qdb.getColumnsFromDB(searchString)
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

} 

