package controllers
 
import play.api._
import play.api.mvc._
import play.api.Play.current
import scala.collection.mutable.MutableList
import models.CharacterSet
 
package object Application extends Controller {
 
  def index = Action {
 
    import play.api.db._
 
    val list = MutableList[CharacterSet]()
 
    DB.withConnection { conn =>
      val stm = conn.createStatement()
      val res = stm.executeQuery("""select * from emp""")
      while (res.next()) {
        list.+=(CharacterSet(res.getString(1), res.getString(2)))
      }
    }
 
    Ok(views.html.index("helloworld"))
  }
}
