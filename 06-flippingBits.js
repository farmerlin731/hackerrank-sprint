//Bit operation.
//Use 'XOR'
//Need change to non-signed integer! (by GPT)

function flippingBits(n) {
  // Write your code here
  return (n ^ 0xffffffff) >>> 0;
}

console.log(flippingBits(1));
