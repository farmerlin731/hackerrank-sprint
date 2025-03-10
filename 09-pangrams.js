//Use 'Set'.
//And check the key of set is equal to '26' or not.
//Oh,, need to concern the upperCase & lowerCase.

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here
  const charSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") charSet.add(s[i].toUpperCase());
  }

  return charSet.size == 26 ? "pangram" : "not pangram";
}

let s = "We promptly judged antique ivory buckles for the next prize";
console.log(pangrams(s));
console.log(s.toUpperCase());
