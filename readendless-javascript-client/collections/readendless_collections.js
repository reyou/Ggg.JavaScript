export class ReadEndlessCollections {
  static printEntries(arrayParam) {
    const iterator = arrayParam.entries();
    console.log('START: iterator.next()');
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log('END: iterator.next()');
  }
  static forOfEntries(arrayParam) {
    const entries = arrayParam.entries();
    console.log('START: entries');
    for (let [index, element] of entries) {
      console.log({
        index: index,
        element: element
      });
    }
    console.log('END: entries');
  }

  static printArrayFromExamples() {
    //
    let fooArray = Array.from('foo');
    console.log(fooArray);

    //
    let numbers = Array.from([1, 2, 3], (element, index) => element + index);
    console.log(numbers);

    //
    const length = Array.from({ length: 5 }, (element, index) => {
      return index;
    });
    console.log(length);

    //
    const set = new Set(['foo', 'bar', 'baz', 'foo']);
    let fromSet = Array.from(set);
    console.log(fromSet);

    //
    const map = new Map([
      [1, 2],
      [2, 4],
      [4, 8]
    ]);
    let fromMap = Array.from(map);
    console.log(fromMap);

    //
    const mapper = new Map([
      ['1', 'a'],
      ['2', 'b']
    ]);
    let fromMapKeys = Array.from(mapper.keys());
    let fromMapValues = Array.from(mapper.values());
    console.log(fromMapKeys);
    console.log(fromMapValues);
  }
}
