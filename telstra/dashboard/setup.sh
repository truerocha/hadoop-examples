#!/bin/bash

###############################################################################
#
# setup.sh 
#
# Download and install prerequisites for the Dashboard application on 
# Mac OS X 10.10.4 (Yosemite).
#
###############################################################################
# Copyright (c) 2015 Servain Pty Ltd. All rights reserved.
###############################################################################

typeset -r SYSEXECS=/bin
typeset -r E_OK=0
typeset -r E_ABORT=1

function Log {
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
# Download and install Homebrew if required, update otherwise
#
function install_brew {
    Log 'DEBUG' "function install_brew start"

    if type -p brew; then
        Log 'INFO' "Updating Homebrew"
        brew update
        brew upgrade
    else
        Log 'INFO' "Downloading Homebrew from github.com"
        curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install
        brew doctor
    fi

    Log 'DEBUG' "function install_brew end"
}

# 
# Download and install Java if required
#
function install_java {
    Log 'DEBUG' "function install_java start"

    if type -p java; then
        version=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}')
        Log 'INFO' "Java version $version detected."
        if [[ "$version" == "1.8.0_45" ]]; then
            echo "your Java is Up-to-date"
        else
            Log 'INFO' "Upgrading Java"
            echo "This tool requires Java version 1.8.0 or greater. Java $version has been detected in your system."
            userChoice=$(userUpdate)
            if [[ $userChoice == 'y' ]]; then
               	brew install caskroom/cask/brew-cask 
            	brew tap caskroom/versions
            	#read -p "enter the java_version:"java_version
            	brew cask install java
             else 
                 return
            fi
        fi
    
    else
        Log 'INFO' "Downloading Java"
        brew install caskroom/cask/brew-cask
        brew tap caskroom/versions
        #read -p "enter the java_version:"java_version
        brew cask install java
    fi

    Log 'DEBUG' "function install_java end"
}
#
# Download and install Scala if required
#
function install_scala {
    Log 'DEBUG' "function install_scala start"

    if type -p scala; then
         version=$(scala -version 2>&1 | awk '/version/ {print $5}')
         Log 'INFO' "Scala version $version detected."
        if [[ "$version" == "2.11.7" ]]; then
            echo "Your Scala Up-To-Date"
        else
            echo "This tool requires Scala version 2.11 or greater. Scala $version has been detected in your system."
            userChoice=$(userUpdate)
            echo $userChoice
            if [[ $userChoice == 'y' ]]; then 
            echo Updating...........
            #Insatlling the Scala
            Log 'INFO' "Downloading scala"
            echo "Installing Scala"
            #read -p "enter the scala_version:"scala_version
            brew Install scala   
            else
               return           
            fi
        fi    

    else 
          
        #Insatlling the Scala
         Log 'INFO' "Downloading scala"
         echo "Installing Scala"
         #read -p "enter the scala_version:"scala_version
         brew Install scala 
    fi

    Log 'DEBUG' "function install_scala end"   
} 
#
# Download and install sbt, if required
#
function install_sbt
{
    Log 'DEBUG' "function install_sbt start"

    if type -p sbt; then
        version=$(sbt --version 2>&1 | awk '{print $4}')
         Log 'INFO' "version $version detecetd."
        if [[ "$version" == "0.13.8" ]]; then
            echo "Your sbt Update".
        else 
             echo "This tool requires sbt version 0.13 or greater. sbt $version has been detected in your system."
             userChoice=$(userUpdate)
            if [[ $userChoice == 'y' ]]; then
            echo Updating...........   
           Log 'INFO' "Downloading sbt"
            #read -p "enter the sbt_version:"sbt_version
            brew install sbt
           else
               return          
           fi
        fi
        
    else
           Log 'INFO' "Downloading sbt"
           #read -p "enter the sbt_version:"sbt_version
           brew install sbt 
    fi
    
     Log 'DEBUG' "function install_sbt end" 
}

function userUpdate {
      read -p "Type Y/N to proceed: " userChoice
      userChoice=$(echo $userChoice | tr 'A-Z' 'a-z')
      echo $userChoice
}

function download_and_install {
         install_brew
         install_java
         install_scala
         install_sbt
}

function main {
        download_and_install

        echo 'Done.'
        exit $E_OK
}

main "$@"
