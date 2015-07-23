package controllers
 
import play.api._
import play.api.mvc._
import play.api.Play.current
import scala.collection.mutable.MutableList
import models.CharacterSet
import views.html._
 
package object Application extends Controller {


    def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def dashboard = Action {
    Ok(views.html.dashboard("Hello World"))
  }
} 
/*  def index = Action {
 
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

<<<<<<< HEAD

  def landing = Action {
    Ok(views.html.landing())
  }

  def dashboard = Action {
    Ok(views.html.dashboard())
  }

  def dashSourceSystem = Action {
    Ok(views.html.dashboard_source_system())
  }

=======
>>>>>>> 58188218a2101508381b11daeb2c0490cc5225fe
}
*/
