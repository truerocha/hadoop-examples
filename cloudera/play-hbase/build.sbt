name := """play-hbase"""

version := "1.0-SNAPSHOT"

scalaVersion := "2.10.4"
javacOptions ++= Seq("-source", "1.7", "-target", "1.7")

resolvers += "Cloudera Repository" at "https://repository.cloudera.com/artifactory/cloudera-repos/"

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
    "org.webjars" %% "webjars-play" % "2.2.0-RC1-1"
  , "org.webjars" % "bootstrap" % "2.3.1"
  // HBase
  , "org.apache.hadoop" % "hadoop-core" % "2.6.0-mr1-cdh5.4.0" 
  , "org.apache.hbase" % "hbase-common" % "1.0.0-cdh5.4.0" 
  , "org.apache.hbase" % "hbase-client" % "1.0.0-cdh5.4.0" 
  , "org.slf4j" % "slf4j-log4j12" % "1.7.5"
  // Add your own project dependencies in the form:
  // "group" % "artifact" % "version"
)

play.Project.playScalaSettings
