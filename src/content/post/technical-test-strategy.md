---
publishDate: 2016-01-19T00:00:00Z
title: Technical test strategy
description: Automated test strategy is one the **key factors** of technical tests. 
excerpt: Tips to setup a technical test strategy
image: ~/assets/images/technical-test.jpg
category: Tutorials
tags:
  - test
  - ci
  - devops
---

**Automated test strategy** is one the **key factors** of technical tests. Its visibility make the tests part of the development process.Without goals, roles, tools, requirements, scheduling… the automated tests are forgotten deep in the versioning system…

As written in the ISTQB Exam Certification:

_The choice of test approaches or test strategy is one of the most powerful factor in the success of the test effort and the accuracy of the test plans and estimates. This factor is under the control of the testers and test leaders._

By describing, managing and tooling-up the different automated tests you will define your strategy.

This global strategy page gives main clues to manage your technical test strategy.

**To have a relevant test strategy make it visible.**

## What is a test strategy?

**A** **test strategy** is an outline that describes the testing approach of the [software development cycle](https://en.wikipedia.org/wiki/Software_development_process "Software development process"). It is created to inform project managers, testers, and developers about some key issues of the testing process. This includes the testing objective, methods of testing new functions, total time and resources required for the project, and the testing environment.

Test strategies describe **how the product risks of the stakeholders are mitigated at the test-level, which types of testing are to be performed, and which entry and exit criteria apply**.

They are created based on development design. System design is primarily used and occasionally, conceptual design may be referred to. Design documents describe the functionality of the software to be enabled in the upcoming release. For every stage of development design, a corresponding test strategy should be created to test the new feature sets.

The test strategy describes the test level to be performed. There are primarily three levels of testing: **unit testing**, **integration testing**, and **system testing** as you can read in the **[Automated test classification](http://www.jamkey.fr/automated-test-classification/)**.

In most software development organizations, individual testers or test teams are responsible for integration and system testing when dealing with**functional behavior**. Here we speak more of Acceptance tests or Functionnal tests (for example based on HP QC and executed with UFT (ex QTP).

The developers and test experts are responsible for automated tests on unit testing, integration testing, system testing.

### Test classification

The automated tests should first be classified in order to be used and integrated into a industrialized process. Please look at the test classification page: **[Automated test classification](/automated-test-classification)**

![test-classification](/public/images/technical-test/test-classification.png)

### Lack of test strategy issues

The common issues with automated tests are not associated to technical problems or the choices of tools, but resides especially in its **non-visibility**.  
When the added value of technical tests is not visible, the organisation will give advantage on more « quantifiable tests » (like functional tests or performance tests) and give-up on technical ones (unit, integration…).

For example, the functional tests are easily quantifiable: dedicated “testing” teams, based on the requirements, test plan in QC, instrumentalisation by UFT (ex QTP) by VB script.  
This way, it is easier to give budget to: handle, manage and implement functional tests.

Technical tests remain with the costs of the developers. Because very often, one will say the developers “will make the unit tests” but without real requirements or strategy.

**Agile projects and using the BDD reverses this trend** by bringing closer the Dev and Test teams. Especially when requiring the developers to implement the acceptance tests.

**By making the technical tests part of the test strategy, we will improve their development requirements and make them more relevant.**

## Set up a test strategy

**The goals to define a test strategy are the following:**

Goals
-   Application **coverage** objectives
-   Set-up a test **maintenance** plan
-   Have a source code **health feedback**
-   Use tests as **delivery acceptation**
-   Verify features **non-regression**
-   Maintain source code **knowledge**

### Automated test strategy steps

|                 Step                  |                                                                                                                                                                                                                                                   Description                                                                                                                                                                                                                                                 |
|:-------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|      Define Scope and Technology      |     Define perimeter to test (Backend, Front, Data, Integration, Middleware…   What technology is involved (Java backend, Java Web, front JS, Mobile iOS…)   Roles and Responsibilities of test leader, individual testers, project manager                                                                                                                                                                                                                                                                   |
|          Define Test Approach         |   Choose by what type of test starting   Use Test classification     Unit Testing   Integration Testing   System Testing    What relevant coverage is expected ?   What test volume is expected ?                                                                                                                                                                                                                                                                                                             |
| Choose a test development methodology |     Technical requirements    Requirements specifications   Requirements traceability matrix     Test priorities    While testing software projects, certain test cases will be treated  as the most important ones and if they fail, the product cannot be  released.     Choose methodology (eg.: BDD)   Batch mode execution   Execute in continuous integration   Execution scheduling    A test plan should make an estimation of how long it will take to complete the testing phase.     Mock policy   |
|     Identify risks and mitigation     |     Risk occurence anticipation :    Any risks that will affect the testing process must be listed along with the mitigation                                                                                                                                                                                                                                                                                                                                                                                  |
|        Define Test environment        |     Hardware requirements   Middleware requirements   Workstation needs   Environment provisioning                                                                                                                                                                                                                                                                                                                                                                                                            |
|          Choose Testing tools         |     Test framework which suit development technologies   Test orchestration   Integration with continuous integration   Integration with delivery process   Tests record and reporting                                                                                                                                                                                                                                                                                                                        |
|  Define Execution and release control |     Execute automated tests plan according to release control   Use test plan to validate release   Use test plan in a promotion process   Regression test approach    Regression tests will make sure that one fix does not create some other problems in that program or in any other interface                                                                                                                                                                                                             |
|     Defect reporting and tracking     |     How the test result is reported   Change and configuration management                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|       Set-up Reviews and updates      |     Review the test strategy after milestones   Update the test strategy according to feedbacks                                                                                                                                                                                                                                                                                                                                                                                                               |

### Test strategy life-cycle

![test-strategy-life-cycle](/public/images/technical-test/test-strategy-life-cycle.jpg)

_(Test Strategy in STLC)_

## External Links

-   ISTQB Exam Certification on Test Strategy
    -   [http://istqbexamcertification.com/what-are-the-test-approaches-or-strategies-in-software-testing/](http://istqbexamcertification.com/what-are-the-test-approaches-or-strategies-in-software-testing/)
-   Agile Test Strategy Example Template
    -   [http://www.testingexcellence.com/agile-test-strategy-example-template/](http://www.testingexcellence.com/agile-test-strategy-example-template/)
-   Test strategy Wikipedia
    -   [https://en.wikipedia.org/wiki/Test_strategy](https://en.wikipedia.org/wiki/Test_strategy)
-   Software testing help
    -   [http://www.softwaretestinghelp.com/writing-test-strategy-document-template/](http://www.softwaretestinghelp.com/writing-test-strategy-document-template/)
-   BDD Guidelines and Best Practices
    -   [http://www.testingexcellence.com/bdd-guidelines-best-practices/](http://www.testingexcellence.com/bdd-guidelines-best-practices/)
-   Bach, James (1999). [« Test Strategy »](http://www.satisfice.com/presentations/strategy.pdf) (PDF).