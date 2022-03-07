import { ReadEndlessInOut } from './readendless_in_out';

function test_consoleLog() {
  ReadEndlessInOut.consoleLog({
    title: 'item',
    methods: () => {}
  });
}

test_consoleLog();
debugger;
