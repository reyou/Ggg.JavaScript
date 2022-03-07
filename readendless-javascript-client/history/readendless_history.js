class ReadEndlessHistory {
  static listenStateChange(listener) {
    window.addEventListener('popstate', (e) => {
      listener(e);
    });
  }
  static getLength() {
    return history.length;
  }
  static navigateBack() {
    history.back();
  }

  static navigateSteps(steps) {
    history.go(steps);
  }

  static pushState(url, data = null) {
    history.pushState(data, null, url);
  }
  static replaceState(url, data = null) {
    history.replaceState(data, null, url);
  }

  static popState() {}
}
