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

const getGCDWithEuclid = (a, b) => {
  let remainder;

  while (a % b > 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }

  return b;
};

// const newGCD = getGCDWithEuclid(5, 20);

const getGCDWithEuclidRecursion = (a, b) => {
  const remainder = a % b;
  return remainder > 0 ? getGCDWithEuclidRecursion(b, remainder) : b;
};

const newGCD = getGCDWithEuclidRecursion(1, 9);
console.log(newGCD);
