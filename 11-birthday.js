//Contiguous -> sliding widow!

function birthday(s, d, m) {
  // Write your code here

  let ans = 0;
  let sum = s.slice(0, m).reduce((a, b) => a + b);

  if (sum == d) ans++;
  for (let i = 1; i <= s.length - m; i++) {
    sum = sum - s[i - 1] + s[i + m - 1];
    if (sum == d) ans++;
  }

  return ans;
}

let s = [2, 2, 1, 3, 2],
  d = 4, // sum
  m = 2; // window size

console.log(birthday(s, d, m));
