//Count the max 2's exponential.
//While-loop until n == 1.

/*
 * Complete the 'counterGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 */

function counterGame(n) {
  // Write your code here

  let counter = 0;
  let index = 1;

  //First Compute.
  while (index <= n) {
    index *= 2;
  }
  index /= 2;

  while (n > 1) {
    if (n == index) {
      n /= 2;
      index /= 2;
      counter++;
    } else if (n > index) {
      n -= index;
      counter++;
    } else {
      index /= 2;
    }
  }
  console.log(counter);

  return counter % 2 == 0 ? "Richard" : "Louise";
}

console.log(counterGame(6));
