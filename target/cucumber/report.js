$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Feature/CompareTicket.feature");
formatter.feature({
  "line": 1,
  "name": "Price check",
  "description": "",
  "id": "price-check",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6625436804,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check price at United Air",
  "description": "",
  "id": "price-check;check-price-at-united-air",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User at United Air home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on round trip botton",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on the from location botton",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Type \"JFK\" on location box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on the To Destination Text box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Type \"BOS\" on Destination box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on the Deperture Dates",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Type \"01/16/2019\" on Deperture Date",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on the Return Dates",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User Type \"01/23/2019\" on Return Date",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on Travelers",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Select \"3 adult\" Travelers",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on Find Flights",
  "keyword": "And "
});
formatter.match({
  "location": "USSteps.UnitedMainPage()"
});
formatter.result({
  "duration": 217506166,
  "status": "passed"
});
formatter.match({
  "location": "USSteps.firststeps()"
});
formatter.result({
  "duration": 566417883,
  "status": "passed"
});
formatter.match({
  "location": "USSteps.secoundsteps()"
});
formatter.result({
  "duration": 331284040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JFK",
      "offset": 11
    }
  ],
  "location": "USSteps.thirdsteps(String)"
});
formatter.result({
  "duration": 286408236,
  "status": "passed"
});
formatter.match({
  "location": "USSteps.forthsteps()"
});
formatter.result({
  "duration": 211718662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BOS",
      "offset": 11
    }
  ],
  "location": "USSteps.fifthsteps(String)"
});
formatter.result({
  "duration": 1394197969,
  "status": "passed"
});
formatter.match({
  "location": "USSteps.sixthsteps()"
});
formatter.result({
  "duration": 878297762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/16/2019",
      "offset": 11
    }
  ],
  "location": "USSteps.seventhsteps(String)"
});
formatter.result({
  "duration": 922605149,
  "status": "passed"
});
formatter.match({
  "location": "USSteps.eighthsteps()"
});
formatter.result({
  "duration": 183634832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/23/2019",
      "offset": 11
    }
  ],
  "location": "USSteps.ninthsteps(String)"
});
formatter.result({
  "duration": 264753320,
  "status": "passed"
});
formatter.match({
  "location": "USSteps.tenthsteps()"
});
formatter.result({
  "duration": 205048559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 adult",
      "offset": 13
    }
  ],
  "location": "USSteps.eleventhsteps(String)"
});
formatter.result({
  "duration": 514220692,
  "status": "passed"
});
formatter.match({
  "location": "USSteps.twelvesteps()"
});
formatter.result({
  "duration": 197084351,
  "status": "passed"
});
formatter.after({
  "duration": 2980131795,
  "status": "passed"
});
formatter.after({
  "duration": 125404716,
  "status": "passed"
});
formatter.before({
  "duration": 5130983118,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Check price at American Air",
  "description": "",
  "id": "price-check;check-price-at-american-air",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Smoke2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User at American Air home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User click on AAround trip botton",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User Type \"JFK\" on AAlocation box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Type \"BOS\" on AADestination box",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Select \"3 adult\" passengers",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Type \"01/16/2019\" on AADeperture Date",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Type \"01/23/2019\" on AAReturn Date",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on Find AAFlights",
  "keyword": "And "
});
formatter.match({
  "location": "USSteps.AaMainPage()"
});
formatter.result({
  "duration": 5000454876,
  "status": "passed"
});
formatter.match({
  "location": "USSteps.AAroundtrip()"
});
formatter.result({
  "duration": 301207219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JFK",
      "offset": 11
    }
  ],
  "location": "USSteps.user_Type_on_AAlocation_box(String)"
});
formatter.result({
  "duration": 166532555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BOS",
      "offset": 11
    }
  ],
  "location": "USSteps.user_Type_on_AADestination_box(String)"
});
formatter.result({
  "duration": 179830800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 adult",
      "offset": 13
    }
  ],
  "location": "USSteps.user_Select_passengers(String)"
});
formatter.result({
  "duration": 348261845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/16/2019",
      "offset": 11
    }
  ],
  "location": "USSteps.AADDate(String)"
});
formatter.result({
  "duration": 527907169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/23/2019",
      "offset": 11
    }
  ],
  "location": "USSteps.AARDate(String)"
});
formatter.result({
  "duration": 417329646,
  "status": "passed"
});
formatter.match({
  "location": "USSteps.AASubmit()"
});
formatter.result({
  "duration": 5298092201,
  "error_message": "java.lang.NullPointerException\r\n\tat Steps.USSteps.AASubmit(USSteps.java:226)\r\n\tat ✽.And User click on Find AAFlights(src/test/Resources/Feature/CompareTicket.feature:28)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 6058323560,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6.05 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAANEEL\u0027, ip: \u0027192.168.211.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52460}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\Saaneel\\AppData\\Local\\Temp\\scoped_dir25676_6161}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 719cb4fe62e0e5a5a1e8640bad7a8558\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:776)\r\n\tat Steps.USSteps.teardown(USSteps.java:232)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 6045961865,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6.05 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SAANEEL\u0027, ip: \u0027192.168.211.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52460}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\Saaneel\\AppData\\Local\\Temp\\scoped_dir25676_6161}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 719cb4fe62e0e5a5a1e8640bad7a8558\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:776)\r\n\tat Steps.USSteps.teardowna(USSteps.java:154)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});