#!/bin/bash

#------------------------------------------------------------------------------
# gscot.sh
#------------------------------------------------------------------------------
#
# Great Scot - The Globalsoft COnfiguration Tool
#
# Downloads and installs tools required for development environments on new 
# Mac OS X machines.
#
#------------------------------------------------------------------------------
# Copyright GSoft Services Private Limited. All Rights Reserved.
#------------------------------------------------------------------------------

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
                                                                                   

function printusage
{                                                                                  
    Log 'INFO' "usage: $0"
    return 0                                                                         
}                                                                                  


function checkargs
{                                                                                  
    if [[ $# -ne 0 ]]; then                                                        
        return 1                                                                     
    fi                                                                             
}                                                                                  

function download_and_install
{            
    typeset -a utilities
    typeset utility_path

    #
    # Command line utilities
    #

    # Download and install OS X Command Line Tools
    if [[ ! -x /usr/bin/gcc ]]; then
        Log 'INFO' "| Install   | xcode command line tools"
        sudo eval '/usr/bin/xcode-select --install'
    fi

    # Download, install and set path for Homebrew 
    if [[ ! -x /usr/local/bin/brew ]]; then
        Log 'INFO' "| Install   | homebrew"
        ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        export PATH=/usr/local/bin:$PATH
        brew doctor
    fi

    if [[ -x /usr/local/bin/brew ]]; then
        # Download and install utilities for /usr/local/bin (alphabetical by utility)
        utilities=( ansible dos2unix git hg jq nmap node python3 tree watch wget )

        for utility in "${utilities[@]}" 
        do
            utility_path="/usr/local/bin/${utility}"
            if [[ ! -x "${utility_path}" ]]; then
                Log 'INFO' "| Install   | ${utility}"
                brew install ${utility}
            fi
        done

        if [[ ! -x /usr/local/bin/convert ]]; then
            Log 'INFO' "| Install   | imagemagick"
            brew install imagemagick 
        fi

        if [[ ! -x /usr/local/sbin/mtr ]]; then
            Log 'INFO' "| Install   | mtr"
            brew install mtr 
        fi
    else
        Log 'ERROR' "| Skipping Unix utility installation: /usr/local/bin/brew not found"
    fi

    #
    # Node.js related installables
    #

    if [[ -x /usr/local/bin/npm ]]; then
        if [[ ! -x /usr/local/bin/bower ]]; then
            Log 'INFO' "| Install   | bower"
            npm install -g bower
        fi

        if [[ ! -x /usr/local/bin/grunt ]]; then
            Log 'INFO' "| Install   | grunt-cli"
            npm install -g grunt-cli
        fi
    else
        Log 'ERROR' "| Skipping Node.js related installables: /usr/local/bin/npm not found"
    fi


    #
    # Python related installables
    #

    # Download and install pip using easy_install
    if [[ ! -x /usr/local/bin/pip ]]; then
        Log 'INFO' "| Install  | pip"
        sudo easy_install pip
        if [[ $? -ne 0 ]]; then
            Log 'ERROR' "| Unable to install pip"
        fi
    fi
        

    # Download and install Python modules through pip (Python installer)
    if [[ -x /usr/local/bin/pip ]]; then

        if [[ ! -x /usr/local/bin/pylint ]]; then
            Log 'INFO' "| Install   | pylint (Python static-code checker)"
            sudo pip install pylint
        fi

        if [[ ! -x /usr/local/bin/aws ]]; then
            Log 'INFO' "| Install   | awscli (AWS command-line tools)"
            sudo pip install awscli
            sudo complete -C aws_completer aws       
        fi

        if [[ ! -x /Library/Python/2.7/site-packages/boto ]]; then
            Log 'INFO' "| Install   | boto (Python AWS module)"
            sudo pip install boto
        fi

    else
        Log 'ERROR' "| Unable to install Python modules: /usr/local/bin/pip not found"
    fi

    return 0
}


function main                                                                      
{                                                                                  
    if ! checkargs "$@"; then                                                      
        printusage                                                                 
        exit 1                                                                     
    fi                                                                             

    download_and_install

    echo 'Done.'
    exit 0                                                                         
}                                                                                  

main "$@"              
