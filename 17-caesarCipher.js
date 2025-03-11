//change the string to ASCII.
//Rotate it, and change back to number!

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  // Write your code here

  let codeArr = s.split("").map((char) => moveToASCIIAndRotate(char));
  let newS = codeArr.map((code) => String.fromCharCode(code)).join("");
  return newS;

  function moveToASCIIAndRotate(char) {
    let ascii = char.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      ascii = ((ascii - 65 + k) % 26) + 65;
    } else if (ascii >= 97 && ascii <= 122) {
      ascii = ((ascii - 97 + k) % 26) + 97;
    }
    return ascii;
  }
}

let s = "middle-Outz",
  k = 2;

console.log(caesarCipher(s, k));
