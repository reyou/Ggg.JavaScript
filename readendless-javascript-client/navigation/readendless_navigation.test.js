import { ReadEndlessNavigation } from './readendless_navigation.js';
function test_buildUrlSearchParams() {
  const paramsString = 'q=URLUtils.searchParams&topic=api';
  let searchParams = ReadEndlessNavigation.buildUrlSearchParams(paramsString);
  //Iterate the search parameters.
  for (let p of searchParams) {
    console.log(p);
  }
}
function test_hasQueryParam() {
  const paramsString = 'q=URLUtils.searchParams&topic=api';
  console.log(ReadEndlessNavigation.hasQueryParam(paramsString, 'topic'));
  console.log(ReadEndlessNavigation.hasQueryParam(paramsString, 'topic2'));
}
function test_getQueryParamValue() {
  const paramsString = 'q=URLUtils.searchParams&topic=api';
  console.log(ReadEndlessNavigation.getQueryParamValue(paramsString, 'topic'));
  console.log(ReadEndlessNavigation.getQueryParamValue(paramsString, 'topic2'));
}
function test_getAllQueryParamValue() {
  const paramsString = 'q=URLUtils.searchParams&topic=api&topic=java';
  console.log(
    ReadEndlessNavigation.getAllQueryParamValue(paramsString, 'topic')
  );
}
function test_appendQueryParam() {
  const paramsString = 'q=URLUtils.searchParams&topic=api&topic=java';
  console.log(
    ReadEndlessNavigation.appendQueryParam(
      paramsString,
      'bookName',
      'yoyo'
    ).toString()
  );
}
function test_setQueryParam() {
  const paramsString = 'q=URLUtils.searchParams&topic=api&topic=java';
  console.log(
    ReadEndlessNavigation.setQueryParam(
      paramsString,
      'topic',
      'phoneBook'
    ).toString()
  );
}
function test_deleteQueryParam() {
  const paramsString = 'q=URLUtils.searchParams&topic=api&topic=java';
  console.log(
    ReadEndlessNavigation.deleteQueryParam(paramsString, 'topic').toString()
  );
}

function test_fromObject() {
  // Search parameters can also be an object
  let paramsObj = { foo: 'bar', baz: 'bar' };
  console.log(ReadEndlessNavigation.buildUrlSearchParams(paramsObj).toString());
}

function test_fromFullUrl() {
  const paramsString1 = 'http://example.com/search?query=%40';
  console.log(
    ReadEndlessNavigation.buildUrlSearchParams(paramsString1).toString()
  );
  const searchParams = ReadEndlessNavigation.buildUrlSearchParamsFromUrl(
    'http://example.com/query?query=%40&location=NYC'
  );
  for (let p of searchParams) {
    console.log(p);
  }
}

function test_url() {
  const myUrlWithParams = new URL('https://www.example.dev/');
  myUrlWithParams.searchParams.append('city', 'Rome');
  myUrlWithParams.searchParams.append('price', '200');
  console.log(myUrlWithParams.href);
  debugger;
}

test_url();
debugger;
test_buildUrlSearchParams();
test_fromFullUrl();
test_deleteQueryParam();
test_setQueryParam();
test_appendQueryParam();
test_getAllQueryParamValue();
test_getQueryParamValue();
test_hasQueryParam();
