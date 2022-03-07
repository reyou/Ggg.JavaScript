import { ReadEndlessCollections } from './readendless_collections.js';

function test_printEntries() {
  const array1 = ['a', 'b', 'c'];
  ReadEndlessCollections.printEntries(array1);
}
function test_forOfEntries() {
  const array1 = ['a', 'b', 'c'];
  ReadEndlessCollections.forOfEntries(array1);
}
function test_printArrayFromExamples() {
  ReadEndlessCollections.printArrayFromExamples();
}

test_printArrayFromExamples();
debugger;
test_printEntries();
test_forOfEntries();
