name := """Telstra Dashboard"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  specs2 % Test,
  "org.apache.hive"   % "hive-jdbc"       % "0.13.0",
  "org.apache.hadoop" % "hadoop-core" 	  % "0.20.2" 
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
//routesGenerator := InjectedRoutesGenerator

//libraryDependencies += "mysql" % "mysql-connector-java" % "5.1.27"
