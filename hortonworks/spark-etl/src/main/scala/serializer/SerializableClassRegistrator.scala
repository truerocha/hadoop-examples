package com.servian.spark.serializer

import com.esotericsoftware.kryo.Kryo
import org.apache.spark.serializer.KryoRegistrator

import org.apache.hadoop.hbase.mapreduce.TableInputFormat

class SerializableClassRegistrator extends KryoRegistrator {
  override def registerClasses(kryo : Kryo) {
    kryo.register(classOf[TableInputFormat])
  }
}
