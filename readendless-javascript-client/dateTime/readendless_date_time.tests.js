import { ReadEndlessDateTime } from './readendless_date_time.js';

function test_date_now() {
  // 1651800003749
  console.log(Date.now());
}
function test_toISOString() {
  // 2022-05-06T01:21:47.808Z
  console.log(ReadEndlessDateTime.toISOString());
}

test_toISOString();
debugger;
test_date_now();
