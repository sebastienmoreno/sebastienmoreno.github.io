---
publishDate: 2016-07-09T00:00:00Z
title: Start a project with JHipster
description: Start a project with JHipster
excerpt: "JHipster is a free and open-source application generator used to develop quickly a modern web application using AngularJS and the Spring Framework."
image: ~/assets/images/jhipster.jpg
category: Tutorials
tags:
  - java
  - practice
---


**JHipster** is a free and open-source application generator used to develop quickly a modern web application using AngularJS and the Spring Framework.  
JHipster provides tools to generate a project with a Java stack on the server side (using Spring Boot) and a responsive Web front-end on the client side (with AngularJS and Bootstrap).  
The term ‘JHipster’ comes from ‘Java Hipster’, as its initial goal was to use all the modern and ‘hype’ tools available at the time.  
Today, it has reached a more enterprise goal, with a strong focus on developer productivity, tooling and quality.

See this presentation for more information:  
[https://jhipster.github.io/presentation/#/](https://jhipster.github.io/presentation/#/)

## What JHipster do ?

### The major functionnalities

-   Generate a full stack application, with many options
-   Generate CRUD entities
-   Database migrations with Liquibase
-   NoSQL databases support (Cassandra, MongoDB)
-   Elasticsearch support
-   Websockets support
-   Automatic deployment to CloudFoundry, Heroku, OpenShift

### The Stack

**Technology stack on the client side**

Single Web page application:

-   Responsive Web Design
-   [HTML5 Boilerplate](http://html5boilerplate.com/)
-   [Twitter Bootstrap](http://getbootstrap.com/)
-   [AngularJS](http://angularjs.org/)
-   Compatible with IE9+ and modern browsers
-   Full internationalization support with [Angular Translate](https://github.com/angular-translate/angular-translate)
-   Optional [Sass](https://www.npmjs.com/package/node-sass) support for CSS design
-   Optional WebSocket support with Spring Websocket

With the great [Yeoman](http://yeoman.io/) development workflow:

-   Easy installation of new JavaScript libraries with [Bower](http://bower.io/)
-   Build, optimization and live reload with [Gulp.js](http://www.gulpjs.com/)
-   Testing with [Karma](http://karma-runner.github.io/) and [PhantomJS](http://phantomjs.org/)

And what if a single Web page application isn’t enough for your needs?

-   Support for the [Thymeleaf](http://www.thymeleaf.org/) template engine, to generate Web pages on the server side

**Technology stack on the server side**

A complete [Spring application](http://spring.io/):

-   [Spring Boot](http://projects.spring.io/spring-boot/) for easy application configuration
-   [Maven](http://maven.apache.org/) or [Gradle](http://www.gradle.org/) configuration for building, testing and running the application
-   [« development » and « production » profiles](https://jhipster.github.io/profiles/) (both for Maven and Gradle)
-   [Spring Security](http://docs.spring.io/spring-security/site/index.html)
-   [Spring MVC REST](http://spring.io/guides/gs/rest-service/) + [Jackson](https://github.com/FasterXML/jackson)
-   Optional WebSocket support with Spring Websocket
-   [Spring Data JPA](http://projects.spring.io/spring-data-jpa/) + Bean Validation
-   Database updates with [Liquibase](http://www.liquibase.org/)
-   [Elasticsearch](https://github.com/elastic/elasticsearch) support if you want to have search capabilities on top of your database
-   [MongoDB](http://www.mongodb.org/) support if you’d rather use a document-oriented NoSQL database instead of JPA
-   [Cassandra](http://cassandra.apache.org/) support if you’d rather use a column-oriented NoSQL database instead of JPA

Ready to go into production:

-   Monitoring with [Metrics](http://metrics.dropwizard.io/)
-   Caching with [ehcache](http://ehcache.org/) (local cache) or [hazelcast](http://www.hazelcast.com/) (distributed cache)
-   Optional HTTP session clustering with [hazelcast](http://www.hazelcast.com/)
-   Optimized static resources (gzip filter, HTTP cache headers)
-   Log management with [Logback](http://logback.qos.ch/), configurable at runtime
-   Connection pooling with [HikariCP](https://github.com/brettwooldridge/HikariCP) for optimum performance
-   Builds a standard WAR file or an executable JAR file

## How does it works

Here is an example of JHipster generation. All the source code example are available in my GitHub: [https://github.com/jamkey/simplejhipster](https://github.com/jamkey/simplejhipster)

### Proxy setup

Working in a corporate environment you very often have issue to access to Internet resources. A proxy is very often used by corporations to filter Internet accesses. Here are few tips to deal with proxies when using JHipster stack.

In order to work JHipster will get NPM packages from the registry.

You have to setup your proxy to work with command lines.

JHipster uses NPM, Bower. But these tools used also Git commands and Github accesses !

So you have to setup proxy for each tools. In the example, change <Your ID> and <Your password> by your Directory ID and password.

#### NPM proxy setup

To use a HTTP proxy add a config to NPM.

Example:
```sh
npm config set proxy http://<Your ID>:<Your password>@<proxy host>:<proxy port>
npm config set https-proxy http://<Your ID>:<Your password>@<proxy host>:<proxy port>
```

To delete this config you just have to execute the following commands:
```
npm config rm proxy
npm config rm https-proxy
```

With NPM you can also use a Nexus proxy to proxify all the access to NPM registry.

To do that you have to add a config to NPM.

Example:
```
npm config set registry http://mynexus.mycorporate/nexus/content/groups/npm-all
```

**All the config is put into a _.npmrc_ file in your home directory.**

#### Bower proxy setup

Add a _.bowerrc_ file into your home directory to add a proxy config.

Example:
```
{
   "directory": "library",
   "registry": "http://bower.herokuapp.com",
   "proxy": "http://<Your ID>:<Your password>@<my proxy host>:<my proxy port>",
   "https-proxy": "http://<Your ID>:<Your password>@<my proxy host>:<my proxy port>"
}
```

#### Git proxy setup

To use a HTTP proxy add a config to Git.

Example:

```
git config --global http.proxy http://<Your ID>:<Your password>@<your proxy host>:<your proxy port>
git config --global https.proxy http://<Your ID>:<Your password>@<your proxy host>:<your proxy port>
```

To delete this config you just have to execute the following commands:
```
git config --global --unset http.proxygit config --global --unset https.proxy
```

In somes cases, you will have to uncheck the SSL verification. This is not recommended !
```
git config --global http.sslVerify false
```

### Install JHipster

1.  Install Java 8 from [the Oracle website](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
2.  (Optional) Install a Java build tool.
    -   Whether you choose to use [Maven](http://maven.apache.org/) or [Gradle](http://www.gradle.org/), you normally don’t have to install anything, as JHipster will automatically install the [Maven Wrapper](https://github.com/takari/maven-wrapper) or the [Gradle Wrapper](http://gradle.org/docs/current/userguide/gradle_wrapper.html) for you.
    -   If you don’t want to use those wrappers, go to the official [Maven webiste](http://maven.apache.org/) or [Gradle website](http://www.gradle.org/) to do your own installation.
3.  Install Git from [git-scm.com](http://git-scm.com/). We recommend you also use a tool like [SourceTree](http://www.sourcetreeapp.com/) if you are starting with Git.
4.  Install Node.js from [the Node.js website](http://nodejs.org/) (prefer an LTS version). This will also install npm, which is the node package manager we are using in the next commands.
5.  Install Yeoman:
```
npm install -g yo
```

6. Install Bower:
```
npm install -g bower
```

7. Install Gulp:
```
npm install -g gulp
```

8. Install JHipster:
```
npm install -g generator-jhipster
```

To know the version of JHipster you use execute the command:
```
npm list -g generator-jhipster  
/Users/sebastien/.node/lib  
└── generator-jhipster@3.4.2  
```

You will need a compiler for your OS (Visual C++ for Windows…) in order to build some tools and benefit from all the features.

Example for Windows:

[http://www.microsoft.com/fr-fr/download/details.aspx?id=19988](http://www.microsoft.com/fr-fr/download/details.aspx?id=19988)

### Generate the base project

In this example we start generating a simple application called **simplejhipster**

Launch the Yeoman JHipster generator and just follow the questions.
```
$ mkdir simplejhipster
$ cd simplejhipster
$ yo jhipster
 
        ██  ██    ██  ████████  ███████    ██████  ████████  ████████  ███████
        ██  ██    ██     ██     ██    ██  ██          ██     ██        ██    ██
        ██  ████████     ██     ███████    █████      ██     ██████    ███████
  ██    ██  ██    ██     ██     ██             ██     ██     ██        ██   ██
   ██████   ██    ██  ████████  ██        ██████      ██     ████████  ██    ██

                            http://jhipster.github.io

Welcome to the JHipster Generator v3.4.2
Application files will be generated in folder: /Users/sebastien/veille/jhipsterexample
? (1/16) Which *type* of application would you like to create? Monolithic application (recommended for simple projects)
? (2/16) What is the base name of your application? simplejhipster
? (3/16) What is your default Java package name? fr.jamkey.jhipster
? (4/16) Which *type* of authentication would you like to use? HTTP Session Authentication (stateful, default Spring Security mechanism)
? (5/16) Do you want to use social login (Google, Facebook, Twitter)? Warning, this doesn't work with Cassandra! No
? (6/16) Which *type* of database would you like to use? SQL (H2, MySQL, MariaDB, PostgreSQL, Oracle)
? (7/16) Which *production* database would you like to use? MySQL
? (8/16) Which *development* database would you like to use? H2 with disk-based persistence
? (9/16) Do you want to use Hibernate 2nd level cache? Yes, with ehcache (local cache, for a single node)
? (10/16) Do you want to use a search engine in your application? No
? (11/16) Do you want to use clustered HTTP sessions? No
? (12/16) Do you want to use WebSockets? No
? (13/16) Would you like to use Maven or Gradle for building the backend? Gradle
? (14/16) Would you like to use the LibSass stylesheet preprocessor for your CSS? No
? (15/16) Would you like to enable internationalization support? Yes
? Please choose the native language of the application? English
? Please choose additional languages to install French
? (16/16) Which testing frameworks would you like to use? Gatling, Cucumber, Protractor
```

Yeoman will generate all the directory tree, Java classes, Javascript front, configuration, resources and build script from your choices.

The commands ‘_npm install_‘ and ‘_bower install_‘ are executed at the end to retrieve all the NPM and Bower dependencies

An advice here is to commit/push/tag the base project now, just after generating the base application.

It will be very usefull in order to use the merge features of Git when you will use again the generator.

For example, our SimpleJHipster application is tagged with a v0.0 version containing the base generation project:

[https://github.com/jamkey/simplejhipster/releases/tag/v0.0](https://github.com/jamkey/simplejhipster/releases/tag/v0.0)

All the generation configuration is kept into the _.yo-rc.json_ file at the root of the project.

Keep this file and just execute ‘yo jhipster’ and you will get the same base application.

The directory generated will look like this:

![Alt text](/public/images/jhipster/jhipster-directory.png)

#### Test the generated application

Execute the following command to launch the application:
```
gradle  
:bower  
:cleanResources UP-TO-DATE  
:nodeSetup SKIPPED  
:gulpConstantDev  
[14:49:03] Using gulpfile ~/veille/simplejhipster/gulpfile.js  
[14:49:03] Starting ‘ngconstant:dev’…  
[14:49:03] Finished ‘ngconstant:dev’ after 16 ms  
:processResources  
:compileJava  
:compileScala UP-TO-DATE  
:classes  
:findMainClass  
:bootRun  
14:49:07.934 [main] DEBUG org.springframework.beans.factory.config.YamlPropertiesFactoryBean – Loading from YAML: class path resource [config/application.yml]  
14:49:07.962 [main] DEBUG org.springframework.beans.factory.config.YamlPropertiesFactoryBean – Merging document (no matchers set): {management={context-path=/management, health={mail={enabled=false}}}, spring={application={name=simplejhipster}, profiles={active=dev}, jpa={open-in-view=false, hibernate={ddl-auto=none, naming-strategy=org.springframework.boot.orm.jpa.hibernate.SpringNamingStrategy}}, messages={basename=i18n/messages}, mvc={favicon={enabled=false}}, thymeleaf={mode=XHTML}}, security={basic={enabled=false}}, jhipster={async={corePoolSize=2, maxPoolSize=50, queueCapacity=10000}, mail={from=simplejhipster@localhost}, swagger={title=simplejhipster API, description=simplejhipster API documentation, version=0.0.1, termsOfServiceUrl=null, contactName=null, contactUrl=null, contactEmail=null, license=null, licenseUrl=null}, ribbon={displayOnActiveProfiles=dev}}}  
14:49:07.963 [main] DEBUG org.springframework.beans.factory.config.YamlPropertiesFactoryBean – Loaded 1 document from YAML resource: class path resource [config/application.yml]  
14:49:08.021 [restartedMain] DEBUG org.springframework.beans.factory.config.YamlPropertiesFactoryBean – Loading from YAML: class path resource [config/application.yml]  
14:49:08.024 [restartedMain] DEBUG org.springframework.beans.factory.config.YamlPropertiesFactoryBean – Merging document (no matchers set): {management={context-path=/management, health={mail={enabled=false}}}, spring={application={name=simplejhipster}, profiles={active=dev}, jpa={open-in-view=false, hibernate={ddl-auto=none, naming-strategy=org.springframework.boot.orm.jpa.hibernate.SpringNamingStrategy}}, messages={basename=i18n/messages}, mvc={favicon={enabled=false}}, thymeleaf={mode=XHTML}}, security={basic={enabled=false}}, jhipster={async={corePoolSize=2, maxPoolSize=50, queueCapacity=10000}, mail={from=simplejhipster@localhost}, swagger={title=simplejhipster API, description=simplejhipster API documentation, version=0.0.1, termsOfServiceUrl=null, contactName=null, contactUrl=null, contactEmail=null, license=null, licenseUrl=null}, ribbon={displayOnActiveProfiles=dev}}}  
14:49:08.025 [restartedMain] DEBUG org.springframework.beans.factory.config.YamlPropertiesFactoryBean – Loaded 1 document from YAML resource: class path resource [config/application.yml]

██  ██    ██  ████████  ███████    ██████  ████████  ████████  ███████  
██  ██    ██     ██     ██    ██  ██          ██     ██        ██    ██  
██  ████████     ██     ███████    █████      ██     ██████    ███████  
██    ██  ██    ██     ██     ██             ██     ██     ██        ██   ██  
██████   ██    ██  ████████  ██        ██████      ██     ████████  ██    ██

:: JHipster   :: Running Spring Boot 1.3.5.RELEASE ::  
:: http://jhipster.github.io ::

2016-07-09 14:49:08.593  INFO 34917 — [  restartedMain] fr.jamkey.jhipster.SimplejhipsterApp     : Starting SimplejhipsterApp on MacBook-Pro-de-Sebastien.local with PID 34917 (/Users/sebastien/veille/simplejhipster/build/classes/main started by sebastien in /Users/sebastien/veille/simplejhipster)  
2016-07-09 14:49:08.594 DEBUG 34917 — [  restartedMain] fr.jamkey.jhipster.SimplejhipsterApp     : Running with Spring Boot v1.3.5.RELEASE, Spring v4.2.6.RELEASE  
2016-07-09 14:49:08.594  INFO 34917 — [  restartedMain] fr.jamkey.jhipster.SimplejhipsterApp     : The following profiles are active: dev  
2016-07-09 14:49:08.922 DEBUG 34917 — [kground-preinit] org.jboss.logging                        : Logging Provider: org.jboss.logging.Slf4jLoggerProvider found via system property  
2016-07-09 14:49:10.504 DEBUG 34917 — [  restartedMain] f.j.jhipster.config.AsyncConfiguration   : Creating Async Task Executor  
2016-07-09 14:49:10.865 DEBUG 34917 — [  restartedMain] f.j.j.config.MetricsConfiguration        : Registering JVM gauges  
2016-07-09 14:49:10.872 DEBUG 34917 — [  restartedMain] f.j.j.config.MetricsConfiguration        : Initializing Metrics JMX reporting  
2016-07-09 14:49:11.603  INFO 34917 — [ost-startStop-1] fr.jamkey.jhipster.config.WebConfigurer  : Web application configuration, using profiles: [dev]  
2016-07-09 14:49:11.604 DEBUG 34917 — [ost-startStop-1] fr.jamkey.jhipster.config.WebConfigurer  : Initializing Metrics registries  
2016-07-09 14:49:11.606 DEBUG 34917 — [ost-startStop-1] fr.jamkey.jhipster.config.WebConfigurer  : Registering Metrics Filter  
2016-07-09 14:49:11.606 DEBUG 34917 — [ost-startStop-1] fr.jamkey.jhipster.config.WebConfigurer  : Registering Metrics Servlet  
2016-07-09 14:49:11.607 DEBUG 34917 — [ost-startStop-1] fr.jamkey.jhipster.config.WebConfigurer  : Initialize H2 console  
2016-07-09 14:49:11.608  INFO 34917 — [ost-startStop-1] fr.jamkey.jhipster.config.WebConfigurer  : Web application fully configured  
2016-07-09 14:49:11.901 DEBUG 34917 — [ost-startStop-1] f.j.j.config.DatabaseConfiguration       : Configuring Datasource  
2016-07-09 14:49:12.151 DEBUG 34917 — [ost-startStop-1] f.j.j.config.DatabaseConfiguration       : Configuring Liquibase  
2016-07-09 14:49:12.165  WARN 34917 — [ster-Executor-1] f.j.j.c.liquibase.AsyncSpringLiquibase   : Starting Liquibase asynchronously, your database might not be ready at startup!  
objc[34917]: Class JavaLaunchHelper is implemented in both /Library/Java/JavaVirtualMachines/jdk1.8.0_25.jdk/Contents/Home/bin/java and /Library/Java/JavaVirtualMachines/jdk1.8.0_25.jdk/Contents/Home/jre/lib/libinstrument.dylib. One of the two will be used. Which one is undefined.  
2016-07-09 14:49:13.400 DEBUG 34917 — [ster-Executor-1] f.j.j.c.liquibase.AsyncSpringLiquibase   : Started Liquibase in 1235 ms  
2016-07-09 14:49:14.427  INFO 34917 — [ost-startStop-1] fr.jamkey.jhipster.SimplejhipsterApp     : Running with Spring profile(s) : [dev]  
2016-07-09 14:49:15.648 DEBUG 34917 — [  restartedMain] f.j.jhipster.config.CacheConfiguration   : Starting Ehcache  
2016-07-09 14:49:15.650 DEBUG 34917 — [  restartedMain] f.j.jhipster.config.CacheConfiguration   : Registering Ehcache Metrics gauges  
2016-07-09 14:49:16.017 DEBUG 34917 — [  restartedMain] f.j.j.c.apidoc.SwaggerConfiguration      : Starting Swagger  
2016-07-09 14:49:16.026 DEBUG 34917 — [  restartedMain] f.j.j.c.apidoc.SwaggerConfiguration      : Started Swagger in 9 ms  
2016-07-09 14:49:16.903  INFO 34917 — [  restartedMain] fr.jamkey.jhipster.SimplejhipsterApp     : Started SimplejhipsterApp in 8.877 seconds (JVM running for 9.277)  
2016-07-09 14:49:16.903  INFO 34917 — [  restartedMain] fr.jamkey.jhipster.SimplejhipsterApp     :  
———————————————————-  
Application ‘simplejhipster’ is running! Access URLs:  
Local:         http://127.0.0.1:8080  
External:     http://192.168.0.48:8080  
———————————————————-  
```

Go to the provided URL, you should see the generated application up and running:

![Alt text](/public/images/jhipster/jhipster-screen.png)

## Add new entities

You can add entities to JHipster with the command line. But it is very convenient, fast and useful by the JDL Studio which is an open source UML online application:

[https://jhipster.github.io/jdl-studio/](https://jhipster.github.io/jdl-studio/)

![Alt text](/public/images/jhipster/jdlstudio.png)

**Method:**

-   write your entities en the left with the simple description language
-   write your relationship
-   you can see the result in a UML point of view on the right
-   click download to get the JDL file
-   copy the JDL file at the root of the project

Here is a JDL file sample we will use for the SimpleJHipster application:

[https://github.com/jamkey/simplejhipster/blob/master/simplejhipster.jdl](https://github.com/jamkey/simplejhipster/blob/master/simplejhipster.jdl)

**Install the JHipster-UML generator:**
```
npm install -g jhipster-uml
```

The syntax of execution is the following:

Syntax:
```
jhipster-uml <xmi file> [-options]

The options are:        -db <the database name>

Defines which database type your app uses;        -dto    [BETA] Generates DTO with MapStruct for the selected entities;        -paginate       Generates pagination for the selected entities;        -service        Generates services for the selected entities.

Once you have the JDL file in your project (here called ‘jhipster-example.jdl’), call the JHipster-UML generator to add the entities to you current JHipster project:

nbsp;jhipster-uml simplejhipster.jdl -db  
In the One-to-Many relationship from Department to Employee, only bidirectionality is supported for a One-to-Many association. The other side will be automatically added.  
In the One-to-Many relationship from Employee to Job, only bidirectionality is supported for a One-to-Many association. The other side will be automatically added.  
Creating:  
Region  
Country  
Location  
Department  
Task  
Employee  
Job  
JobHistory  
```

Again, an advice here is to commit/push/tag the project now, just after generating the entities of the application.

For example, our SimpleJHipster application is tagged with a v0.1 version containing the base generation project:

[https://github.com/jamkey/simplejhipster/releases/tag/v0.1](https://github.com/jamkey/simplejhipster/releases/tag/v0.1)

The entities are now created. You can now re-launch the application to see the results.
```
$ gradle
```

Once logged into the UI, you have access to management pages of the generated entities:

![Alt text](/public/images/jhipster/jhipster-entities.png)

Jhipster will manage merge of modifications by command line.

**You now have a complete application you can start from. With all bindings (Spring AngularJS, Security, API, administration) and conventions relevant for you application.**

## Next steps

Since JHipster version 3, the generation is **micro-service** oriented. Back and front can be separated easily.

A JHipster Dashboard based on Hystrix can monitor circuit breakers.

[https://github.com/jhipster/jhipster-dashboard](https://github.com/jhipster/jhipster-dashboard)

JHipster also provides a **Registry** for micro-services to plug-in.

[https://github.com/jhipster/jhipster-registry](https://github.com/jhipster/jhipster-registry)

A **JHipster Console** based on Elastic Stack is also available:

[https://github.com/jhipster/jhipster-console](https://github.com/jhipster/jhipster-console)

Have a look at the JHipster website:

[https://jhipster.github.io/](https://jhipster.github.io/)

## External Links

-   JHipster site
    -   [https://jhipster.github.io/](https://jhipster.github.io/)
-   A JHipster book is being written by Matt Raible, the author of [AppFuse](https://en.wikipedia.org/wiki/AppFuse).
    -   [http://www.jhipster-book.com/](http://www.jhipster-book.com/)
-   Node behind a proxy

-   [http://jjasonclark.com/how-to-setup-node-behind-web-proxy](http://jjasonclark.com/how-to-setup-node-behind-web-proxy)

-   NPM Nexus proxy

-   -    [https://books.sonatype.com/nexus-book/reference/npm-proxying-registries.html#fig-npm-proxy](https://books.sonatype.com/nexus-book/reference/npm-proxying-registries.html#fig-npm-proxy)
    -    [https://books.sonatype.com/nexus-book/reference/npm-configuring.html](https://books.sonatype.com/nexus-book/reference/npm-configuring.html)