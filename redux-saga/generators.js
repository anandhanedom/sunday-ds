function* sayHiGen(params) {
  yield 'hey';
  yield 'there';
  yield 'you!';

  //statements

  return 'hi';
}

const resGen = sayHiGen();

//Gen object
console.log(resGen);

//{value,done}
console.log(resGen.next());
console.log(resGen.next());
console.log(resGen.next());

const resGenForOf = sayHiGen();

//Looping yield values
for (const i of resGenForOf) {
  console.log(i);
}

function* newGenerator() {
  yield 'something';

  const final = yield 'give me the value';

  //   return 'final value';
  return final;
}

const newGen = newGenerator();

console.log('*********************');
console.log(newGen.next());
console.log(newGen.next());
console.log(newGen.next('custom value'));
