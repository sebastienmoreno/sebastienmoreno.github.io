---
publishDate: 2016-06-20T00:00:00Z
title: Setup Elastic Stack monitoring
description: The goal of the tutorial is to set up Logstash to gather syslogs of multiple servers, and set up Kibana to visualize the gathered logs.
excerpt: Set up Logstash to gather syslogs of multiple servers, and set up Kibana to visualize the gathered logs
image: ~/assets/images/elastic.jpg
category: Tutorials
tags:
  - elastic
  - kibana
  - logstash
  - elasticsearch
  - monitoring
  - devops
---

The goal of the tutorial is to set up Logstash to gather syslogs of multiple servers, and set up Kibana to visualize the gathered logs.

Our **Elastic stack** (_previously named ELK stack_) setup has four main components:

-   **Logstash**: The server component of Logstash that processes incoming logs
-   **Elasticsearch**: Stores all of the logs
-   **Kibana**: Web interface for searching and visualizing logs, which will be proxied through Nginx
-   **Filebeat**: Installed on client servers that will send their logs to Logstash, Filebeat serves as a log shipping agent that utilizes the _lumberjack_ networking protocol to communicate with Logstash

_This installation example use a Linux VM._

## Installation methods

As you see, the Elastic Stack in based on several services bind together : **Logstash, Elasticsearch, Kibana**

Several methods of installation are possible.

### RPM / APT packages

All services are available by APT or RPM packages. Use them speed the installation and setup a standard and common architecture.

The maintenance is easier and configuration standard. Tools are installed as services.

### Custom installation

Every tools are also available by archives. You can then setup a custom installation.

It is the more flexible installation, because you setup the tools and services how you really want.

But maintenance is more expensive and the installation not really standard.

### Docker with 1 container

If you can use Docker in your infrastructure, you can setup a container to hold all the tools of the Elastic Stack.

A Docker image provides a convenient centralised log server and log management web interface.

This is the fastest and simpliest way to have an Elastic Stack up and running.

To do that, you can reuse images of the Docker Hub:

