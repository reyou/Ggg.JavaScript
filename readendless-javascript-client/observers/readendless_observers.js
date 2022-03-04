// ReadEndlessInOut.consoleLog('observer');
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
};
let intersectionCallback = (entries, observer) => {
  entries.forEach((entry) => {
    ReadEndlessInOut.consoleLog({
      title: 'IntersectionObserver callback',
      entry: entry
    });
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback
    window.requestIdleCallback((qqq, www, eee, rrr) => {
      debugger;
    });
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

let observer = new IntersectionObserver(intersectionCallback, options);
