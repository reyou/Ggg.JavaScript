export class ReadEndlessLogging {
  static consoleTimeStartEnd(title, methodToRun) {
    console.time(title);
    methodToRun();
    console.timeEnd(title);
  }

  static log(value) {
    console.log(value);
  }

  static consoleTable(log_item) {
    console.table(log_item);
  }
  static consoleTrace() {
    console.log('TRACE START');
    console.trace();
    console.log('TRACE END');
  }

  static alert(title) {
    window.alert(title);
  }
}
