//Maybe we can create a heap-tree? -> O(n)
//And the quick-select.. ->O(n)

/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  return arr[arr.length >> 1];
}

let arr = [0, 1, 2, 4, 6, 5, 3];

arr.sort((a, b) => a - b);
console.log(findMedian(arr));
