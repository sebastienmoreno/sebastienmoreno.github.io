---
publishDate: 2015-09-17T00:00:00Z
title: IBM Bluemix and Docker Webinar
description: cloud
excerpt: IBM Bluemix and Docker Webinar
image: ~/assets/images/bluemix-docker.jpg
category: Tutorials
tags:
  - cloud
  - architecture
  - devops
---


**Short presentation from IBM Emmanuel Vregille**   

Presentation:

1.  Concepts of Docker
2.  BlueMix features
3.  Demonstrations of Docker & BlueMix

-   **The video of the french webinar is here: [https://youtu.be/ISMFyXMCu3s](https://youtu.be/ISMFyXMCu3s)**

# Summary of IBM Bluemix and Docker WebInar

## Docker

An open platform for distributed applications for developers and sysadmins.  
Docker is an open-source project that automates the deployment of applications inside software containers, by providing an additional layer of abstraction and automation of operating-system-level virtualization on Linux, Mac OS and Windows. [https://www.docker.com/](https://www.docker.com/)

Docker is a huge success. 68% of CTO and CIO are preparing a Docker study for 2016.

**Docker** allows : applications independent and portable, optimize resources, faster deployments, adapt to micro-services

## Bluemix

**Bluemix** :

-   deploy and optimize Docker container on Bare Metal
-   bring Management of : images, containers, DockerHubs and DockerEngine

IBM has a partnership with Docker since june 2014

**Bluemix** provides :

-   a development Hub + development tools
-   a Service catalog to optimize resources
-   deployment / scalability features / Logging / Monitoring
-   as beta features : containers security scans

Bluemix offers 3 main profiles:

-   IAAS with OpenStack => manage VM
-   PAAS with CloudFoundry => cloud applications
-   Docker container => Bare Metal Docker container management

Also a catalog of services is available (for example to get a database).  
Local or Public Hub management

API and services oriented.

The JazzHub service manage development forge and release mechanism:  
Build Image => Deploy and link to services => Test

## Demo

The Demo consists of :

-   building locally a container image of a todolist application
-   deploying the container on the BlueMix Hub
-   Creating MongoDB service from service catalog of BlueMix to manage a bind
-   Use JazzHub to manage the container deployment
-   Run the BlueMix container bind to the MongoDB service  
    See Youtube link below to see the demo

# Important points

-   IBM changes its strategy and communication and follows the path of all the main actors by using Docker containers: Google Cloud, Amazon, Microsoft Azure, RedHat OpenShift, Heroku
-   IBM embrace with Bluemix and Docker the container architecture with cloud and micro-services
-   Bluemix use mainly OpenSources software inside (OpenStack, CloudFoundry, Docker)
-   By adding the Jazz Hub to the global picture, they bring a development forge AND a release management system (The catalog of BlueMix provide also Delivery Pipeline mechanism)
-   BlueMix can hold other technologies than Java, even for backend

## What can we foresee by these choices ?

-   Micro-services
-   API backend (not only Java: Node…)
-   Applications standardized in a DevOps way with Docker

# Next-step

-   The video of the french webinar is here: [https://youtu.be/ISMFyXMCu3s](https://youtu.be/ISMFyXMCu3s)
-   MOOC available on BlueMix [https://openclassrooms.com/ibm](https://openclassrooms.com/ibm)
-   BlueMix [https://console.ng.bluemix.net/](https://console.ng.bluemix.net/)
-   BlueMix MeetUp [http://bluemix.meetup.com/fr/cities/fr/paris/](http://bluemix.meetup.com/fr/cities/fr/paris/)
-   StackOverFlow Bluemix community [http://stackoverflow.com/questions/tagged/bluemix](http://stackoverflow.com/questions/tagged/bluemix)
-   Jazz Hub [https://hub.jazz.net/](https://hub.jazz.net/)
-   CloudFoundry [https://www.cloudfoundry.org](https://www.cloudfoundry.org/)
-   OpenStack [http://www.openstack.org/](http://www.openstack.org/)