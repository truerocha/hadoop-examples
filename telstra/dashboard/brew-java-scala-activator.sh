# # Check brew is installed or not, If brew is installed its updated your brew
which -s brew
if [[ $? != 0 ]] ; then
    /usr/bin/ruby -e "$(curl -fsSL https://raw.github.com/gist/323731)"
else
	echo "Updating Brew"
  brew update
fi

# # Check Java is installed or not, If java is installed check Version, Download and installed lastest Version of Java

if type -p java; then
    echo found java executable in PATH
    _java=java
elif [[ -n "$JAVA_HOME" ]] && [[ -x "$JAVA_HOME/bin/java" ]];  then
    echo found java executable in JAVA_HOME     
    _java="$JAVA_HOME/bin/java"
else
    echo "Installing Java"
    brew tap caskroom/versions
    brew cask search java
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




# # #Check Scala is installed or not, If java is installed check Version, Download and installed lastest Version of Java

 if type -p scala; then
      echo "found scala executable" in PATH
      _scala=scala
  elif [[ -n "$SCALA_HOME" ]] && [[ -x "$SCALA_HOME/local/bin/scala" ]];  then
      echo found scala executable in SCALA_HOME     
      _scala="$SCALA_HOME/local/bin/scala"
  else
      echo "Installing Scala"
       brew Install scala 
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



# #Check Typesafe Activator is installed or not, If typesafe Activator is installed check Version, Download and installed lastest Version of Java

 if type -p typeactivator; then
     echo "found activator executable" in $PATH
     _activator=activator
 elif [[ -n "$activator_HOME" ]] && [[ -x "$activator_HOME/local/bin/scala" ]];  then
     echo found activator executable in activator_HOME     
     _scala="$activatorHOME/local/bin/scala"
 else
     echo "Installing Activator"
      brew install typesafe-activator 
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



# for CENTOS to install Java








