import { ReadEndlessInOut } from './readendless_in_out.js';

ReadEndlessInOut.consoleTimeStartEnd('loop test', () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
});

ReadEndlessInOut.consoleTable({
  hello: 'neighbor',
  name: 'the keeper',
  home: {
    address: '123 main st',
    city: 'game village'
  }
});
