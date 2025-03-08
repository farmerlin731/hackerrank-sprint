//Iterate it once, find the min & max & total -> O(n)
//I feel my answer is better than chatGPT. XD

function miniMaxSum(arr) {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  arr.forEach((num) => {
    sum += num;
    if (num < min) min = num;
    if (num > max) max = num;
  });

  console.log(`${sum - max} ${sum - min}`);
}

const arr = [1, 2, 3, 4, 5];

miniMaxSum(arr);
