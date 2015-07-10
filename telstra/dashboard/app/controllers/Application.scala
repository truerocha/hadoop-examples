package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index("Hello Manish Suriya and Subham."))
  }

  def landing = Action {
    Ok(views.html.landing())
  }

  def dashboard = Action {
    Ok(views.html.dashboard())
  }

}
