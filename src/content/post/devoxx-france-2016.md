---
publishDate: 2016-05-24T00:00:00Z
title: Devoxx France 2016 return of experience
description: Devoxx France 2016 return of experience
excerpt: devoxx 2016
image: ~/assets/images/devoxx-2016.jpg
category: Tutorials
tags:
  - conference
  - architecture
  - devops
  - news
---

**Once again Devoxx France took place at the « Palais des Congress » in Paris from April 20 to 22 2016.**

Devoxx France is part of the family Devoxx conferences (Belgium, England, Poland, Morocco). The community includes over 10,000 developers worldwide.

It was created in 2012 by the association of the Paris JUG. With 2,500 people in 2016, is one of the conferences for the most important developer. If DNA Devoxx France is the Java platform, conferences are also open to other themes such as mobility, Web, Cloud Computing, Mobile, etc.

238 speakers, 220 conferences, and of course a lot of information on IT development for this 5th edition of Devoxx France.

Also a village of exhibitors welcome visitors all the day between the conferences.

**What are the subjects**

The various conferences are split into different types:

-   **Keynotes** : Opening plenaries of the days on large thematics (innovation, future, security, women in IT…)
-   **Conferences** : 45 minutes of presentations on technical subjects (most common type of conference)
-   **Universities** : 3 hours presentation, took place the first day
-   **Tools in Action** : short sessions of 25 minutes, intended to present a tool, a practical software or solution
-   **Hands-on Labs** : practice session of 3 hours, in rooms 25 to 60 people
-   **Quickies** : short sessions of 15 minutes during lunch
-   **BOF** (Bird of a feather) : point of rendezvous of user-groups, communities, meet ups….

All conferences are based on thematic tracks. The different tracks to suggest a topic:

-   **Java, JVM, Javas SE / EE** : About Java, JVM, Java SE, Java EE.
-   **Mobile and Internet of Things** : Mobile, Java and the Internet of Things, home automation and embedded systems.
-   **Web, HTML5 and UX** :  user-experience, front-end and web architecture.
-   **Architecture, Performance & Security** : Architecture, performance, encryption and best practices for developing secure software.
-   **DevOps, Agility, Methodology & Tests** : Methods and development practices / software deployment, TDD, BDD, xDD.
-   **Cloud and Scaling** : Cloud-computing, resilient architectures, containers
-   **Big Data and Analytics** : Store, analyze the data and revise the management of data.
-   **Future Robotics** :  Robotics and Computing for Tomorrow
-   **Alternative languages** : Groovy, Scala, GB, JavaScript, Clojure, Haskell, Haskell, Ceylon, etc.

As you can see, the topics are very Java / Mobile / Web oriented, with a large place to DevOps and Cloud.

It is impossible to make aa summary of all Devoxx conferences.

Here we will try to focus on the main informations provided by the conferences.

You can have a look at the Youtube playlist of Parleys to check the recorded conferences:

