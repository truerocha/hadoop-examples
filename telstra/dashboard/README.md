
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

4. The activator command can be used to create a new Play application. Activator allows you to select a template that your new application should be based off 
    * ```activator new my-first-app```
    * Select the play-scala template
    *  Enter the project name 
    *  Go into Project ```cd Project Name```
    * Run the activator command ```activator run```
    * Open your browser and type localhost:9000 (it will show your home page of play)


 
                   