-   [https://hub.docker.com/r/brandixi3/elk-stack/](https://hub.docker.com/r/brandixi3/elk-stack/)
-   [https://hub.docker.com/r/opentica/elastic-stack/](https://hub.docker.com/r/opentica/elastic-stack/)

Or you can build your own image, starting from a DockerFile :

-   [https://hub.docker.com/r/brandixi3/elk-stack/~/dockerfile/](https://hub.docker.com/r/brandixi3/elk-stack/~/dockerfile/)

This method is quit fast and usefull, but to bring more flexibility to your architecture, you could use separate container for each services.

### Docker multiple container

If you can use Docker in your infrastructure, a multiple Docker architecture is very interesting in this case. Because it brings flexibility of configuration and speed of setup.

Official images are available on the Docker Hub for each tools:

-   **Elasticsearch: [https://hub.docker.com/_/elasticsearch/](https://hub.docker.com/_/elasticsearch/)**
-   **Logstash: [https://hub.docker.com/_/logstash/](https://hub.docker.com/_/logstash/)**
-   **Kibana: [https://hub.docker.com/_/kibana/](https://hub.docker.com/_/kibana/)**

Starting with these Docker images, you can create and maintain your own Docker Compose

See Docker Compose documentation: [https://docs.docker.com/compose/](https://docs.docker.com/compose/)

This page will focus in the custom or package installation of the Elastic Stack.

## Setup an Elastic Stack server

### Target platform

Our ELK stack setup has four main components:

-   **Logstash**: The server component of Logstash that processes incoming logs
-   **Elasticsearch**: Stores all of the logs
-   **Kibana**: Web interface for searching and visualizing logs, which will be proxied through Nginx
-   **Filebeat**: Installed on client servers that will send their logs to Logstash, Filebeat serves as a log shipping agent that utilizes the _lumberjack_ networking protocol to communicate with Logstash

We will install the first three components on a single server, which we will refer to as our **ELK Server**. Filebeat will be installed on all of the client servers that we want to gather logs for, which we will refer to collectively as our**Client Servers**.


![target-elk](/public/images/elastic/target-elk.png)

### Pre-requisites

-   Linux server (here Centos 7) with 4Go RAM
-   Java 8 installed

#### Install Oracle Java 8

Check installed JDK/JRE:

```
rpm -qa | grep -E '^open[jre|jdk]|j[re|dk]'
```

Download JDK 8:

```
wget http://download.oracle.com/otn-pub/java/jdk/8u91-b14/jdk-8u91-linux-x64.rpm
rpm -ivh jdk-8u91-linux-x64.rpm
```

### Install ElasticSearch

#### Custom Install

As root:

```sh
mkdir /apps
chmod 755 /apps
mkdir /apps/elacticstack
chmod 755 /apps/elacticstack/
useradd elastic
chown elastic.elastic -R /apps/elacticstack/
cd /apps/elacticstack/
wget https://download.elastic.co/elasticsearch/release/org/elasticsearch/distribution/zip/elasticsearch/2.3.3/elasticsearch-2.3.3.zip
unzip elasticsearch-2.3.3.zip
ln -s elasticsearch-2.3.3 elasticsearch
```

Launch:
```
elasticsearch/bin/elasticsearch -d
```

#### Package Install (recommended)
```
wget https://download.elastic.co/elasticsearch/release/org/elasticsearch/distribution/rpm/elasticsearch/2.3.3/elasticsearch-2.3.3.rpm
rpm -ivh elasticsearch-2.3.3.rpm

attention : elasticsearch-2.3.3.rpm: Entête V4 RSA/SHA1 Signature, clé ID d88e42b4: NOKEY
Préparation...                       ################################# [100%]
Creating elasticsearch group... OK
Creating elasticsearch user... OK
Mise à jour / installation...
   1:elasticsearch-2.3.3-1            ################################# [100%]
### NOT starting on installation, please execute the following statements to configure elasticsearch service to start automatically using systemd

 sudo systemctl daemon-reload
 sudo systemctl enable elasticsearch.service
```

### You can start elasticsearch service by executing
```
 sudo systemctl start elasticsearch.service
```

##### Configuration

You will want to restrict outside access to your Elasticsearch instance (port 9200), so outsiders can’t read your data or shutdown your Elasticsearch cluster through the HTTP API.

Find the line that specifies network.host, uncomment it, and replace its value with « localhost » so it looks like this:
```
/etc/elasticsearch/elasticsearch.yml excerpt (updated)

network.host: localhost
```

##### Add start/stop configuration
```
chkconfig --add elasticsearch
chkconfig --level 3 elasticsearch
chkconfig --level 4 elasticsearch
chkconfig --level 5 elasticsearch
```

Relaunch the service:

```
service elasticsearch restart
```

##### Test install
```
curl -X GET http://localhost:9200/
```

### Install Kibana

**Custom install**
```
cd /apps
wget https://download.elastic.co/kibana/kibana/kibana-4.5.1-linux-x64.tar.gz
gunzip kibana-4.5.1-linux-x64.tar.gz
tar xvd kibana-4.5.1-linux-x64.tar
ln -s kibana-4.5.1-linux-x64 kibana
```

#### Package install (recommended)

```
wget https://download.elastic.co/kibana/kibana/kibana-4.5.1-1.x86_64.rpm

rpm -ivh kibana-4.5.1-1.x86_64.rpm

Préparation...                       ################################# [100%]
Mise à jour / installation...
   1:kibana-4.5.1-1                   ################################# [100%]

**Add start/stop configuration**

chkconfig --add kibana
chkconfig --level 3 kibana
chkconfig --level 4 kibana
chkconfig --level 5 kibana
```

##### Configuration

Open the Kibana configuration file for editing:
```
vi /opt/kibana/config/kibana.yml
```

In the Kibana configuration file, find the line that specifies server.host, and replace the IP address ("0.0.0.0" by default) with "localhost":

kibana.yml excerpt (updated)
```
server.host: "localhost"
```

Launch custom:
```
kibana/bin/kibana &
```

Package:
```
service kibana restart
```

##### Test install

curl http://localhost:5601/status

### Install Nginx

You can add a Yum repo:  
(here for CentOS 7, the URL )

```
cat > /etc/yum.repos.d/nginx.repo

[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basesearch/
gpgcheck=0
enabled=1
```

Or direct download:
```
wget http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.10.0-1.el7.ngx.x86_64.rpm
rpm -ivh nginx-1.10.0-1.el7.ngx.x86_64.rpm

attention : nginx-1.10.0-1.el7.ngx.x86_64.rpm: Entête V4 RSA/SHA1 Signature, clé ID 7bd9bf62: NOKEY
Préparation...                       ################################# [100%]
Mise à jour / installation...
   1:nginx-1:1.10.0-1.el7.ngx         ################################# [100%]
```

Or even from sources

```
wget http://nginx.org/download/nginx-1.10.0.tar.gz
gunzip nginx-1.10.0.tar.gz
tar xvf nginx-1.10.0.tar
```

#### Configuration

Use htpasswd to create an admin user, called « kibanaadmin » (you should use another name), that can access the Kibana web interface:

```
htpasswd -c /etc/nginx/htpasswd.users kibanaadmin
```

Now open the Nginx default server block in your favorite editor. We will use vi:
```
vi /etc/nginx/sites-available/default
```

Delete the file’s contents, and paste the following code block into the file. Be sure to update the server_name to match your server’s name: /etc/nginx/conf.d/default.conf
```
server {
  listen 80;
  server_name localhost;
  auth_basic "Restricted Access";
  auth_basic_user_file /etc/nginx/htpasswd.users;
  location / {
     proxy_pass http://localhost:5601;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_cache_bypass $http_upgrade;
  }
}
```

Save and exit.  

This configures Nginx to direct your server’s HTTP traffic to the Kibana application, which is listening on localhost:5601. Also, Nginx will use the htpasswd.users file, that we created earlier, and require basic authentication.

Now restart Nginx to put our changes into effect:
```
service nginx restart
```

#### Test install

Go to the follwing page: http://localhost/status

### Install Logstash

#### Package Install (recommended)
```
wget https://download.elastic.co/logstash/logstash/packages/centos/logstash-2.3.2-1.noarch.rpm
rpm -ivh logstash-2.3.2-1.noarch.rpm
```

Add start/stop configuration

```
chkconfig --add logstash
chkconfig --level 3 logstash
chkconfig --level 4 logstash
chkconfig --level 5 logstash
```

Custom install
```
cd /apps/elasticstack
wget https://download.elastic.co/logstash/logstash/logstash-2.3.2.zip
unzip logstash-2.3.2.zip
ln -s logsmash-2.3.2.zip logstash
```

#### Configuration

**Generate SSL Certificates**
```
mkdir -p /etc/pki/tls/certs
mkdir -p /etc/pki/tls/private
```

Edit /etc/pki/tls.openssl.cnf or (/etc/ssl/openssl.cnf), after [ v3_ca ] add:
```
[ v3_ca ]
subjectAltName = IP: <current ip>
```

with <current ip> the ip of the server

Now generate the key and certificat:
```
cd /etc/pki/tls
openssl req -config /etc/pki/tls/openssl.cnf -x509 -days 3650 -batch -nodes -newkey rsa:2048 -keyout private/logstash-forwarder.key -out certs/logstash-forwarder.crt

Generating a 2048 bit RSA private key
...........+++
............+++
writing new private key to 'private/logstash-forwarder.key'
```

Check the generation:
```
ls -l /etc/pki/tls/certs
total 4
-rw-r--r-- 1 root root 1249 juin   3 16:42 logstash-forwarder.crt

ls -l /etc/pki/tls/private
total 4
-rw-r--r-- 1 root root 1704 juin   3 16:42 logstash-forwarder.key
```

The logstash-forwarder.crt file will be copied to all of the servers that will send logs to Logstash.

### Configure Logstash
```
mkdir -p /etc/logstash
chown -R elastic.elastic /etc/logstash
mkdir /etc/logstash/conf.d
```

**Setup filters**  
A beats input will listen on tcp port 5044, and it will use the SSL certificate and private key that we created earlier.

A Syslog filter looks for logs that are labeled as « syslog » type (by Filebeat), and it will try to use grok to parse incoming syslog logs to make it structured and query-able.

An output basically configures Logstash to store the beats data in Elasticsearch which is running at localhost:9200, in an index named after the beat used (filebeat, in our case).
```
cat > /etc/logstash/conf.d/02-beats-input.conf
    input {
      beats {
        port => 5044
        ssl => true
        ssl_certificate => "/etc/pki/tls/certs/logstash-forwarder.crt"
        ssl_key => "/etc/pki/tls/private/logstash-forwarder.key"
      }
    }

cat > /etc/logstash/conf.d/10-syslog-filter.conf
    filter {
      if [type] == "syslog" {
        grok {
          match => { "message" => "%{SYSLOGTIMESTAMP:syslog_timestamp} %{SYSLOGHOST:syslog_hostname} %{DATA:syslog_program}(?:\[%{POSINT:syslog_pid}\])?: %{GREEDYDATA:syslog_message}" }
          add_field => [ "received_at", "%{@timestamp}" ]
          add_field => [ "received_from", "%{host}" ]
        }
        syslog_pri { }
        date {
          match => [ "syslog_timestamp", "MMM  d HH:mm:ss", "MMM dd HH:mm:ss" ]
        }
      }
    }

cat > /etc/logstash/conf.d/30-elasticsearch-output.conf
    output {
      elasticsearch {
        hosts => ["localhost:9200"]
        sniffing => true
        manage_template => false
        index => "%{[@metadata][beat]}-%{+YYYY.MM.dd}"
        document_type => "%{[@metadata][type]}"
      }
    }
```

#### Test
```
service logstash configtest
```

Configuration OK

#### Add a FileBeat dashboard
```
wget https://download.elastic.co/beats/dashboards/beats-dashboards-1.2.0.zip
unzip beats-dashboards-*.zip
cd beats-dashboards-*
./load.sh
```

When we start using Kibana, we will select the Filebeat index pattern as our default.

#### Load Filebeat Index Template in Elasticsearch
```
curl -O https://gist.githubusercontent.com/thisismitch/3429023e8438cc25b86c/raw/d8c479e2a1adcea8b1fe86570e42abab0f10f364/filebeat-index-template.json

curl -XPUT '[http://localhost:9200/_template/filebeat?pretty'](http://localhost:9200/_template/filebeat?pretty%27) -d@filebeat-index-template.json
```

If the template loaded properly, you should see a message like this:
```
Output:
{
  "acknowledged" : true
}
```

Installation of the Server is over  
Now we have to configure the clients.

## Setup a client

### Install FileBeat

#### Copy SSL Certificate on all clients

Copy the certificate from the Elastic server to all clients:
```
/etc/pki/tls/certs/logstash-forwarder.crt
```
#### Install Filebeat Package
```
wget https://download.elastic.co/beats/filebeat/filebeat-1.2.3-x86_64.rpm
rpm -ivh filebeat-1.2.3-x86_64.rpm
```

#### Configure Filebeat

Edit the FileBeat configuration file /etc/filebeat/filebeat.yml

**Change the inputs:**  
Patch the following lines to send logs to LogStash:
```
      paths:
#        - /var/log/*.log
        - /var/log/auth.log
        - /var/log/syslog
...
      document_type: syslog
...
```

**Change the outputs:**  
Patch the elasticsearch output : were are not going to use it:
```
  #elasticsearch:
```

Add the Logstash output:

### Logstash as output
```
  logstash:
    # The Logstash hosts
        hosts: ["ELK_server_private_IP:5044"]
    bulk_max_size: 1024
```

**Add the certificate configuration for SSL:**
```
# Optional TLS. By default is off.
tls:
  # List of root certificates for HTTPS server verifications
  certificate_authorities: ["/etc/pki/tls/certs/logstash-forwarder.crt"]
```

Now Filebeat is sending syslog and auth.log to Logstash on your ELK server! Repeat this section for all of the other servers that you wish to gather logs for.

### Test Filebeat Installation

Restart the filbeat service
```
service filebeat restart
```
### Connect to Kibana and verify log integration

Go ahead and select **filebeat-YYY.MM.DD** from the Index Patterns menu (left side), then click the Star (Set as default index) button to set the Filebeat index as the default.

Now click the **Discover link** in the top navigation bar. By default, this will show you all of the log data over the last 15 minutes. You should see a histogram with log events, with log messages below:

![kibana-result](/public/images/elastic/kibana-result.png)

## External Links

-   All this tutorial is an adaptation of this Ubuntu tutorial
    -   [https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elk-stack-on-ubuntu-14-04](https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elk-stack-on-ubuntu-14-04)
-   Elastic
    -   [https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html)
-   JDK install
    -   [http://www.unixmen.com/install-oracle-java-jdk-8-centos-76-56-4/](http://www.unixmen.com/install-oracle-java-jdk-8-centos-76-56-4/)