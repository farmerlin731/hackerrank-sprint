//Compute it directly?

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let left = 0;
  let right = arr.length - 1;

  const firstDiagonal = arr.reduce((sum, cur) => (sum += cur[left++]), 0);
  const secondDiagonal = arr.reduce((sum, cur) => (sum += cur[right--]), 0);

  return Math.abs(firstDiagonal - secondDiagonal);
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(arr));
