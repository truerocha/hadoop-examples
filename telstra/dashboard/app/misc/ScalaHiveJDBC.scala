package misc

import java.sql.DriverManager
import java.sql.Connection
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.libs.json.Json

class ScalaHiveJDBC {
 
  def getData(driver:String, url:String, username:String, password:String, query:String): String =  {
    // connect to the database named "mysql" on the localhost
    // val driver = "com.mysql.jdbc.Driver"
    // val url = "jdbc:mysql://localhost/mysql"
    // val username = "root"
    // val password = "root"
 
    // there's probably a better way to do this
    var connection:Connection = null
    var json = Json.toJson(1)
    var jsonString = ""
    try {
      // make the connection
      Class.forName(driver)
      connection = DriverManager.getConnection(url, username, password)
      
      // create the statement, and run the select query
      val statement = connection.createStatement()
      val resultSet = statement.executeQuery(query)
      while ( resultSet.next() ) {
        val data = resultSet.getString(1)

        println("data" + data)
        val arr = data.split(",")

        json = Json.toJson(
        Map(
          "user_story" -> Json.toJson(arr(0).replace('\"', ' ')),
          "big_data_owner" -> Json.toJson(arr(1).replace('\"', ' ')),
          "app_id" -> Json.toJson(arr(2).replace('\"', ' ')),
          "source" -> Json.toJson(arr(3).replace('\"', ' ')),
          "data_description" -> Json.toJson(arr(4).replace('\"', ' ')),
          "architecture_domain" -> Json.toJson(arr(5).replace('\"', ' ')),
          "use_cases" -> Json.toJson(arr(6).replace('\"', ' ')),
          "contact_details" -> Json.toJson(arr(7).replace('\"', ' ')),
          "data_layout" -> Json.toJson(arr(8).replace('\"', ' ')),
          "host_names" -> Json.toJson(arr(9).replace('\"', ' ')),
          "host_ip" -> Json.toJson(arr(10).replace('\"', ' ')),
          "port_number" -> Json.toJson(arr(11).replace('\"', ' ')),
          "network" -> Json.toJson(arr(12).replace('\"', ' ')),
          "db_instance" -> Json.toJson(arr(13).replace('\"', ' ')),
          "file_location_on_server" -> Json.toJson(arr(14).replace('\"', ' ')),
          "api_data_sourcing_string" -> Json.toJson(arr(15).replace('\"', ' ')),
          "other_comments" -> Json.toJson(arr(16).replace('\"', ' '))
        ))

        jsonString = Json.stringify(json)
        
        println(jsonString)

      }
    } catch {
      case e => e.printStackTrace
    }
    connection.close()
    return jsonString
  }
  
}