-   [https://www.youtube.com/channel/UCsVPQfo5RZErDL41LoWvk0A](https://www.youtube.com/channel/UCsVPQfo5RZErDL41LoWvk0A)
-   [https://www.youtube.com/playlist?list=PLklQqdqnBkPgctKh1xIvF4eFGtmvUvE2b](https://www.youtube.com/playlist?list=PLklQqdqnBkPgctKh1xIvF4eFGtmvUvE2b)


**Information held**

_Micro-services, Java and its future, Mobile development industrialisation and Web development future_ were the main ideas of this Devoxx edition.

**DevOps** was the underlining idea between them. In a way, there is no more doubt that DevOps must be applied everywhere and in any cases (Java backend development, Mobile, Web…). Tools can change a little, but the need is quit the same : acceptance and delivery must to be automated. We could heard DevOps in any conferences, what ever the technology was.

The same way, concerning application and mainly backend architecture, the underlining assumption was that you are doing Cloud development, API and **Micro-services**. Micro-services are the main wave of architecture associated to DDD (Domain Driven Design) as a development approach.

Bind to DevOps and micro-services, **Docker** confirmed once again is major influence to IT innovations.

Of course a lot conferences covered various other subjects, but these 3 concepts (DevOps, Micro-services, Containers) lead the majors ones.

**Picking some conferences**

Here are some informations extracts from various conferences.

**« Architecture Android et bonnes pratiques »**

Mathias Seguy, an Android expert shows best-practices, tools and examples on Android development.

He recommended a lot of Square librairies like:

-   Retrofit (Type-safe HTTP client)
-   Akio (A modern I/O API)
-   Moshi (A modern JSON library)
-   Okhttp (An HTTP+HTTP/2 client)
-   Leakcanary (memory leak detection)
-   Dagger (dependency injection, see below)

See [http://square.github.io/](http://square.github.io/)

As an event bus he recommended:

-   Otto
-   Eventbus

Very important in Android developments:

-   Analytics
-   Tests

For testing purpose he recommend:

-   Dagger dependency injection
-   Mockito with Espresso for UI testing
-   Leakcanary for memory leak detection
-   Genymotion emulator (cloud offers are available)

_In his opinion, Kotlin and RxJava are interesting things to see for the future of Android developments._

_See his presentation:_

[https://www.youtube.com/watch?v=yXWWuauVVEE](https://www.youtube.com/watch?v=yXWWuauVVEE)

**« Microservices IRL: ça fonctionne chez un client, on vous dit comment! »**

Stéphane Lagraulet and Olivier Revial present return of experience on developing and stepping micro-service at their client.

They explain the choice of micro-services by a convergence of moves associated to Agile, DevOps, answer to complexity, Web Architecture, Cloud, Containers and provisioning.

Challenges were the organisation, service discovery, monitoring, distributed development, resilience, test, strategy, versioning management, and continuous delivery.

They explain also anti-patterns like : do micro-services are really a necessity in our context? Distributed monolith, distributed transactions.

Technically, they developped micro-services with Spring Boot. They used tools like Zookeeper for service discovery, Zabbix for monitoring, Curator/Zookeeper for distributed development, Hystrix for circuit breaker. They use also Spring Cloud Zookeeper, and Spring Cloud Netflix (to integrate with Zulu).

For testing purpose, they use some RestTemplate, with WireMock or Saboteur. Gatling for performance tests.

Deployment is done by Ansible cookbook, executed by Jenkins.

But in the roadmap, they expect to deploy services with Spinnaker, Docker and Mesos.

They think about making study on Eureka or etc/CoreOs for service discovery.

Also, for communication between micro-services they will study Protobuf, Avro and Thrift.

_See their presentation:_

[https://www.youtube.com/watch?v=CeODpq9FdIA](https://www.youtube.com/watch?v=CeODpq9FdIA)

**« Jenkins, Docker Orchestrons le Continuous Delivery »**

Nicolas de Loof,  Yoann Dubreuil make a presentation on setup a delivery pipeline with Jenkins and Docker.

The goal here is to make a demo on continuous delivery orchestration.

They announce Jenkins 2.0 is out.

With Jenkins, pipeline of delivery was quit difficult to maintain, because of lots of plugins to use.

Here the speakers expose a solution to simplify the pipeline.

The Build Flow plugin allows to define the jobs through a DSL. The plugin act as an orchestrator.

But there is too much dispersion of information (separate jobs).

The other solution is to use the **Pipeline Plugin**, which allow to use a pipeline script (DSL) to define the build but also all the stages of the pipeline (Dev, QA, Prod…).

With the use of **JenkinsFile** the DSL file description is in the SCM and Jenkins will use it directly. This way we can have versioning of the Job configuration.

The _CloudBees Docker Custom Build Environment Plugin_ allow to use Docker image as slave of build.

The JenkinsFile can also use **Docker** image to specify where to build the application.

The **Multi-branch** plugin allows Jenkins to detect all the branch where there is a JenkinsFile and create a job associated.

_See their presentation:_

[https://www.youtube.com/watch?v=ij1-MNcRBSQ](https://www.youtube.com/watch?v=ij1-MNcRBSQ)

**Wrap-up**

Devoxx is a great conference moment, where you can get huge IT innovation information and share with other visitors and speakers.

Many conferences here confirm the big movement felt 2 or 3 years ago:

A global association between Agile, DevOps, Micro-services architecture, DDD, Docker containers and Cloud.

**More information**

-   Have a look at the Devoxx France web site
    -   [http://www.devoxx.fr](http://www.devoxx.fr)
-   Read the blog posts
    -   [http://www.devoxx.fr/blog/posts/2016](http://www.devoxx.fr/blog/posts/2016)
-   Have a look at the Devoxx Youtube playlists
    -   [https://www.youtube.com/channel/UCsVPQfo5RZErDL41LoWvk0A](https://www.youtube.com/channel/UCsVPQfo5RZErDL41LoWvk0A)
    -   [https://www.youtube.com/playlist?list=PLklQqdqnBkPgctKh1xIvF4eFGtmvUvE2b](https://www.youtube.com/playlist?list=PLklQqdqnBkPgctKh1xIvF4eFGtmvUvE2b)