//...JUST XOR
//Need to know how to change the base.

function xorStrings(s, t) {
  return (s ^ t).toString(2);
}

let s = 0b10101;
let t = 0b00101;

console.log(xorStrings(s, t));
