//U don't need to do while-loop until n!!
//Just transfer n into 2-based, and compute the number of 'zero'.
//The ans is 2^number.

/*
 * Complete the 'sumXor' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function sumXor(n) {
  if (n == 0) return 1;
  let numOfZeroBit = n.toString(2).split("1").join("").length;

  return 2 ** numOfZeroBit;
}

let n = 0;

console.log(sumXor(n));
