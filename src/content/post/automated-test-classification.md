---
publishDate: 2015-05-12T00:00:00Z
title: Automated test classification
description: Automated test strategy is one the **key factors** of technical tests. 
excerpt: Classification on technical automated tests
image: ~/assets/images/automated-tests.jpg
category: Tutorials
tags:
  - test
  - ci
  - automation
---

The technical automated tests should be categorized in a way that the build management system can execute each category on dependent development phases.Continuous Integration focus mainly on development tests which are automated.  
According to standards we can split tests in 3 main categories:

-   Unit testing : test component without external interactions (for example, no access to external system or databases)
-   Integration testing: test the components with interactions
-   System testing: test application as a whole

Each test categories contain many test types. Is it important to identify these categories in order to automate, execute them and finally use them as a core of **Test Policy Development**.

# Automated tests in Continuous Integration

> « Program testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence. »
> 
> — Edsger W. Dijkstra (Turing price 1972)

## Bugs have a price

![bugs-prices](/public/images/automated-tests/bugs-prices.png)

The cost of bug fixing increase when discovered lately of the development phase.

## Automated tests benefits

**Cost**

-   Developing relevant automated test decrease cost of bugs of 97%
-   Reduce cost of functional or acceptance tests which can focus on relevant test cases
-   Optimize maintenance cost and time
-   Optimize TCO (total cost of ownership)

**Quality**

-   Reduce technical debt
-   They reduce risks of delivery failure
-   Increase source code quality
-   Increase trust on development process
-   Ensure better roadmap follow-up
-   Time to market (identify and correct bug earlier)
-   Improve test capacity (other type of tests)

## Automated tests in Continuous Integration

Why Do Automated Testing?

-   Avoid **regressions**
-   Allow systems/applications to continue to change without **long « testing » phases**
-   Finding defects and problems **earlier and faster** (local run and CI)
-   Ensure external integration points are **working** and continue to work as expected
-   Ensure the user can interact with the system **as expected**
-   **Help** debugging / writing / designing code
-   Help specify the **behaviour** of the system


Overall : increase project delivery speed and trust with built-in quality

## Strategy and scope

Continuous Integration is targeting automated tests during the **development phase**.  
Which means these tests:

-   Are held and managed by the **developers**
-   Can be executed **locally** (developer workspace) and in **continuous integration**
-   Are used by the developer to **help** him developing new application features
-   Improved **trust** in source code quality

 
Continuous Integration will not address tests other than development ones.  
But other types of automated tests can be included in continuous integration.  
Testing team should be involved into automated test to capitalize relevant scenario and enrich non-regression.

## Tests scope

Continuous Integration actions focus on the development phase of the application

-   Inputs are mainly specifications/design
-   After, the delivery validation phase like _acceptance tests_ are engaged  

![tests-scope](/public/images/automated-tests/tests-scope.png)

## Tests in Continuous Integration

![tests-in-ci](/public/images/automated-tests/tests-in-ci.png)

-   In development phase, tests are used mainly to ensure **no regressions**
-   Automated test process of Continuous Integration is separated in 3 main steps:
    -   Unit testing
    -   Integration testing
    -   System testing

-   Each phase are **automated** and executed by **continuous integration**
-   The _Automated Installation_ is a mandatory phase to execute System Tests

# Tests classification

> « Testing, is being uncertain. »
> 
> — Anonymous

## Testing an application

![tests-in-app](/public/images/automated-tests/tests-in-app.png)

A given application can tested in various ways:

-   Unit tests check specific section of code (Mocks can be used to isolate components)
-   Integration tests check components interactions
-   System tests see the application as a whole

## Automated test classification

Test automation can be separated into 3 categories  
They have different characteristics:

-   Technical constraints
-   Environment scope
-   Execution speed requirements
-   Autonomy

Some tests used direct API of the source code, others use interface (UI, services…)

![test-classification](/public/images/automated-tests/test-classification.png)
 

Even if categories are strict in order to identify tests constraints, but:

-   Reusability of tests in different categories is possible (specially dealing with API)
-   Architecture can bring to adapt categories to technical needs (for example making performance tests on Services…)

## Unit testing

