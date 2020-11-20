function* sayHiGen(params) {
  yield 'hey';
  yield 'there';
  yield 'you!';

  //statements

  return 'hi';
}

const resGen = sayHiGen();

console.log(resGen);

console.log(resGen.next());
console.log(resGen.next());
console.log(resGen.next());

const resGenForOf = sayHiGen();

for (const i of resGenForOf) {
  console.log(i);
}
