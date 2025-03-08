//Note: 6 places after decimal.

function plusMinus(arr) {
  // Write your code here
  const counter = [0, 0, 0, 0]; // total,positive,negative,zero

  arr.forEach((num) => {
    counter[0]++;
    if (num > 0) counter[1]++;
    else if (num < 0) counter[2]++;
    else counter[3]++;
  });

  console.log((counter[1] / counter[0]).toFixed(6));
  console.log((counter[2] / counter[0]).toFixed(6));
  console.log((counter[3] / counter[0]).toFixed(6));
}

let arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
