
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

2. Install Activator

    * Play is distributed through a tool called Typesafe Activator. Typesafe Activator provides the build tool (sbt) that Play is built on, and also provides many templates to help get you started with writing new applications.

    * For Mac OS X:  brew install typesafe-activator
    * For Linux (Ubuntu): Download the latest Activator distribution and extract the archive 
to a location where you have both read and write access. 
For convenience, you should add the Activator installation directory to your system PATH.
    ```
    export PATH=$PATH:/relativePath/to/activator 
    ```

3. Check that the activator command is available:

    * From a shell, launch the ```activator -help``` command.
    * Create a new application with the activator command.


###Setting Up Mac OS X Environment 
1. Comming soon!
                   
###Setting Up Hive 

1. Create a table on hive using the command in the hive shell: 
		```
		
		create table ingestion( 	user_story string, 
							big_data_owner string,
							app_id string,
							source string,
							data_description string,
							architecture_domain string,
							use_cases string, 
							contact_details string, 
							data_layout string,
							host_names string,
							host_ip string,
							port_number string,
							network string,
							db_instance string,
							file_location_on_server string, 
							api_data_sourcing_string string,
							other_comments string);		```
2. Load the ingestion.csv file in 'hadoop-examples/telstra/data' into hive using the command in the hive shell: 
		load data inpath '/ingestion.csv' overwrite into table ingestion;
		

###Running the Scala Application
1. In your terminal change directory to 'dashboard'
2. Inside ```dashboard/app/controllers/Application.scala```, please change the url, username and password according to your local hive setup
3. Once your inside 'dashboard', please clean, compile and run the play-scala project using the following command,
	```
	activator clean && activator compile && activator run
	```
4. In your browser of choice, you may browse to the following URLs: 
	* To view the index page, browse to http://localhost:9000/index.html
	* To view the dashboard page, browse to http://localhost:9000/dashboard.html
	* To view the injestion page, browse to http://localhost:9000/injestion  


