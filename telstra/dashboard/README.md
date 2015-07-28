
#Telstra Big Data Monitoring Dashboard

##Overview

This project aims to build a web-based monitoring portal for Telstra's big data platform.
The project is built using the [Scala](http://scala-lang.org) programming language and the 
[Play Framework](https://www.playframework.com).

##Developer's Guide

###Prerequisites

1. To run the Play Framework, you need JDK 6 or later
    * On Mac OS X 10.10.4, Java is built-in. 
    * On Linux, make sure to use either the Sun JDK or OpenJDK (and not gcj, which is the default Java command on many Linux distros).
    * Be sure to have the java and javac commands in the current path (you can check this by typing java -version and javac -version at the shell prompt)

    
2. Install Scala
        
 

3. Install Activator

    * Play is distributed through a tool called Typesafe Activator. Typesafe Activator provides the build tool (sbt) that Play is built on, and also provides many templates to help get you started with writing new applications.

    * For Mac OS X:  brew install typesafe-activator
    * For Linux (Ubuntu): Download the latest Activator distribution and extract the archive 
to a location where you have both read and write access. 
For convenience, you should add the Activator installation directory to your system PATH.
    ```
    export PATH=$PATH:/relativePath/to/activator 
    ```

4. Check that the activator command is available:

    * From a shell, launch the ```activator -help``` command.
    * Create a new application with the activator command.



###Setting Up the Environment Using Brew-java-scala-activator.sh

1. Clone the respository using the following command:
   ```
   git clone https://github.com/servian/hadoop-examples.git 
   ```
2. Change directory to, ```cd hadoop-examples/telstra/dashboard```
3. Change mode of the shell script Brew-java-scala-activator.sh, using the command: ``` chmod u+x Brew-java-scala-activator.sh```
4. Run the shell script Brew-java-scala-activator.sh to install brew, java, scala and activator using the following command:
	``` ./Brew-java-scala-activator.sh```
4. Clean, compile and run the play-scala project using,
	```
	sbt clean && sbt compile && sbt run
	```
5. Using your browser of choice and go to  
	```
	
		localhost:9000
		localhost:9000/index				--> To View the Index Page
		localhost:9000/dasboard				--> To View the Dashboard Page
		localhost:9000/getTables			--> To View the Get Tables data from the rest service
		localhost:9000/getSourceLineages --> To View the Get Source Lineages data from the rest service
		localhost:9000/getColumns 			--> To View the Get Columns data from the rest service
		localhost:9000/getSourceMatrix	--> To View the Get Source Matrix from the rest service
		```
7. The dashboard/conf/application.conf contains the mysql driver, url, username and password:
	```
			
			db.hive.driver="com.mysql.jdbc.Driver"
			db.hive.url="jdbc:mysql://localhost:3306/hive"
			db.hive.user="<username>"
			db.hive.pass="<password>"
			```
	
Note: The dashboard panel should contain the data from the getTables and the getSourceMatrix and can be reviewed in the dashboard/public/javascripts/init.js file

###Setting up the MySQL Environment
1. Load the hive_backup.sql: mysql -u <username> -p < hive_backup.sql, enter your password
2. Use the hive database: ``` use hive;```
3. Create the Source_Matrix table:
```
		
		CREATE TABLE SOURCE_MATRIX(
		user_story VARCHAR(1000),
		big_data_owner VARCHAR(1000),
		app_id VARCHAR(1000),
		source VARCHAR(1000),
		data_description VARCHAR(1000),
		architecture_domain VARCHAR(1000),
		use_cases VARCHAR(1000), 
		contact_details VARCHAR(1000), 
		data_layout VARCHAR(1000),
		host_names VARCHAR(1000),
		host_ip VARCHAR(1000),
		port_number VARCHAR(1000),
		network VARCHAR(1000),
		db_instance VARCHAR(1000),
		file_location_on_server VARCHAR(1000), 
		api_data_sourcing_string VARCHAR(1000),
		other_comments VARCHAR(1000)
		);
		```
4. Insert Sample Data:
		
		```
		INSERT INTO SOURCE_MATRIX(user_story,big_data_owner,app_id,source,
		data_description,architecture_domain,use_cases, contact_details, data_layout,
		host_names,host_ip,port_number,network,db_instance,file_location_on_server, 
		api_data_sourcing_string,other_comments)
		VALUES("US83","Oliver Ferdinando","APP-6638","LIVECHAT 1.0",
		"Collaboration tool between Telstra Business (TB) end customers and TB CSRs to help customers with sales, service, and support, without calling in.",
		"ONLINE","Customer - ComplaintsCustomer - CEL","Andy Chan (Technical Contact)","Text based",
		"transbp.wg.dir.telstra.com","144.136.107.191","22","EDN","Oracle Table","hdfs://tdcdv2/data/tdc/dv1/ret/base/livechat/livechat_transscript","NA","User account to connect to UCSv1");
```
