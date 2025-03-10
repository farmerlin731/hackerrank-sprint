//Sort these two arrays, ascending & descending.
//Combine the same position and check if bigger than k.

function twoArrays(k, A, B) {
  // Write your code here
  A.sort((a, b) => a - b); // ascending
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) return "NO";
  }

  return "YES";
}

let k = 10,
  A = [2, 1, 3],
  B = [7, 8, 9];

console.log(twoArrays(k, A, B));