| Definition  (from ISTQB and IEEE 610) | The testing of individual software components or groups of related units.                                                                                                                                                                                                                                                                                                    |
|:-------------------------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                Features               | Unit testing refers to tests that verify the  functionality of a specific section of code, usually at the function or  class level. In an object-oriented environment, this is usually at the  class level, and the minimal unit tests include the constructors and  destructors. So it means that we have to shunt all the external  interactions thanks to stubs or mocks. |
|              Constraints              |     Isolated from external component (database, system, other services…) to avoid non-deterministic behavior   Can be run without any specific environment resources                                                                                                                                                                                                         |
|                  ROI                  | Unit tests improves QA and the ROI because its aims are:      Eliminating construction errors before code is promoted to QA (efficient non regression test)   Detecting easily in which component the problem is when there is a production issue   Low maintenance issues, because tight to source code API                                                                 |
|                  Cost                 | Fast development (especially when written  during development). Maintenance make easier by API reference (the IDE  will show you differences, and the compilation validate methods  signatures).                                                                                                                                                                             |
|              Environment              | Fast execution. Only needs unit test framework  (like JUnit) and JVM. Execution limited to JVM (no external components  like database).                                                                                                                                                                                                                                      |
|                 Types                 |     Component tests are test cases and suite which use application API   Mock tests are also Component tests which use Test doubles (mocks) to simulate internal or external components                                                                                                                                                                                      |

### Unit test definition

According to Roy Osherove:

> -   A unit test is an automated piece of code that invokes a unit of work in the system and then checks a single assumption about the behavior of that unit of work.
> 
> -   A unit of work is a single logical functional use case in the system that can be invoked by some public interface (in most cases). A unit of work can span a single method, a whole class or multiple classes working together to achieve one single logical purpose that can be verified.
> 
> A good unit test is:
> 
> -   Able to be fully automated
> -   Has full control over all the pieces running (Use mocks or stubs to achieve this isolation when needed)
> -   Can be run in any order if part of many other tests
> -   Runs in memory (no DB or File access, for example)
> -   Consistently returns the same result (You always run the same test, so no random numbers, for example. save those for integration – or range tests)
> -   Runs fast
> -   Tests a single logical concept in the system
> -   Readable
> -   Maintainable
> -   Trustworthy (when you see its result, you don’t need to debug the code just to be sure)
> 
> I consider any test that doesn’t live up to all these as an integration test and put it in its own « integration tests » project.

**Unit test should focus on :**

-   Readability (test one thing, meaningful message, naming convention…)
-   Maintainability (isolated, good mock management, state-based…)
-   Trust (separated from integration tests, use fixed values…)

### Unit Test isolation

-   When communicating with the collaborators is awkward (such as a remote credit card verification system) the testing unit **should be isolated by mocks** when relevant
-   If you follow the principle of collaborator isolation you don’t want to use the real product or customer classes here, because a fault in the customer class would cause the order class’s tests to fail. Instead you use _Mock / TestDoubles_ for the collaborators to avoid non-deterministic behavior.

Mocking the collaborators is not a mandatory and systematic pattern: it should be used when **relevant**:

-   Unit test autonomy
-   Complexity of environment
-   Remote services resulting into non-determinist test
-   Speed requirement

One typical use case is the « In Memory Database » which can be used by Unit Tests as a _fake database_. When switching in real database, the **same tests** can be used also as Integration Tests.

![unit-test-isolation](/public/images/automated-tests/unit-test-isolation.png)

### Mock / Test double

**Dummy** objects are passed around but never actually used. Usually they are just used to fill parameter lists.

**Fake** objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an InMemoryTestDatabase is a good example).

**Stubs** provide canned answers to calls made during the test, usually not responding at all to anything outside what’s programmed in for the test.

**Spies** are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.

**Mocks** are pre-programmed with expectations which form a specification of the calls they are expected to receive. They can throw an exception if they receive a call they don’t expect and are checked during verification to ensure they got all the calls they were expecting.

## Integration testing

