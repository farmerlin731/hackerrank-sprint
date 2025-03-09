//First, create a hashMap about strings.

function matchingStrings(strings, queries) {
  // Write your code here
  const hashMap = {};

  strings.forEach((s) => {
    hashMap[s] = (hashMap[s] || 0) + 1;
  });

  return queries.map((q) => hashMap[q] || 0);
}

const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];

console.log(matchingStrings(strings, queries));
