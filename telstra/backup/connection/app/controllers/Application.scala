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
 
    DB.withConnection { conn =>
      val stm = conn.createStatement()
      val res = stm.executeQuery("""select
	  split_str(sds.location, '/', 9) as "SOURCE_SYSTEM"
	, parts.part_name as "SOURCE_LINEAGE"
from dbs
inner join tbls
	on tbls.db_id = dbs.db_id
inner join sds
	on sds.sd_id = tbls.sd_id
inner join partitions parts
	on parts.tbl_id = tbls.tbl_id
where 
	substr(sds.location, 1, 22) = 'hdfs://tdcdv2/data/tdc'
	and split_str(sds.location, '/', 8) = 'base'
	and split_str(sds.location, '/', 9) = 'livechat'
	and parts.part_name LIKE "%src_date=____-__-__%"
order by
	1, 2""")
      while (res.next()) {
        list.+=(CharacterSet(res.getString(1), res.getString(2)))
      }
    }
 
    Ok(views.html.index(list))
  }
}
