package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def dashboard = Action {
    Ok(views.html.dashboard("Hello World"))
  }

}
