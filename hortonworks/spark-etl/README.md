sudo -u hdfs hadoop fs -mkdir -p /apps/servian/spark

sudo -u hdfs hadoop fs -mkdir -p /data/source-aligned-layer
sudo -u hdfs hadoop fs -mkdir -p /data/common-access-layer
sudo -u hdfs hadoop fs -mkdir -p /data/end-user-layer

# Install SBT
curl https://bintray.com/sbt/rpm/rpm | sudo tee /etc/yum.repos.d/bintray-sbt-rpm.repo
sudo yum -y install sbt

# download Servian's hadoop examples
git clone git@git.servian.com:michael.calvert/hadoop-examples.git

cd hadoop-examples/hortonworks/spark-etl/
sbt compile assembly

spark-submit --class com.servian.spark.tasks.CreatePowers --driver-class-path .:/usr/hdp/2.3.0.0-2130/hbase/lib/hbase-common.jar:/usr/hdp/2.3.0.0-20/hbase/lib/hbase-client.jar:/usr/hdp/2.3.0.0-2130/hbase/lib/hbase-server.jar:/usr/hdp/2.3.0.0-2130/hbase/lib/protobuf-java-2.5.0.jar::/usr/hdp/2.3.0.0-2130/hbase/lib/hbase-protocol.jar:/usr/hdp/2.3.0.0-2130/hbase/lib/guava-12.0.1.jar --properties-file spark.conf --num-executors 1 target/scala-2.10/com.servian.hadoop-examples.spark-etl.jar

cd ~/hadoop-examples/hortonworks/play-hbase
sbt run -Dhttp.port=9999


sudo su -
cd /opt/
wget http://getdrill.org/drill/download/apache-drill-1.0.0.tar.gz
tar xfz apache-drill-1.0.0.tar.gz
rm -f apache-drill-1.0.0.tar.gz
cd apache-drill-1.0.0.tar.gz
bin/drillbit.sh restart

http://localhost:8047/
Navigate to Storage tab
Enable hbase

Create view
