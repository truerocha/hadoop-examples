rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
yum -y install nagios nagios-plugins-all nagios-plugins-nrpe nrpe php httpd
chkconfig httpd on && chkconfig nagios on
service httpd start && service nagios start
iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT
yum install git
git clone https://github.com/zorkian/nagios-api.git
cd nagios-api
python setup.py install
