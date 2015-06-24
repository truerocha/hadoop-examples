name := """play-hbase"""

version := "1.0-SNAPSHOT"

javacOptions ++= Seq("-source", "1.8", "-target", "1.8", "-Xlint")

resolvers += "MapR-DB" at "http://repository.mapr.com/nexus/content/groups/mapr-public/"

libraryDependencies ++= Seq(
  // Select Play modules
  //jdbc,      // The JDBC connection pool and the play.api.db API
  //anorm,     // Scala RDBMS Library
  //javaJdbc,  // Java database API
  //javaEbean, // Java Ebean plugin
  //javaJpa,   // Java JPA plugin
  //filters,   // A set of built-in filters
  //javaCore,  // The core Java API
  // WebJars pull in client-side web libraries
  "org.webjars" %% "webjars-play" % "2.2.0-RC1-1",
  "org.webjars" % "bootstrap" % "2.3.1",
  // HBase
  "org.apache.hadoop" % "hadoop-core" % "1.0.3-mapr-4.1.0",
  "org.apache.hbase" % "hbase-common" % "0.98.9-mapr-1503-m7-4.1.0",
  "org.apache.hbase" % "hbase-client" % "0.98.9-mapr-1503-m7-4.1.0",
  "org.slf4j" % "slf4j-log4j12" % "1.7.5"
  // Add your own project dependencies in the form:
  // "group" % "artifact" % "version"
)

play.Project.playScalaSettings
