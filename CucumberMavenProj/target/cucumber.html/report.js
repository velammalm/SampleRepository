$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("github_login.feature");
formatter.feature({
  "line": 1,
  "name": "github login",
  "description": "",
  "id": "github-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login without username and password",
  "description": "",
  "id": "github-login;login-without-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on github homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginSD.user_is_on_github_homepage()"
});
formatter.result({
  "duration": 23094450478,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Sign in1\"}\n  (Session info: chrome\u003d60.0.3112.101)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7600 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15.11 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027ven-PC\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\ven\\AppData\\Local\\Temp\\scoped_dir6320_1345}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.101, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 13238746ba278d3a2645fe02d5e1f584\n*** Element info: {Using\u003dlink text, value\u003dSign in1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:401)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.cucumber.Selenium.SeleniumFunctions.ishomepageDisplayed(SeleniumFunctions.java:39)\r\n\tat com.cucumber.StepDefinition.GithubLoginSD.user_is_on_github_homepage(GithubLoginSD.java:18)\r\n\tat ✽.Given user is on github homepage(github_login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GithubLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "status": "skipped"
});
});