//The hardest part is.... understanding the question...,//Just follow the rule.. just interprete to code...]

/*;
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

// content: [ 2, 1, 1 ]

function dynamicArray(n, queries) {
  let lastAnswer = 0;
  let arr = Array.from({ length: n }, () => []);
  const ans = [];

  queries.forEach((query) => {
    if (query[0] == 1) {
      let row = (query[1] ^ lastAnswer) % n;
      arr[row].push(query[2]);
    } else {
      let row = (query[1] ^ lastAnswer) % n;
      let col = query[2] % arr[row].length;
      lastAnswer = arr[row][col];
      ans.push(lastAnswer);
    }
  });

  return ans;
}

let n = 2;
let queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];

console.log(dynamicArray(n, queries));
