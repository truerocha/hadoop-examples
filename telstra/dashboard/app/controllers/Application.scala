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

  def getSourceMatrix(searchString:String) = Action {

    var jsonString = qdb.getSOMFromDB(searchString)
    Ok(jsonString)
  }

  def updateInternal(q:String,us:String,kb:String,bdo:String) = Action {
    var result = qdb.updateInternalDB(q,us,kb,bdo)

    val response = Json.toJson(
      Map(
          "status" -> Json.toJson(result)
        ))

    Ok(response)
  }

  def updateAppMetadata(
      q:String,appid:String,dd:String,
      ad:String,uc:String,cpd:String,dl:String) = Action {

    var result = qdb.updateApplicationMetadataDB(q,appid,dd,ad,uc,cpd,dl)
    
    val response = Json.toJson(
      Map(
          "status" -> Json.toJson(result)
        ))

    Ok(response)
  }
 
  def updateSensitivityIndicators(
      q:String,cd:String,fabi:String,sci:String,
      tiash:String,ccd:String,frd:String,pd:String,
      rd:String,iahsdc:String,nci:String,nc:String
      ) = Action {

    var result = qdb.updateSensitivityIndicatorsDB(
      q,cd,fabi,sci,tiash,ccd,frd,pd,rd,iahsdc,nci,nc
      )
    
    val response = Json.toJson(
      Map(
          "status" -> Json.toJson(result)
        ))

    Ok(response)
  }

  def updateSSU(q:String,itdsr:String,srm:String) = Action {
    var result = qdb.updateSSUDB(q,itdsr,srm)

    val response = Json.toJson(
      Map(
          "status" -> Json.toJson(result)
        ))

    Ok(response)
  }

  def updateTechnicalDetails(
      q:String,hda:String,hdfs1:String,fodu:String,
      tdsba:String,dl:String,sdfsapf:String,fici:String,
      dsm:String,hn:String,hi:String,pn:String,
      n:String,di:String,flos:String,adss:String,oc:String
      ) = Action {

    var result = qdb.updateTechnicalDetailsDB(
      q,hda,hdfs1,fodu,tdsba,dl,sdfsapf,fici,
      dsm,hn,hi,pn,n,di,flos,adss,oc
      )
    
    val response = Json.toJson(
      Map(
          "status" -> Json.toJson(result)
        ))

    Ok(response)
  }

  def updateTrackingAndDS(q:String,fs:String,ts:String) = Action {
    var result = qdb.updateTrackingAndDSDB(q,fs,ts)

    val response = Json.toJson(
      Map(
          "status" -> Json.toJson(result)
        ))

    Ok(response)
  }
} 

