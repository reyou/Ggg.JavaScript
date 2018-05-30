//=============================================================================
C:\Github\Ggg\Ggg.JavaScript\apps\Service_Worker_API\README.md
//=============================================================================
Run App: npm start
C:\Github\Ggg\Ggg.JavaScript\apps\Service_Worker_API\server.js
C:\Github\Ggg\Ggg.JavaScript\apps\Service_Worker_API\package.json
//=============================================================================
Developer tools - Chrome has 
chrome://inspect/#service-workers, which shows current service worker 
activity and storage on a device, and 
chrome://serviceworker-internals, which shows more detail and allows you to 
start/stop/debug the worker process. In the future they will have throttling/offline 
modes to simulate bad or non-existent connections, which will be a really good thing.
//=============================================================================
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
https://serviceworke.rs/
//=============================================================================
Service workers essentially act as proxy servers that sit between web 
applications, the browser, and the network (when available). They are intended, 
among other things, to enable the creation of effective offline experiences, 
intercept network requests and take appropriate action based on whether the network is 
available, and update assets residing on the server. They will also allow access 
to push notifications and background sync APIs.
//=============================================================================
Service workers only run over HTTPS, for security reasons. Having modified 
network requests, wide open to man in the middle attacks would be really bad. 
In Firefox, Service Worker APIs are also hidden and cannot be used when the user 
is in private browsing mode.
//=============================================================================
You’ll also need to serve your code via HTTPS — Service workers are restricted 
to running across HTTPS for security reasons. GitHub is therefore a good place 
to host experiments, as it supports HTTPS. In order to facilitate local 
development, localhost is considered a secure origin by browsers as well.
//=============================================================================
Chrome Canary: Go to chrome://flags and turn on experimental-web-platform-features; 
restart browser (note that some features are now enabled by default in Chrome.)
//=============================================================================