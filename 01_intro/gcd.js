const getGCD = (a, b) => {
  // gcd is the other if one is zero
  if (a === 0) return b;
  if (b === 0) return a;

  let GCD = 1; // default gcd

  const loopCount = a < b ? a : b; // loop till smallest

  for (let i = 2; i <= loopCount; i++) {
    if (a % i === 0 && b % i === 0) GCD = i;
  }

  return GCD;
};

// const newGCD = getGCD(8, 8);
// console.log(newGCD);

const calculateGCDWithEuclid = (a, b) => {
  if (a === 0) return b;

  if (b) {
    if (a > b) {
      calculateGCDWithEuclid(a - b, b);
    } else {
      calculateGCDWithEuclid(a, b - a);
    }
  }

  return a;
};

// const calculateGCDWithEuclid = (a, b) => {
//   if (a === 0) return b;
//   if (b === 0) return a;

//   while (b) {
//     if (a > b) {
//       a = a - b;
//     } else {
//       b = b - a;
//     }
//   }

//   return a;
// };

const newGCD = calculateGCDWithEuclid(20, 0);
console.log(newGCD);

const calculateGCDWithEuclid = (a, b) => {
  return b ? calculateGCDWithEuclid(b, a % b) : a;
};

const newGCD = calculateGCDWithEuclid(0, 20);
console.log(newGCD);

// Robots

// 1. lex,loy,mig,rae
// 2. marv, rae, lex
// 3. lex marv rae ty
// 4. lex marv ty rae
// 5. lex rae mig marv ty
