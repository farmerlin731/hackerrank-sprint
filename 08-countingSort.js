//Non-comparison-based algorithm!
//aka Alternative sorting.

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  // Write your code here
  // const ans = Array(Math.max(...arr) + 1).fill(0);
  const ans = Array(100).fill(0); //Fix the arr size..

  arr.forEach((num) => ans[num]++);
  return ans;
}

const arr = [5, 8, 1, 1, 2, 5, 7, 9, 15, 1, 2, 0, 5, 5, 5, 8, 1];

console.log(countingSort());
