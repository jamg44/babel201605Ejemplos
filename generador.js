"use strict";

function* ranger (start, end) {
  while (start <= end) {
    console.log(yield start);
    start += 1;
  }

}

let range = ranger(0, 10);

console.log(range.next());
console.log(range.next(66));
console.log(range.next());


/*for( let valor of range) {
  console.log(valor);
}*/
