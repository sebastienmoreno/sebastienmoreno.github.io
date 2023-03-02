---
publishDate: 2014-04-28T00:00:00Z
title: Jenkins memory scaling
description: Jenkins is a Java web application which needs to be tuned to avoid _Out Of Memory Errors_ when dealing with large volume of jobs. 
excerpt: Jenkins scaling tips
image: ~/assets/images/jenkins.jpg
category: Tutorials
tags:
  - jenkins
  - ci
  - memory
  - scaling
  - devops
---


Jenkins is a Java web application which needs to be tuned to avoid _Out Of Memory Errors_ when dealing with large volume of jobs.  
The tuning of Jenkins is something sensitive. But at the same time the core engine do simple things : Jenkins executes jobs which execute external processes and JVM (Maven, Gradle…).  
Thus the role of Jenkins is based on the configuration of the jobs, their schedule and the management of the logs.

There are lot of examples of build environments with hundreds of slave of the hundreds of jobs without particular problems of memory, storage.  
Initially it would be interesting to monitor Jenkins and its JVM to determine the reason of the potential problems.  
The problem could be a insufficient memory configuration of the master Jenkins. Or some plugins memory consuming or memory leak.

# Recommendations

In term of recommendations for a large build system :

-   To check the plugins usage in Jenkins (are they all used? Are they parameterized in adequate manner ?)
-   To have simple jobs (complexity remains in the build manager (Maven or other) not the continuous integration): main configs are SCM / 1 step of Build / some post-actions
-   To limit the history of the builds in the job (« discard old build »)
-   To use [Jenkins UI plugins](https://wiki.jenkins-ci.org/display/JENKINS/Plugins#Plugins-UIplugins) in order to filter the view of the jobs to limit their access
-   To introduce a master-slave architecture (what you did) (use of labels to distribute build in a transparent way)
-   To limit the number of executors by slave
-   To have potentially several masters

Be careful for the master-slave mode to take a more recent version of Jenkins which allows to optimize the memory consumption.

# Before changing memory configuration, first monitor it

Resources consumption investigation is necessary in order to investigate and tune the JVM of Jenkins.

## Monitoring by plugins

The [Jenkins Monitoring plugin](https://wiki.jenkins-ci.org/display/JENKINS/Monitoring) is interesting for that. It will give you Charts of memory, cpu, system load average, http response times…

## Get live metrics

In the same way **VisualVM** connected on the JVM of Jenkins (see example [http://java.dzone.com/articles/visualvm-monitoring-remote-jvm](http://java.dzone.com/articles/visualvm-monitoring-remote-jvm) and [http://docs.oracle.com/javase/1.5.0/docs/guide/management/agent.html](http://docs.oracle.com/javase/1.5.0/docs/guide/management/agent.html)).

## Jenkins or plugins bugs

The problem could be a insufficient memory configuration of the master Jenkins. Or some plugins memory consuming or memory leak.  
Check the updates of the plugins for that.  
It can also be a Jenkins version which did [not optimize enough the memory usage with a large number of jobs](https://issues.jenkins-ci.org/browse/JENKINS-20620).

# Performance tips

## Build history

**Keep only a subset of build records around**

You can set Jenkins up to clean house by checking Discard Old Builds in the Configure menu and filling in one or both of  
this option’s two text boxes. You can choose to throw the old records away if they are more than 30 days old, or you can  
choose to keep only the last X records and discard everything else.

The whole point of controlling your build records is to avoid unbounded consumption. Sometimes you want to keep some  
records for a while so people can look at problems when there are failures… so don’t make the number too low. You really  
just need to have a fixed cap; 50 or 100 is a good number. Note that you can configure build record housekeeping on a  
per-project basis.

Another way to keep specific records is to use the fingerprinting feature, which allows you to create an association be-tween jobs. As you enable fingerprinting, you can enable Jenkins to keep a build log of dependencies – this captures all  
the upstream build log dependencies.

## Number of slaves

Each slave maintains a connection to a master, and to service these connections a master launchs several threads, and each thread is costly (2MB or so memory just for a call stack.)

Exactly how many threads each slave incurs on a master depends on the mode of connection. Most connection mechanisms require two threads per slave (SSH slaves and Java Web Start slaves), but if a JWS slave falls back to the communication over HTTP, it’ll incur three. See « [Obtaining a thread dump](https://wiki.jenkins-ci.org/display/JENKINS/Obtaining+a+thread+dump) » for how to count the number of threads in your environment.

See Set up Master-Slave for more information.

## Degree of concurrent HTTP accesses to the master

If you expect a lot of users accessing Jenkins user interfaces, this adds additional CPU overheads to a master. The memory impact on additional concurrent users should be negligible.

When you expect a large number of concurrent users, watch out for the upper bound of the maximum number of HTTP request handling threads. Contrary to the intuition, you do not want to give too big a value, which tends to make contended locks even more contended. You want to keep this value relatively small, and let incoming requests wait in the queue as opposed to try to serve them all in parallel.

## Number of jobs

Impact of a larger number of jobs can be seen in several places. One is the start-up time of Jenkins, especially noticable if you have $JENKINS_HOME in a disk that has a large seek time (spinning HDDs, as opposed to SSDs.) Another is the UI organization. You need to utilize views, folders, and other means to organize jobs, and avoid using the « All » view that’d render everything.

## Number of builds

Starting around 1.450 to 1.500 Jenkins started lazy-loading builds and discard them from memory if unneeded, but various plugins are still being updated to take advantages of this. Therefore, you’ll want to cap the number of builds each job occupies, by using the « discard old build » feature in Jenkins.

To prevent Jenkins from discarding build records only to load them back from the disk again, please give ample heap to Jenkins JVM.

# Set up Master-Slave

Jenkins masters expectations:

-   Keep webui responsive
-   Running/Managing jobs/slaves take resources
-   Throw a beefy VM at it (IO less of an issue)
-   Don’t run jobs on it
-   Manage/Backup configuration programmaticaly (puppet)

Jenkins slaves expectations:

-   Should be quick to setup and throw away
-   Plan for high IO usage! (not single hypervisor)
-   Monitor Cpu and Disk
-   Segregate heavy jobs

## Set up distributed Builds

You will eventually outgrow the ability to run builds on just one machine; as well, single systems do not take advantage  
of the full power of Jenkins.

Dealing with the amount of compression load is not the only reason to use distributed builds. You also need isolation between builds. For example, when your tests depend on local resources like a local database or particular TCP/IP port, you can’t use the same machine to run tests  
that access those resources. And while you can always work around these problems by tweaking your build script and tests  
and such, it’s much easier if you have boxes that provide natural isolation.

Another driving factor for distributed builds is that if you’re testing against multiple platforms, you often want to have  
more diversity in the environment. This situation inherently calls for multiple systems.

## Set up scalable slaves with labels

Managing a diverse set of platforms and machines easily, and making machines interchangeable.

A very useful but under-used Jenkins feature is labels. Labels are simply tags you can assign to nodes to describe their capacities. Some typical useful labels include:

-   Operating system
-   32 vs. 64-bit
-   Additional infrastructure that exists only on certain machines (for example, WebSphere)
-   Machine’s geographical location

Assign labels on the build machines themselves; then on the job side, specify that the job needs to run in a certain place based on label criteria. Instead of tying jobs to individual build machines, labels give Jenkins flexibility to choose where to run the builds, which results in better resource utilization and promoting manageability.

Using labels is so easy that even the Marketing team figured it out:

1.  Select a Slave machine and choose Configure
2.  Specify a label in the Labels field.
3.  Create a new job, name it and fill out any other necessary parameters, and click OK.
4.  Click the checkbox, Restrict where this project can be run (for example amd64, linux and Montreuil).
5.  Fill in the Label Expression that matches the label on your Slave machine (or any label).
6.  Click Save and then run the build. It will only run on machines whose labels match the job confi guration.

One final reason to use labels: if a machine goes down, Jenkins has the flexibility to shift the load to another machine with  
a compatible label, which gives you time to diagnose and fi x the problem. This way you can increase the level of service  
of your cluster to your users without service disruption.

## Be careful of slave thread consumption

A connected JNLP slave used to occupy one thread on the master, but now it occupies none.  
Combined with the earlier change that eliminated threads from idle executors, now you can connect thousands of slaves.  
Be careful to use the correct Jenkins version.

See [http://jenkins-ci.org/content/more-scalable-slaves](http://jenkins-ci.org/content/more-scalable-slaves)

# External links

-   Jenkins Master-Slave:
    -   [http://jenkins-ci.org/content/more-scalable-slaves](http://jenkins-ci.org/content/more-scalable-slaves)

-   Monitoring:
    -   [http://java.dzone.com/articles/visualvm-monitoring-remote-jvm](http://java.dzone.com/articles/visualvm-monitoring-remote-jvm)
    -   [https://wiki.jenkins-ci.org/display/JENKINS/Monitoring](https://wiki.jenkins-ci.org/display/JENKINS/Monitoring)
    -   [https://wiki.jenkins-ci.org/display/JENKINS/I%27m+getting+OutOfMemoryError](https://wiki.jenkins-ci.org/display/JENKINS/I%27m+getting+OutOfMemoryError)
    -   [https://wiki.jenkins-ci.org/display/JENKINS/Obtaining+a+thread+dump](https://wiki.jenkins-ci.org/display/JENKINS/Obtaining+a+thread+dump)
    -   [http://java.dzone.com/articles/visualvm-monitoring-remote-jvm](http://java.dzone.com/articles/visualvm-monitoring-remote-jvm)
    -   [http://visualvm.java.net/](http://visualvm.java.net/)
    -   [http://docs.oracle.com/javase/1.5.0/docs/guide/management/agent.html](http://docs.oracle.com/javase/1.5.0/docs/guide/management/agent.html)

-   Performance:
    -   [https://wiki.jenkins-ci.org/display/JENKINS/Jenkins+is+hanging](https://wiki.jenkins-ci.org/display/JENKINS/Jenkins+is+hanging)

-   Scaling:
    -   [http://narkisr.github.io/jenkins-scaling/#title](http://narkisr.github.io/jenkins-scaling/#title)
    -   [http://di388e0fcqllf.cloudfront.net/whitepapers/7WaysToOptimizeJenkins.pdf](http://di388e0fcqllf.cloudfront.net/whitepapers/7WaysToOptimizeJenkins.pdf)
    -   [http://fr.slideshare.net/aestasit/scaling-software-builds-with-jenkins](http://fr.slideshare.net/aestasit/scaling-software-builds-with-jenkins)

# See also

-   SLA
    -   [https://wiki.jenkins-ci.org/display/JENKINS/SLAdiator+plugin](https://wiki.jenkins-ci.org/display/JENKINS/SLAdiator+plugin)

-   Industrialisation:
    -   [http://www.cloudbees.com/jenkins-user-conference-2012-israel-abstracts.cb](http://www.cloudbees.com/jenkins-user-conference-2012-israel-abstracts.cb)