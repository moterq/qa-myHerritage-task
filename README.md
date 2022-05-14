# qa-task-MyHerritage

Author: Matvei Semenuyk

I'm trying with WebdriverIO.

The stack I use for the test task:
- WebdriverIO
- Mocha
- Chai
- Allure
- typescript
- selenium-standalone


**p.s.>**
_For any questions:
email: matthewsemenuyk@gmail.com
telegram: @moterq

### Installing

Required:
```
NodeJS < v14 == node-v12.16.3 (https://nodejs.org/download/release/v12.16.3/) 
Java JDK == any (https://www.oracle.com/java/technologies/downloads/)

```

First install all dependenices:
```
npm install
```

You will need running selenium server on `localhost:4444`, run it with webdriver-manager:
```
npm install -g webdriver-manager
webdriver-manager update
webdriver-manager start
```
_If u have a bug with '**webdriver-manager update**' try to open (if Windows Syst.) PowerShell (AdminRoot) and put '**Set-ExecutionPolicy unrestricted**', accept **[Y]**_

Switch to new terminal tab, and run tests:
```
npm test
```

Allure Reporter:
```
npm install -g allure-commandline --save-dev
allure generate
allure serve
```


