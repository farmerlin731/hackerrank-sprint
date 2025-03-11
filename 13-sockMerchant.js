//Just need to create a hashMap.
//And

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  const hashMap = {};
  let ans = 0;

  ar.forEach((color) => {
    hashMap[color] = (hashMap[color] || 0) + 1;
  });

  for (let key in hashMap) {
    ans += hashMap[key] >> 1;
  }

  return ans;
}

let n = 7,
  ar = [1, 2, 1, 2, 1, 3, 2];

console.log(ans);
