name := """Telstra Dashboard"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  jdbc,
  "com.typesafe.play" %% "anorm" % "2.4.0",
  cache,
  ws,
  specs2 % Test,
  "mysql" % "mysql-connector-java" % "5.1.17",
  "com.cloudphysics" % "jerkson_2.10" % "0.6.3"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
//routesGenerator := InjectedRoutesGenerator

//libraryDependencies += "mysql" % "mysql-connector-java" % "5.1.17"
//"org.apache.hive"   % "hive-jdbc"       % "0.13.0",
//"org.apache.hadoop" % "hadoop-core" 	  % "0.20.2" 