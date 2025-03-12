//First, commpute the sum.
//Move the index, 'left' plus arr[index-1], 'right' minor arr[index+1]

/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
  // Write your code here
  if (arr.length == 1) return "YES";

  let rightSum = arr.reduce((a, b) => a + b);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i - 1] || 0;
    rightSum -= arr[i];
    if (leftSum == rightSum) return "YES";
  }

  return "NO";
}

//if arr.length == 1
//if arr.length == 2
//if arr.length >= 3

// let arr = [5, 6, 8, 11];

let arr = [2, 0, 0, 0];

console.log(balancedSums(arr));
