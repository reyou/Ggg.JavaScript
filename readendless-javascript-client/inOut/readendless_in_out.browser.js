class ReadEndlessInOut {
  static consoleTimeStartEnd(title, methodToRun) {
    console.time(title);
    methodToRun();
    console.timeEnd(title);
  }

  static consoleTable(log_item) {
    console.table(log_item);
  }

  static alert(title) {
    window.alert(title);
  }

  static consoleLog(log_item) {
    window.console.log(log_item);
  }
}
