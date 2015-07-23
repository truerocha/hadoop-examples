package controllers

import play.api._
import play.api.mvc._
import play.api.Play.current
import scala.collection.mutable.MutableList
import models.CharacterSet

object Application extends Controller {

  def index = Action {

    import play.api.db._

    val list = MutableList[CharacterSet]()

    DB.withConnection("manish") { conn =>
      val stm = conn.createStatement()
      val res = stm.executeQuery("show databases")
      while (res.next()) {
        list.+=(CharacterSet(res.getString(1)))
      }
    }

    Ok(views.html.index(list))
  }
}
