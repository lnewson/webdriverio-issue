# webdriverio-issue

This repo exists to reproduce issue https://github.com/webdriverio/webdriverio/issues/4466 using the wdio local test runner. To reproduce the issue, run the following:

```
$ npm install
$ npm run test
```

After the above runs, you'll get a test failure due to the cookie name getting encoded twice which then causes the cookie to fail to be deleted.

Example output:

```
$ npm run test

> webdriverio-issue@1.0.0 test /private/tmp/webdriverio-issue
> wdio wdio.conf.js


Execution of 1 spec files started at 2019-09-16T11:36:44.388Z

2019-09-16T11:36:44.410Z INFO @wdio/cli:Launcher: Run onPrepare hook
Starting ChromeDriver 76.0.3809.126 (d80a294506b4c9d18015e755cee48f953ddc3f2f-refs/branch-heads/3809@{#1024}) on port 4444
Only local connections are allowed.
Please protect ports used by ChromeDriver and related test frameworks to prevent access by malicious code.
2019-09-16T11:36:44.543Z INFO @wdio/local-runner: Start worker 0-0 with arg: wdio.conf.js
[0-0] RUNNING in chrome - /test/specs/test.js
[0-0] 2019-09-16T11:36:44.826Z INFO @wdio/local-runner: Run worker command: run
[0-0] 2019-09-16T11:36:44.850Z INFO webdriverio: Initiate new session using the webdriver protocol
[0-0] 2019-09-16T11:36:44.852Z INFO webdriver: [POST] http://127.0.0.1:4444/session
[0-0] 2019-09-16T11:36:44.852Z INFO webdriver: DATA { capabilities: { alwaysMatch: { browserName: 'chrome' }, firstMatch: [ {} ] },
  desiredCapabilities: { browserName: 'chrome' } }
[1568633805.571][WARNING]: This version of ChromeDriver has not been tested with Chrome version 77.
[0-0] 2019-09-16T11:36:45.859Z INFO webdriver: COMMAND navigateTo("http://guinea-pig.webdriver.io/")
[0-0] 2019-09-16T11:36:45.860Z INFO webdriver: [POST] http://127.0.0.1:4444/session/44719265448f9a39c8190d7b1ce26b85/url
[0-0] 2019-09-16T11:36:45.860Z INFO webdriver: DATA { url: 'http://guinea-pig.webdriver.io/' }
[0-0] 2019-09-16T11:36:49.065Z INFO webdriver: COMMAND addCookie(<object>)
[0-0] 2019-09-16T11:36:49.065Z INFO webdriver: [POST] http://127.0.0.1:4444/session/44719265448f9a39c8190d7b1ce26b85/cookie
[0-0] 2019-09-16T11:36:49.065Z INFO webdriver: DATA { cookie: 
   { name: '/test',
     value: 'bla',
     path: '/',
     domain: 'guinea-pig.webdriver.io' } }
[0-0] 2019-09-16T11:36:49.071Z INFO webdriver: COMMAND getAllCookies()
[0-0] 2019-09-16T11:36:49.072Z INFO webdriver: [GET] http://127.0.0.1:4444/session/44719265448f9a39c8190d7b1ce26b85/cookie
[0-0] 2019-09-16T11:36:49.076Z INFO webdriver: RESULT [ { domain: 'guinea-pig.webdriver.io',
    httpOnly: false,
    name: '/test',
    path: '/',
    secure: false,
    value: 'bla' } ]
[0-0] 2019-09-16T11:36:49.078Z INFO webdriver: COMMAND deleteCookie("/test")
[0-0] 2019-09-16T11:36:49.078Z INFO webdriver: [DELETE] http://127.0.0.1:4444/session/44719265448f9a39c8190d7b1ce26b85/cookie/%252Ftest
[0-0] 2019-09-16T11:36:49.082Z INFO webdriver: COMMAND getAllCookies()
[0-0] 2019-09-16T11:36:49.083Z INFO webdriver: [GET] http://127.0.0.1:4444/session/44719265448f9a39c8190d7b1ce26b85/cookie
[0-0] 2019-09-16T11:36:49.086Z INFO webdriver: RESULT [ { domain: 'guinea-pig.webdriver.io',
    httpOnly: false,
    name: '/test',
    path: '/',
    secure: false,
    value: 'bla' } ]
[0-0] Error in "undefined"
Expected $.length = 1 to equal 0.
Unexpected $[0] = Object({ domain: 'guinea-pig.webdriver.io', httpOnly: false, name: '/test', path: '/', secure: false, value: 'bla' }) in array.
[0-0] 2019-09-16T11:36:49.091Z INFO webdriver: COMMAND deleteSession()
[0-0] 2019-09-16T11:36:49.091Z INFO webdriver: [DELETE] http://127.0.0.1:4444/session/44719265448f9a39c8190d7b1ce26b85
[0-0] FAILED in chrome - /test/specs/test.js
2019-09-16T11:36:49.265Z INFO @wdio/cli:Launcher: Run onComplete hook

 "spec" Reporter:
------------------------------------------------------------------
[chrome  mac os x #0-0] Spec: /private/tmp/webdriverio-issue/test/specs/test.js
[chrome  mac os x #0-0] Running: chrome on mac os x
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] main suite
[chrome  mac os x #0-0]    ✖ some test
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] 1 failing (3.3s)
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] 1) main suite some test
[chrome  mac os x #0-0] Expected $.length = 1 to equal 0.
Unexpected $[0] = Object({ domain: 'guinea-pig.webdriver.io', httpOnly: false, name: '/test', path: '/', secure: false, value: 'bla' }) in array.
[chrome  mac os x #0-0] Error: Expected $.length = 1 to equal 0.
[chrome  mac os x #0-0] Unexpected $[0] = Object({ domain: 'guinea-pig.webdriver.io', httpOnly: false, name: '/test', path: '/', secure: false, value: 'bla' }) in array.
[chrome  mac os x #0-0]     at <Jasmine>
[chrome  mac os x #0-0]     at <Jasmine>
[chrome  mac os x #0-0]     at UserContext.it (/private/tmp/webdriverio-issue/test/specs/test.js:9:23)


Spec Files:	 0 passed, 1 failed, 1 total (100% completed) in 00:00:04 

2019-09-16T11:36:49.266Z INFO @wdio/local-runner: Shutting down spawned worker
2019-09-16T11:36:49.522Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2019-09-16T11:36:49.522Z INFO @wdio/local-runner: shutting down
```
