package com.servian.spark.tasks

import org.apache.hadoop.conf.Configuration
import org.apache.hadoop.fs.Path

import org.apache.hadoop.hbase.{HColumnDescriptor, HBaseConfiguration, HTableDescriptor, TableName}
import org.apache.hadoop.hbase.client.{HBaseAdmin, HTable, Put}
import org.apache.hadoop.hbase.mapreduce.TableInputFormat
import org.apache.hadoop.hbase.util.Bytes

import org.apache.spark._

object CreatePowers {

  val TABLE_NAME = TableName.valueOf("powers")

  object Columns {
    val DESCRIPTION = Bytes.toBytes("description")
    val TWO_POWERS_AS_INT = Bytes.toBytes("two_powers_as_int")
    val TWO_POWERS_AS_BIGINT = Bytes.toBytes("two_powers_as_bigint")
    val PI_POWERS_AS_FLOAT = Bytes.toBytes("pi_powers_as_float")
    val PI_POWERS_AS_DOUBLE = Bytes.toBytes("pi_powers_as_double")
  }

  def createTable(config : Configuration) {
    val admin = new HBaseAdmin(config)

    if (admin.tableExists(TABLE_NAME)) {
      admin.disableTable(TABLE_NAME)
      admin.deleteTable(TABLE_NAME)
    }

    val tableDesc = new HTableDescriptor(TABLE_NAME)
    val cfData = new HColumnDescriptor("data")
    cfData.setMaxVersions(1)
    tableDesc.addFamily(cfData)
    admin.createTable(tableDesc)
  }

  def loadTable(config : Configuration) {
    val powersTable = new HTable(config, TABLE_NAME)
    val cfData = Bytes.toBytes("data")

    for (power <- Array(0, 1, 2, 3, 4)) {
      val put = new Put(Bytes.toBytes(f"power-$power%s"))
      val two_powers = scala.math.pow(2, power)
      val pi_powers = scala.math.pow(scala.math.Pi, power)
      put.add(cfData, Columns.DESCRIPTION, Bytes.toBytes(f"X^$power%s"))
      put.add(cfData, Columns.TWO_POWERS_AS_INT, Bytes.toBytes(two_powers.toInt))
      put.add(cfData, Columns.TWO_POWERS_AS_BIGINT, Bytes.toBytes(two_powers.toLong))
      put.add(cfData, Columns.PI_POWERS_AS_FLOAT, Bytes.toBytes(pi_powers.toFloat))
      put.add(cfData, Columns.PI_POWERS_AS_DOUBLE, Bytes.toBytes(pi_powers.toDouble))
      powersTable.put(put)
    }
  }

  def printTable(sc : SparkContext, config : Configuration) {
    config.set(TableInputFormat.INPUT_TABLE, TABLE_NAME.getNameAsString)

    val hbaseRDD = sc.newAPIHadoopRDD(
      config,
      classOf[TableInputFormat],
      classOf[org.apache.hadoop.hbase.io.ImmutableBytesWritable],
      classOf[org.apache.hadoop.hbase.client.Result]
    )

    println("description,two_powers_as_int,two_powers_as_bigint,pi_powers_as_float,pi_powers_as_double")
    hbaseRDD.collect().foreach(kv => printRow(kv._2))
  }

  def printRow(row : org.apache.hadoop.hbase.client.Result) {
    val cfData = Bytes.toBytes("data")
    println(
      "%s,%s,%s,%s,%s".format(
        Bytes.toString(row.getValue(cfData, Columns.DESCRIPTION)),
        Bytes.toInt(row.getValue(cfData, Columns.TWO_POWERS_AS_INT)).toString,
        Bytes.toLong(row.getValue(cfData, Columns.TWO_POWERS_AS_BIGINT)).toString,
        Bytes.toFloat(row.getValue(cfData, Columns.PI_POWERS_AS_FLOAT)).toString,
        Bytes.toDouble(row.getValue(cfData, Columns.PI_POWERS_AS_DOUBLE)).toString
      )
    )
  }

  def main(args : Array[String]) {
    val conf = new SparkConf()
    val sc = new SparkContext(conf)
    val config = HBaseConfiguration.create()

    createTable(config)
    loadTable(config)
    printTable(sc, config)
  }

}
