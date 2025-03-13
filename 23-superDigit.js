//number to string
//while-loop until the length is 1.

/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
  let counter = 0;

  //First time
  let oriStr = (+compact(n) * k).toString();

  while (oriStr.length > 1) {
    oriStr = compact(oriStr);
  }

  return +oriStr;

  function compact(s) {
    let tmp = [...s].reduce((sum, cur) => {
      return sum + +cur;
    }, 0);
    return tmp.toString();
  }
}

let n = "9875",
  k = 4;

console.log(superDigit(n, k));
