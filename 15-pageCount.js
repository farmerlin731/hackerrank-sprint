//Change the concept to 'Block' !

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  let blockLast = n >> 1;
  let blockP = p >> 1;
  return Math.min(blockLast - blockP, blockP);
}

let n = 5,
  p = 3;
console.log(pageCount(n, p));
