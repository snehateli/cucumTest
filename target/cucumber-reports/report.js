$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature1.feature");
formatter.feature({
  "line": 1,
  "name": "User login functionality",
  "description": "",
  "id": "user-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Scenario:"
    },
    {
      "line": 3,
      "value": "#Given user is navigated to the fb page"
    },
    {
      "line": 4,
      "value": "#When user enters valid \"23snehateli@gmail.com\" and \"iraashishjaiswal\""
    },
    {
      "line": 5,
      "value": "#Then user is logged in successfully"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "id": "user-login-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is navigated to the gmail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user name is populated \"\u003cuname\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "user-login-functionality;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "uname"
      ],
      "line": 13,
      "id": "user-login-functionality;;;1"
    },
    {
      "cells": [
        "23snehateli@gmail.com",
        "iraashishjaiswal",
        "sneha"
      ],
      "line": 14,
      "id": "user-login-functionality;;;2"
    },
    {
      "cells": [
        "ashishank.20097@gmail.com",
        "17@november",
        "ashish"
      ],
      "line": 15,
      "id": "user-login-functionality;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "",
  "id": "user-login-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is navigated to the gmail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters valid \"23snehateli@gmail.com\" and \"iraashishjaiswal\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user name is populated \"sneha\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_navigated_to_the_gmail_page()"
});
formatter.result({
  "duration": 19754502375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23snehateli@gmail.com",
      "offset": 19
    },
    {
      "val": "iraashishjaiswal",
      "offset": 47
    }
  ],
  "location": "StepDefinition.user_enters_valid(String,String)"
});
formatter.result({
  "duration": 2829336696,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_logged_in_successfully()"
});
formatter.result({
  "duration": 287364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sneha",
      "offset": 24
    }
  ],
  "location": "StepDefinition.user_name_is_populated(String)"
});
formatter.result({
  "duration": 15454952989,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Compound class names not permitted\n  (Session info: chrome\u003d89.0.4389.90)\n  (Driver info: chromedriver\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15.34 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.29\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49901}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\USER\\AppData\\Local\\Temp\\scoped_dir9188_1319983311}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d89.0.4389.90, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 403590b3954e8189fb84110910315b8b\n*** Element info: {Using\u003dclass name, value\u003doajrlxb2 oo1teu6h qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn e72ty7fz qlfml3jp inkptoze qmr60zad btwxx1t3 tv7at329 taijpn5t k4urcfbm}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat StepDefn.StepDefinition.user_name_is_populated(StepDefinition.java:53)\r\n\tat ✽.And user name is populated \"sneha\"(feature1.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "user-login-functionality;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is navigated to the gmail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters valid \"ashishank.20097@gmail.com\" and \"17@november\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user name is populated \"ashish\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_navigated_to_the_gmail_page()"
});
formatter.result({
  "duration": 28559457621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashishank.20097@gmail.com",
      "offset": 19
    },
    {
      "val": "17@november",
      "offset": 51
    }
  ],
  "location": "StepDefinition.user_enters_valid(String,String)"
});
formatter.result({
  "duration": 1942568294,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_logged_in_successfully()"
});
formatter.result({
  "duration": 166261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashish",
      "offset": 24
    }
  ],
  "location": "StepDefinition.user_name_is_populated(String)"
});
formatter.result({
  "duration": 6806487854,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Compound class names not permitted\n  (Session info: chrome\u003d89.0.4389.90)\n  (Driver info: chromedriver\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6.81 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.29\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49972}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\USER\\AppData\\Local\\Temp\\scoped_dir7568_1777596577}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d89.0.4389.90, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 697d057c02d6c64d31b368c462996a47\n*** Element info: {Using\u003dclass name, value\u003doajrlxb2 oo1teu6h qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn e72ty7fz qlfml3jp inkptoze qmr60zad btwxx1t3 tv7at329 taijpn5t k4urcfbm}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat StepDefn.StepDefinition.user_name_is_populated(StepDefinition.java:53)\r\n\tat ✽.And user name is populated \"ashish\"(feature1.feature:11)\r\n",
  "status": "failed"
});
});