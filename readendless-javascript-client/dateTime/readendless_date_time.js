class ReadEndlessDataTime {
  static getCurrentDate() {
    let today = new Date();
    let date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    return date;
  }
  static getCurrentTime() {
    let today = new Date();
    let time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return time;
  }
}
