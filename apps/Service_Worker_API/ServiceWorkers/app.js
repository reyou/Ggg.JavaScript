// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
/*The Window.navigator read-only property returns a reference to the Navigator object, 
which can be queried for information about the application running the script. */
// https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator
if ('serviceWorker' in navigator) {
    // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
    /*The scope parameter is optional, and can be used to specify the subset 
    of your content that you want the service worker to control. In this case, 
    we have specified '/sw-test/', which means all content under the app's origin. 
    If you leave it out, it will default to this value anyway, but we specified it 
    here for illustration purposes. */
    /*Your service worker functions like a proxy server, allowing you to modify requests 
    and responses, replace them with items from its own cache, and more. */
    let onServiceWorkerRegistered = function (reg) {
        if (reg.installing) {
            console.log("onServiceWorkerRegistered:", 'Service worker installing');
        } else if (reg.waiting) {
            console.log("onServiceWorkerRegistered:", 'Service worker installed');
        } else if (reg.active) {
            console.log("onServiceWorkerRegistered:", 'Service worker active');
        }
        // registration worked
        console.log("onServiceWorkerRegistered:", 'Registration succeeded. Scope is ' + reg.scope);
        console.log("onServiceWorkerRegistered:", "navigator.serviceWorker.register.reg:");
        console.log("onServiceWorkerRegistered:", reg);
    }
    let onServiceWorkerError = function (error) {
        // registration failed
        console.log("onServiceWorkerError:", 'Registration failed with ' + error);
    };
    let swPath = '/sw-test/sw.js';
    navigator.serviceWorker.register(swPath, {
        scope: '/sw-test/'
    }).then(onServiceWorkerRegistered)
        .catch(onServiceWorkerError);
}
//=============================================================================
var imgSection = document.querySelector('section');

window.onload = function () {

    // load each set of image, alt text, name and caption
    for (var i = 0; i <= Gallery.images.length - 1; i++) {
        let imgLoadCompleted = function (arrayResponse) {

            var myImage = document.createElement('img');
            var myFigure = document.createElement('figure');
            var myCaption = document.createElement('caption');
            var imageURL = window.URL.createObjectURL(arrayResponse[0]);

            myImage.src = imageURL;
            myImage.setAttribute('alt', arrayResponse[1].alt);
            myCaption.innerHTML = '<strong>' + arrayResponse[1].name + '</strong>: Taken by ' + arrayResponse[1].credit;

            imgSection.appendChild(myFigure);
            myFigure.appendChild(myImage);
            myFigure.appendChild(myCaption);

        }
        let imgLoadError = function (Error) {
            console.log(Error);
        };
        imgLoad(Gallery.images[i]).then(imgLoadCompleted, imgLoadError);
    }
};
//=============================================================================