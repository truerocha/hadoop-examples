
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
3. Clean, compile and run the play-scala project using,
	```
	activator clean
	activator compile 
	activator run
	```
4. Using your browser of choice and go to ``` localhost:9000/```
                   





