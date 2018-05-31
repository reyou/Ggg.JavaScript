const WEBSITE_URL = "http://www.abc.com";
try {
  WEBSITE_URL = "new url"; // generate an error;
} catch (ex) {
  console.log(ex);
}
console.log(WEBSITE_URL);
