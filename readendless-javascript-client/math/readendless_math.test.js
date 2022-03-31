import { ReadEndlessMath } from './readendless_math.js';
import { ReadEndlessLogging } from '../inOut/readendless_logging.js';

function test_random() {
  // {title: 'getScrollPercent', scrollTop: 1820.5, scrollHeight: 6466, clientHeight: 6466, scroll: Infinity}
  const scrollTop = 1820.5;
  const scrollHeight = 6466;
  const clientHeight = 6466;
  let heightDiff = scrollHeight - clientHeight;
  if (heightDiff == 0) {
    heightDiff = scrollHeight;
  }
  const scroll = (scrollTop / heightDiff) * 100;
  ReadEndlessLogging.log(scroll);
}
function test_getMaxInteger() {
  let result = ReadEndlessMath.getMaxInteger();
  console.log(result);
}

test_random();
test_getMaxInteger();
