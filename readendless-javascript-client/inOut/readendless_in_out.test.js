import { ReadEndlessInOut } from './readendless_in_out.js';

function test_consoleTimeStartEnd() {
  ReadEndlessInOut.consoleTimeStartEnd('loop test', () => {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  });
}

function test_console_table() {
  ReadEndlessInOut.consoleTable({
    hello: 'neighbor',
    name: 'the keeper',
    home: {
      address: '123 main st',
      city: 'game village'
    }
  });
}

// TESTS
/**/
test_consoleTimeStartEnd();
test_console_table();
