function anagram(s) {
  if (s.length % 2 !== 0) return -1;

  let leftStr = s.slice(0, s.length / 2);
  let rightStr = s.slice(s.length / 2);
  const charDict = {};

  for (let char of leftStr) {
    charDict[char] = (charDict[char] || 0) + 1;
  }

  for (let char of rightStr) {
    if (charDict[char]) charDict[char]--;
  }

  return Object.values(charDict).reduce((sum, cur) => sum + cur, 0);
}

let s = "aaabbbba";

// Testing
console.log(anagram("aaabbb")); // 3
console.log(anagram("ab")); // 1
console.log(anagram("abc")); // -1
console.log(anagram("mnop")); // 2
console.log(anagram("xyyx")); // 0
console.log(anagram("xaxbbbxx")); // 1