| Definition  (from ISTQB) | Testing performed to expose defects in the interfaces and in the interactions between integrated components or systems.                                                                                                                                                                                                                                                                |
|:------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         Features         | Integration testing is any type of software  testing that seeks to verify the interfaces between components against a  software design. External interactions are effectives when relevant (no  stub nor mocks).                                                                                                                                                                       |
|        Constraints       |     External components available and fill with test data (database, system, other services…)   Interconnection set-up between application and external components                                                                                                                                                                                                                     |
|            ROI           | Very efficient non regression test. Give  feedback on integration issues. Tight to application services. Can reuse  unit tests code when relevant (unmocked).  Integration tests improve the components’ integration :  They allow interfaces’ issues to be located more quickly and fixed.  Detecting easily between which component the problem is when there is a  production issue |
|           Cost           | Maintenance make easier when using API reference. Can be more difficult when dealing with external components dependencies.                                                                                                                                                                                                                                                            |
|        Environment       | Potentially slow execution. Needs test framework (like JUnit), JVM and external component availability.                                                                                                                                                                                                                                                                                |
|           Types          |     Service test: tests calling application services from external layer (ex.: Webservice calls)   API test: tests calling application services directly by API calls                                                                                                                                                                                                                  |
> Note: When relevant, some unit test could be reused for integration test


### Integration test definition

**Definition**:  
Integration testing is testing a unit of work **without having full control** over all of it and using one or more of its **real dependencies**, such as time, network, database, threads, random number generators, and so on

**Integration test:**

-   can run slower
-   are separated to the unit tests
-   put them in their own « integration tests » or « test » **project**.
-   can also be written with **Junit**

## System testing

| Definition  (from ISTQB) | The process of testing an integrated system to verify that it meets specified requirements.                                                                                                                                                                                                                                                                                                                                     |
|:------------------------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         Features         | System testing, or end-to-end testing, tests a  completely integrated system to verify that it meets its requirements.  All the external interactions might be effectives (no stub nor mocks).  For example, a system test might involve testing a logon interface, then  creating and editing an entry, plus sending or printing results,  followed by summary processing or deletion (or archiving) of entries,  then logoff. |
|        Constraints       |     External component available and fill with test data (database, system, other services…)   Interconnection between application and external components set-up   Application globally installed and available for client interaction   Should be monitored in order to have feedback                                                                                                                                         |
|            ROI           | System tests improve the requirements’ matching:      They allow requirement matching issues to be detected more quickly and fixed   Detecting easily which part of the system doesn’t allow to match the requirements  Very efficient non regression test. Give feedback on global integration, performance and features behavior issues.                                                                                      |
|           Cost           | Heavy cost of set-up and maintenance: any  changes on the application affecting the HMI, use cases or scenario  expect tests updates.                                                                                                                                                                                                                                                                                           |
|        Environment       | Slow execution. Needs UI test and all application parts installed and available.                                                                                                                                                                                                                                                                                                                                                |
|           Types          |     Smoke test: preliminary testing to reveal simple fatal failures   UI test: simulation of the HMI based on scenario   Unit-performance test: load test behavior and measure performance                                                                                                                                                                                                                                      |


> Note: When relevant, system test could be executed in an embedded container

### System test ecosystem

System testing are all tests that consider the software as a whole

A lot of different test can be associated to system testing:

-   Graphical user interface testing
-   Usability testing
-   Software performance testing
-   Compatibility testing
-   Exception handling
-   Load testing
-   Volume testing
-   Stress testing
-   Security testing
-   Scalability testing
-   Sanity testing
-   Smoke testing
-   Exploratory testing
-   Ad hoc testing
-   Regression testing
-   Installation testing
-   Recovery testing and failover testing.
-   Accessibility testing
-   …

> System testing expect to have an installed software : installation automation is mandatory when expecting System Testing automation.

### Smoke test

**The Smoke Test is the most basic System testing:**  
A subset of all defined/planned test cases that cover the main functionality of a component or system, to ascertaining that the most crucial functions of a program work, but not bothering with finer details.

A daily build and smoke test is among industry best practices. Smoke testing is also done by testers before accepting a build for further testing.

-   Microsoft claims that after code reviews, « smoke testing is the most cost-effective method for identifying and fixing defects in software ».

In the case of automated tools, the smoke tests are often initiated by the same process that generates the build itself.

### Installation test

**Installation testing**

-   Quality assurance work that focuses on what customers will need to do to install and set up the new software successfully. The testing process may involve full, partial or upgrades install/uninstall processes.
-   Installation test execute installation of the application (with configuration, unit of delivery) on a target environment. The goal is to control the installation procedure and have an available application for other tests.

