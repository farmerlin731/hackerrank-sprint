//Create a function for GCD.
//Iterate between LCM of arr1 & GCD of arr2.
//U can optimize the step2.. but i am lazy. XD

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Write your code here

  const gcdOfa = a.reduce((gcd, cur) => getGCD(gcd, cur));
  const lcmOfa = a.reduce((lcm, cur) => getLCM(lcm, cur));
  const gcdOfb = b.reduce((gcd, cur) => getGCD(gcd, cur));

  console.log(gcdOfa);
  console.log(lcmOfa);
  console.log(gcdOfb);

  let count = 0;
  for (let i = lcmOfa; i <= gcdOfb; i += lcmOfa) {
    if (gcdOfb % i == 0) count++;
  }

  return count;

  function getGCD(a, b) {
    if (b == 0) return a;
    return getGCD(b, a % b);
  }

  function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
  }
}

// let a = [2, 4];
// let b = [16, 32, 96];

let a = [2, 3, 6];
let b = [42, 84];

console.log(getTotalX(a, b));
