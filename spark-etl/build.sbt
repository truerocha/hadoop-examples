assemblyJarName in assembly := "com.servian.hadoop-examples.spark-etl.jar"
assemblyOption in assembly := (assemblyOption in assembly).value.copy(includeScala = false)

name := "spark-etl"
version := "1.0"
scalaVersion := "2.10.4"

javacOptions ++= Seq("-source", "1.8", "-target", "1.8")

resolvers += "MapR-DB" at "http://repository.mapr.com/nexus/content/groups/mapr-public/"
//resolvers += "Apache HBase" at "https://repository.apache.org/content/repositories/releases"
resolvers += "Maven Repository" at "http://mvnrepository.com/artifact/"

libraryDependencies ++= Seq(
    "org.apache.hadoop" % "hadoop-core" % "1.0.3-mapr-4.1.0" % "provided"

  , "org.apache.hbase" % "hbase-common" % "0.98.9-mapr-1503-m7-4.1.0" % "provided"
  , "org.apache.hbase" % "hbase-client" % "0.98.9-mapr-1503-m7-4.1.0" % "provided"
  , "org.apache.hbase" % "hbase-server" % "0.98.9-mapr-1503-m7-4.1.0" % "provided"

  //  "org.apache.hbase" % "hbase" % "0.98.9-hadoop2" % "provided"
  //, "org.apache.hbase" % "hbase-common" % "0.98.9-hadoop2" % "provided"
  //, "org.apache.hbase" % "hbase-client" % "0.98.9-hadoop2" % "provided"
  //, "org.apache.hbase" % "hbase-server" % "0.98.9-hadoop2" % "provided"

  , "org.apache.spark" %% "spark-core" % "1.2.1" % "provided"
  , "org.apache.spark" %% "spark-sql" % "1.2.1" % "provided"
  , "org.apache.spark" %% "spark-hive" % "1.2.1" % "provided"

  , "com.github.nscala-time" %% "nscala-time" % "1.8.0"
  , "org.apache.commons" % "commons-lang3" % "3.3.2"

  , "org.slf4j" % "slf4j-api" % "1.7.12"
)
