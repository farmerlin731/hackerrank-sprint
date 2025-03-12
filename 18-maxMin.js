//Sort, and then use 'sliding window' ? -> O(nlogn)

function maxMin(k, arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  let unfairness = arr[k - 1] - arr[0];

  for (let i = k; i < arr.length; i++) {
    unfairness = Math.min(unfairness, arr[i] - arr[i - k + 1]);
  }

  return unfairness;
}

let arr = [1, 4, 7, 2],
  k = 2;

console.log(maxMin(k, arr));
