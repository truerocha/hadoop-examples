assemblyJarName in assembly := "com.servian.hadoop-examples.spark-etl.jar"
assemblyOption in assembly := (assemblyOption in assembly).value.copy(includeScala = false)

name := "spark-etl"
version := "1.0"
scalaVersion := "2.10.4"

javacOptions ++= Seq("-source", "1.7", "-target", "1.7")

resolvers += "Cloudera Repository" at "https://repository.cloudera.com/artifactory/cloudera-repos/"
resolvers += "Maven Repository" at "http://mvnrepository.com/artifact/"

libraryDependencies ++= Seq(
  //  "org.apache.hadoop" % "hadoop-common" % "2.6.0-cdh5.4.0" % "provided"

    "org.apache.hbase" % "hbase-common" % "1.0.0-cdh5.4.0" % "provided"
  , "org.apache.hbase" % "hbase-client" % "1.0.0-cdh5.4.0" % "provided"
  , "org.apache.hbase" % "hbase-server" % "1.0.0-cdh5.4.0" % "provided"

  , "org.apache.spark" %% "spark-core" % "1.3.0-cdh5.4.0" % "provided"
  , "org.apache.spark" %% "spark-sql" % "1.3.0-cdh5.4.0" % "provided"
  //, "org.apache.spark" %% "spark-hive" % "1.3.0-cdh5.4.0" % "provided"

  //, "com.github.nscala-time" %% "nscala-time" % "1.8.0"
  //, "org.apache.commons" % "commons-lang3" % "3.3.2"

  //, "org.slf4j" % "slf4j-api" % "1.7.12"
)
