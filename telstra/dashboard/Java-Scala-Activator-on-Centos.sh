   typeset -r SYSEXECS=/bin
   typeset -r E_OK=0
   typeset -r E_ABORT=1
   
   function Log
   {
       typeset -r LogLevel=$1;
       shift 1;
   
      case $LogLevel in
      'INFO')
          $SYSEXECS/echo "$@"
          ;;
      'DEBUG')
          $SYSEXECS/echo 1>&2 "$@"
          ;;
      'ERROR')
          $SYSEXECS/echo 1>&2 "ERROR: $@"
          ;;
      esac
      return $E_OK
  }
#
# Check Java is installed or not, If java is installed check Version,Download and installed of Java
# 
 function install_java {
 
      Log 'DEBUG' "function download_and_install start"

    if type -p java; then
          version=$("java" -version 2>&1 | awk -F '"' '/version/ {print $2}')
          echo version "$version"
       if [[ "$version" > "1.8.0" ]]; then
          echo "Your Java Update"     
         else
          echo Updating...........
         # Installing the Java
          Log 'INFO' "Downloading Java"
          echo "Installing Java"
          #read -p "enter the Java_JRE_version:"Java_JRE_version
          yum install java-1.7.0-openjdk
          #read -p "enter the Java_JDK_version:"Java_JDK_version
          yum install java-1.7.0-openjdk-devel
       fi

     else
         # Installing the Java
          Log 'INFO' "Downloading Java"
          echo "Installing Java"
          #read -p "enter the Java_JRE_version:"Java_JRE_version
          yum install java-1.7.0-openjdk
          #read -p "enter the Java_JDK_version:"Java_JDK_version
          yum install java-1.7.0-openjdk-devel

      fi
       Log 'DEBUG' "function download_and_install end"
   }
#
#Check Scala is installed or not, If java is installed check Version, Download and installed lastest Version of Java  
#
 function install_scala
 {
 
      Log 'DEBUG' "function download_and_install start"
 
      if type -p scala; then
          version=$(scala -version 2>&1 | awk '{print $5}')
          echo version "$version"
        if [[ "$version" > "2.11.6" ]]; then
          echo " Your Scala Updated"
       else
           echo Updating...........
          #Downloading and Insatlling the Scala
           Log 'INFO' "Downloading scala"
           echo "Installing Scala"
           #read -p "enter the scala_version:"scala_version
           wget http://www.scala-lang.org/files/archive/scala-2.10.1.tgz
           tar xvf scala-scala_version.tgz
           sudo mv scala-scala_version /usr/lib
           sudo ln -f -s /usr/lib/scala-scala_version /usr/lib/scala
           #Configure
           export PATH=$PATH:/usr/lib/scala/bin
       fi

     else
         #Downloading and Insatlling the Scala
          Log 'INFO' "Downloading scala"
          echo "Installing Scala"
          #read -p "enter the scala_version:"scala_version
          wget http://www.scala-lang.org/files/archive/scala-2.10.1.tgz
          tar xvf scala-scala_version.tgz
          sudo mv scala-scala_version /usr/lib
          sudo ln -f -s /usr/lib/scala-scala_version /usr/lib/scala
          #Configure
          export PATH=$PATH:/usr/lib/scala/bin

       fi
          Log 'DEBUG' "function download_and_install end"
 }
#
#Check Typesafe Activator is installed or not, If typesafe Activator is installed check Version, Download and installed lastest Version of Java 
 #

 function install_Activator
 {
         Log 'DEBUG' "function download_install_brew start"
 
      if type -p activator; then
          version=$(sbt --version 2>&1 | awk '{print $4}')
          echo version "$version"
        if [[ "$version" > "0.13.7" ]]; then
           echo "Your sbt Update".
      else  
           echo Updating...........
          # Installing Activator
          Log 'INFO' "Downloading Activator"
          echo "Installing Activator"
          #read -p "enter the Activator_version:"Activator_version
          wget http://dl.bintray.com/sbt/rpm/sbt-0.13.5.rpm
          yum localinstall sbt-0.13.5.rpm
          
      fi

       else
          #Installing Activator
          Log 'INFO' "Downloading Activator"
          echo "Installing Activator"
          #read -p "enter the Activator_version:"Activator_version
          wget http://dl.bintray.com/sbt/rpm/sbt-0.13.5.rpm
          yum localinstall sbt-0.13.5.rpm

      fi   
         Log 'DEBUG' "function download_and_install end" 
}

function download_and_install
{
   install_java
   install_scala
   install_Activator
}

function main
{
    download_and_install

    echo 'Done.'
    exit $E_OK
}

main "$@"