**Constraints**

-   Manage generic portable application configuration
-   Write scripts or use tools to automate installation of all the parts of the application in batch mode
-   Setup an orchestration mechanism through continuous integration to run through installation and analyse potential issues

**Benefits**

-   Integrate installation automation will bring a lot test capacities automation (performance, HMI, service…), reduce manual errors and installation time, ensure repeatability and provides industrialization capacity to the release process. And above all bring control on installation procedure.

# Test development

> The pupil asked the master programmer:  
> « When can I stop writing tests? »
> 
> The master answered:  
> « When you stop writing code. »
> 
> — [The way of Testivus](/testivus)

## Test development needs

Test development should be based on **requirements** and architecture needs:

-   Sensible components should have detailed tests
-   Tests should be developed depending of architecture : for example, JavaScript application will need more UI tests

**Cost** of test development and maintenance should not be underestimated (in particular when changing API and HMI)

-   Development of high-level tests like System Tests are sensible to application modification
-   Give advantage to API test (unit or integration) when refactoring (interesting for Agile development)

Tests can be **reused** on different categories changing configuration (in some cases, unit test can be reused in integration)

Test **coverage should used carefully** and when misunderstood could bring to **useless** tests development (ex.: testing getter-setter is often useless)

-   Test coverage should be used on sensible and complex component or class
-   A test coverage strategy should be set-up early (for example, during conception/architecture reviews/audit) to specify coverage expectations on sensible classes/methods

In **Agile** development, the automated tests (in particular unit test and integration tests) are developed very early

-   Methods like TDD (Test Driven Development), BDD (Behavior Driven Development) expect an essential role of the automated tests

## Tests expectations examples
|                                    |                                                         Unit testing                                                         |                              Integration testing                             |                                                          System testing                                                         |
|:----------------------------------:|:----------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------:|
|          Development goal          | To verify component behavior. Mock should be used when relevant  to avoid integration issues and non deterministic behavior. | To verify services behavior and integration.  Component should be un-mocked. | To verify scenario validity, performance expectation, installation capacity.                                                    |
|       Environment requirement      | Minimal container and dependencies, mandatory autonomy (ex.: no database dependency).  Avoid non-deterministic behavior.     | External components available and accessible from application                | Available environment, test resources and dependencies.  Application fully installed with external components, available by UI. |
|   Example of tools and frameworks  | JUnit, H2 and HSQLDB (embedded database), Mockito                                                                            | Junit, JMeter                                                                | Selenium, Jmeter, UFT                                                                                                           |
| Executed by continuous integration | YES                                                                                                                          | YES                                                                          | YES                                                                                                                             |
|           Execution speed          | Very fast (less than 10 minutes)                                                                                             | Slow (more than 10 minutes)                                                  | Very Slow                                                                                                                       |
|       Regularity of execution      | Very often (several times a day), associated to code updates                                                                 | Often (1 per day)                                                            | At night (1 per day)                                                                                                            |

## Automated tests pyramid

![tests-pyramid](/public/images/automated-tests/tests-pyramid.png)

  
Test pyramid well known in Agile development. Based on test development/maintenance cost and efficient regression detectionTest pyramid expects to have many more low-level unit tests than high level end-to-end testsHigh-level tests are there as a second line of test defenseShould be used when relevant

## Test and build

**Build verification test (from ISTQB):**  
A set of automated tests which validates the integrity of each new build and verifies its key/core functionality, stability and testability. It is an industry practice when a high frequency of build releases occurs (e.g., agile projects) and it is run on every new build before the build is released for further testing.

Automated tests should be executed by all ways possible : IDE, build tools, continuous integration…

Tests categories should be identified through the build tool :

-   For example, Maven should be able to select/avoid tests categories (execute only unit tests, or unit tests with integration tests…)
-   Build should be able to reused unit test source for integration test when relevant for integration testing (by managing mock profile for example)

Tests categories should have localisation pattern with the source code:

-   Unit tests should be near the code to test (for example, src/test/java according to Maven convention)
-   When relevant separate integration and system tests from tested components: put them in a ‘test’ component. The component could even be delivered.

Execution methods should be able to execute each categories of test separately or at the same time:

