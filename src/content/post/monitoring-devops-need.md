---
publishDate: 2016-05-12T00:00:00Z
title: Monitoring a DevOps need
description: Create a static blog hosted in Github Pages with Astro
excerpt: Create a static blog hosted in Github Pages with Astro
image: ~/assets/images/monitoring.jpg
category: Tutorials
tags:
  - elastic
  - kibana
  - logstash
  - elasticsearch
  - monitoring
  - devops
---


DevOps and Agility are continuous improvement oriented.

How can you have continuous improvement without the ability to measure improvement? How do you know if an automation task is worthwhile? Basing decisions on data, rather than instinct, leads to an objective, blameless path of improvement. Data should be transparent, accessible to all, meaningful, and able to be visualized in an ad hoc manner.

## A DevOps need

DevOps is not a method, but a culture shift. The main principles very commonly used are the CALMS:

_Culture, Automation, Lean, Metrics, Sharing_

Here the Measure is our focus :

> _**Metrics (or Measure) —** A metrics-oriented mindset is key to ensure that DevOps initiatives taken up by infrastructure and operations leaders deliver the intended results. IT organizations should focus their measurement efforts on five primary domains: IT operations, the service (or application), the organization as a whole, the customer, and the business. Goals should be service-focused, with an eye toward improving agility (velocity) and improving business value (quality)._

Here we talk about monitoring, which is clearly not a NEW thing, but a necessity which is today more widely needed.

API delivery, Front and Mobile backend deployment, Micro-services : in order to keep control on data management and performance capacity, the need of monitoring is increasing drastically.

On a Cloud (private or public) architecture, monitoring of applications and services are a most needed feature.

But more widely, monitoring application is not anymore a Run or Production only need, but also a development need.

We need to setup a common architecture were monitoring setup should be as easy as instantiate a new service in a cloud management, and since the development phase.

## How does it work

Monitoring could be split in 4 main features :

-   produce logs (create data)
-   process logs (understand the data)
-   store metrics (give access to the data)
-   visualize synthesis (explain the data and its evolution)

### Produce logs

The first step is, of course, applications or services providing data (logs, messages, metrics).

Applications must have capacity to produce data.

This feature is quit already available in most cases by plenty of log systems:

-   _syslog_ format logs : very popular in GNU/Linux / Unix systems
-   raw text logs
-   Apache and Log4j logs
-   Windows Event Logs
-   JSON format messages
-   Queue message (RabbitMQ, ZeroMQ)
-   …

These data should be transmit to a central processor.

### Process logs

Data produced by applications must be processed to keep the important information.

Often called Data Pipeline, the logs are integrated, analyses, normalized and stored.

The process of the logs is the main feature of monitoring because it should expose the relevant information of the system.

The log processing should flexible enough to adapt to any type of input data (by plugins, customization…).

These data should be stored in a centralized database which can search with efficiency.

### Store Metrics

Logs processed become metrics. They should be stored in a way they can be accessed and used easily.

The storage must version and give access to the data to bring search, analytics capacity through API for dashboards.

Performance and scalability have a critical point here : we want to access these data in a real-time and with high-availability.

These metrics should be used synthesized in a dashboard.

### Visualize synthesis

Logs processed become metrics. They should be stored in a way they can be accessed and used easily.

The dashboard give a synthetic view of the metrics and instant sharing capacity of the situation. It should easy to understand and give access to the relevant information.

The dashboard should be flexible enough to adapt to other needs.

## Common Tools

Concerning the development phase, tools like Sonarqube, provide inspection dashboard very useful to improve the quality of the source code.

But concerning visualisation of the service/app state, a monitoring stack should be used to get logs, process and visualize informations.

Several tools are currently used on the market:

-   Elastic Stack (open source – ex. ELK Stack)
-   Splunk (commercial)
-   Graylog (open source)
-   …

**The tools have to be easy to integrate with common development and potentially agnostic of the language and architecture.**

**The solution should be easy to integrate with API/Micro-service use cases, and deployable in the cloud.**

**It should be useable since the development phase (dev/test/integration environments).**

## Technical illustration

For our illustration we are using the Elastic Stack solution (ex. ELK) which is the most widely used stack.

[Elastic Stack](https://www.elastic.co/products): a new name and technology vision for Elastic’s open source products 
[Elasticsearch](https://www.elastic.co/products/elasticsearch), 
[Logstash](https://www.elastic.co/products/logstash), 
[Kibana](https://www.elastic.co/products/kibana), 
and [Beats](https://www.elastic.co/products/beats);

Elastic Stack is the most

In Elastic Stack we have the following role distribution:

-   Process logs : **Logstash** (Collect, Enrich & Transport Data)
-   Store metrics : **ElasticSearch** (Search & Analyze Data in Real Time)
-   Visualise synthesis : **Kibana** (Explore & Visualize Your Data)

## Reference

-   [http://www.devopsdictionary.com/wiki/CAMS](http://www.devopsdictionary.com/wiki/CAMS)
-   [https://www.elastic.co/](https://www.elastic.co/fr/)
-   [https://www.splunk.com/](https://www.splunk.com/)
-   [https://www.graylog.org/](https://www.graylog.org/)