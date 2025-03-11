//Set the empty answer array.
//Check the related-posion of 4 quarter, find the max.
//Oh,, just need to catch the number?

function flippingMatrix(matrix) {
  // Write your code here
  let n = matrix.length >> 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += Math.max(
        matrix[i][j],
        matrix[2 * n - 1 - i][j],
        matrix[i][2 * n - 1 - j],
        matrix[2 * n - 1 - i][2 * n - 1 - j]
      );
    }
  }

  return sum;
}

let matrix = [
  [1, 2],
  [3, 4],
];

console.log(flippingMatrix(matrix));