-   For example, Jenkins jobs should be able to execute only unit tests, or unit tests and integration tests…

# See also

-   [ID07 – Continuous Development Unit Testing](https://wikinet.group.echonet/display/DFDT/ID07+-+Continuous+Development+Unit+Testing "ID07 - Continuous Development Unit Testing")
-   [ID13 – Critical Interoperability Application Testing](https://wikinet.group.echonet/display/DFDT/ID13+-+Critical+Interoperability+Application+Testing "ID13 - Critical Interoperability Application Testing")

# External links

-   Software Testing  
    [http://www.istqb.org/](http://www.istqb.org/)  
    [http://www.istqb.org/downloads/glossary.html](http://www.istqb.org/downloads/glossary.html)  
    [http://www.computer.org/portal/web/swebok/](http://www.computer.org/portal/web/swebok/)  
    IEEE 610 : [http://ieeexplore.ieee.org](http://ieeexplore.ieee.org/) [http://dis.unal.edu.co/~icasta/ggs/Documentos/Normas/610-12-1990.pdf](http://dis.unal.edu.co/~icasta/ggs/Documentos/Normas/610-12-1990.pdf)

-   Unit Test  
    [http://artofunittesting.com/definition-of-a-unit-test/](http://artofunittesting.com/definition-of-a-unit-test/)  
    [http://artofunittesting.com/unit-testing-review-guidelines/](http://artofunittesting.com/unit-testing-review-guidelines/)

-   JUnit  
    [http://junit.sourceforge.net/doc/testinfected/testing.htm](http://junit.sourceforge.net/doc/testinfected/testing.htm)

-   JUnit Anti patterns  
    [http://www.exubero.com/junit/antipatterns.html](http://www.exubero.com/junit/antipatterns.html)

-   JUnit cookbook  
    [http://junit.sourceforge.net/doc/cookbook/cookbook.htm](http://junit.sourceforge.net/doc/cookbook/cookbook.htm)

-   JMeter  
    [http://jmeter.apache.org/](http://jmeter.apache.org/)

-   Selenium  
    [http://docs.seleniumhq.org/](http://docs.seleniumhq.org/)

-   UFT (QTP)  
    [http://www8.hp.com/us/en/software-solutions/unified-functional-testing-automated-testing/index.html](http://www8.hp.com/us/en/software-solutions/unified-functional-testing-automated-testing/index.html)

-   Classification  
    [http://securesoftwaredev.com/2012/09/03/a-classification-of-tests/](http://securesoftwaredev.com/2012/09/03/a-classification-of-tests/)  
    [http://martinfowler.com/bliki/TestPyramid.html](http://martinfowler.com/bliki/TestPyramid.html)  
    [http://watirmelon.com/2012/01/31/introducing-the-software-testing-ice-cream-cone/](http://watirmelon.com/2012/01/31/introducing-the-software-testing-ice-cream-cone/)  
    [http://martinfowler.com/bliki/TestDouble.html](http://martinfowler.com/bliki/TestDouble.html)  
    [http://martinfowler.com/bliki/ComponentTest.html](http://martinfowler.com/bliki/ComponentTest.html)  
    [http://martinfowler.com/bliki/UnitTest.html](http://martinfowler.com/bliki/UnitTest.html)  
    [http://xunitpatterns.com/](http://xunitpatterns.com/)  
    [http://martinfowler.com/bliki/InMemoryTestDatabase.html](http://martinfowler.com/bliki/InMemoryTestDatabase.html)  
    [http://martinfowler.com/articles/nonDeterminism.html](http://martinfowler.com/articles/nonDeterminism.html)

-   ROI of test automation
-   [http://www.arcondis.com/assets/files/pdf/publikationen/ROI%20of%20Test%20Automation.pdf](http://www.arcondis.com/assets/files/pdf/publikationen/ROI%20of%20Test%20Automation.pdf)  
    [http://www-01.ibm.com/software/rational/offerings/testing/roi/tool/ROI_Rational.html](http://www-01.ibm.com/software/rational/offerings/testing/roi/tool/ROI_Rational.html)  
    [http://www.softwarequalitymethods.com/papers/star99%20model%20paper.pdf](http://www.softwarequalitymethods.com/papers/star99%20model%20paper.pdf)