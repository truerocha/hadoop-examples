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


Install brew if not installed already, otherwise update to latest version.

 function install_brew
 {
     Log 'DEBUG' "function install_brew start"
 
     which -s brew
     if [[ $? != 0 ]] ; then
         # Download and install brew from github
         Log 'INFO' "Downloading brew"
         ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
         # To check for any issues with the install run
         brew doctor
     else
         Log 'INFO' "Updating Brew"
         brew update
         brew upgrade
     fi
 
     Log 'DEBUG' "function install_brew end"
 }

# Check Java is installed or not, If java is installed check Version,Download and installed of Java

function install_java {
 
     Log 'DEBUG' "function download_and_install start"
  
     which -s java
     if [[ $? != 0 ]] ; then
         echo found java executable in PATH
         _java=java
     elif [[ -n "$JAVA_HOME" ]] && [[ -x "$JAVA_HOME/bin/java" ]];  then
         echo found java executable in JAVA_HOME     
         _java="$JAVA_HOME/bin/java"
     else
        # Installing the Java
         Log 'INFO' "Downloading Java"
         echo "Installing Java"
         brew install caskroom/cask/brew-cask
         brew tap caskroom/versions
         #read -p "enter the java_version:"java_version
         brew cask install java7
     fi
 
     if [[ "$_java" ]]; then
        version=$("$_java" -version 2>&1 | awk -F '"' '/version/ {print $2}')
         echo version "$version"
         if [[ "$version" > "5.0" ]]; then
             echo version is more than 1.5
         else
             echo "java Update"     
         fi
     fi
     
     Log 'DEBUG' "function download_and_install end"
 
 }

#Check Scala is installed or not, If java is installed check Version, Download and installed lastest Version of Java  

function install_scala
{

     Log 'DEBUG' "function download_and_install start"

     if type -p scala; then
          echo "found scala executable" in PATH
          _scala=scala
      elif [[ -n "$SCALA_HOME" ]] && [[ -x "$SCALA_HOME/local/bin/scala" ]];  then
          echo found scala executable in SCALA_HOME     
          _scala="$SCALA_HOME/local/bin/scala"
      else 
         #Insatlling the Scala
         Log 'INFO' "Downloading scala"
          echo "Installing Scala"
          #read -p "enter the scala_version:"scala_version
           brew Install scala 2.11.7
      fi

      if [[ "$_scala" ]]; then
          #version=$("$_scala" -version 2>&1 | awk -F '"' '/version/ {print $5}')
          version=$(scala -version 2>&1 | awk '{print $5}')
          echo version "$version"
          if [[ "$version" > "2.9.3" ]]; then
              echo "version is more than 1".
         else    
              echo "Scala Updated"
               
            
          fi
      fi

            Log 'DEBUG' "function download_and_install end"   
} 

#Check Typesafe Activator is installed or not, If typesafe Activator is installed check Version, Download and installed lastest Version of Java 

function install_Activator
{

        Log 'DEBUG' "function download_install_brew start"

     if type -p typeactivator; then
         echo "found activator executable" in $PATH
         _activator=activator
     elif [[ -n "$activator_HOME" ]] && [[ -x "$activator_HOME/local/bin/scala" ]];  then
         echo found activator executable in activator_HOME     
         _scala="$activatorHOME/local/bin/scala"
     else
         # Installing Activator
         Log 'INFO' "Downloading Activator"
         echo "Installing Activator"
         #read -p "enter the Activator_version:"Activator_version
          brew install activator 0.13.8 
     fi

     if [[ "$_activator" ]]; then
         version=$(activator --version 2>&1 | awk '{print $4}')
         echo version "$version"
         if [[ "$version" > "2.9.3" ]]; then
             echo "version is more than 1".
         else    
             echo "Activator-Update"
              
            
         fi
     fi   

        Log 'DEBUG' "function download_and_install end" 
}


function download_and_install
{
	
   install_brew
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
