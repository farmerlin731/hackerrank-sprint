//Create the hashMap.
//Iterate it, fine the unique key(value == 1).

function lonelyinteger(a) {
  const hashMap = {};

  a.forEach((num) => {
    hashMap[num] = (hashMap[num] || 0) + 1;
  });

  for (let i in hashMap) {
    if (hashMap[i] == 1) return i;
  }
}

const a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(a));
