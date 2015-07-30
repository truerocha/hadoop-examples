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
        Log 'INFO' "Downloading Homebrew from github.com"
        curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install
        brew doctor
    else
        Log 'INFO' "Updating Homebrew"
        brew update
        brew upgrade
    fi

    Log 'DEBUG' "function install_brew end"
}

# 
# Download and install Java if required
#
function install_java {
    Log 'DEBUG' "function install_java start"

    if type -p java; then
        _java=java
    elif [[ -n "$JAVA_HOME" ]] && [[ -x "$JAVA_HOME/bin/java" ]];  then
        echo found java executable in JAVA_HOME     
        _java="$JAVA_HOME/bin/java"
    else
        Log 'INFO' "Downloading Java"
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

    Log 'DEBUG' "function install_java end"
}

#
# Download and install Scala if required
#
function install_scala {
    Log 'DEBUG' "function install_scala start"

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

    Log 'DEBUG' "function install_scala end"   
} 

#
# Download and install TypeSafe Activator, if required
#
function install_activator
{
    Log 'DEBUG' "function install_activator start"

    if type -p activator; then
        _activator=activator
    elif [[ -n "$activator_HOME" ]] && [[ -x "$activator_HOME/local/bin/scala" ]];  then
        _scala="$activatorHOME/local/bin/scala"
    else
        Log 'INFO' "Downloading Activator"
        #read -p "enter the Activator_version:"Activator_version
        brew install activator 0.13.8 
    fi

    if [[ "$_activator" ]]; then
        version=$(activator --version 2>&1 | awk '{print $4}')
        if [[ "$version" > "2.9.3" ]]; then
            echo version "$version"
            echo "version is more than 1".
        else    
            echo "Activator-Update"
        fi
    fi
    Log 'DEBUG' "function install_activator end" 
}

function download_and_install {
    install_brew
    install_java
    install_scala
    # install_activator
}

function main {
    download_and_install

    echo 'Done.'
    exit $E_OK
}

main "$@"
