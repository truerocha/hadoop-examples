Build Project
=============

    sbt compile assembly
    cp target/scala-2.10/com.servian.hadoop-examples.spark-etl.jar /tmp/
    hadoop fs -put -f /tmp/com.servian.hadoop-examples.spark-etl.jar maprfs:/apps/telstra/spark/
    hadoop fs -chmod 644 maprfs:/apps/telstra/spark/com.servian.hadoop-examples.spark-etl.jar    

Execute ETL Job
===============

    /opt/mapr/spark/spark-1.2.1/bin/spark-submit \
      --properties-file /home/mapr/dev-spark.conf \
      --num-executors 4 \
      --class com.servian.spark.tasks.CreatePowers \
      /mapr/holly2.telstra.com/apps/telstra/spark/com.servian.hadoop-examples.spark-etl.jar

File: dev-spark.conf
====================

    spark.executor.memory          6g
    spark.default.parallelism      850
    
    spark.logConf                  true
    spark.eventLog.dir             maprfs:///apps/spark
    spark.eventLog.enabled         true
    		
    spark.executor.extraClassPath    /opt/mapr/hbase/hbase-0.98.9/lib/hbase-common-0.98.9-mapr-1503.jar:/opt/mapr/hbase/hbase-0.98.9/lib/hbase-client-0.98.9-mapr-1503.jar:/opt/mapr/hbase/hbase-0.98.9/lib/hbase-server-0.98.9-mapr-1503.jar
    
    spark.master                   yarn-client
    spark.yarn.historyServer.address http://vmhv7001n40:18080
    
    spark.serializer                 org.apache.spark.serializer.KryoSerializer
    spark.kryo.registrator           com.servian.spark.serializer.SerializableClassRegistrator


