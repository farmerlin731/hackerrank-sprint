//The method i only think is brute-force. Q_Q

function gridChallenge(grid) {
  let height = grid.length;
  let width = grid[0].length;

  for (let i = 0; i < height; i++) {
    grid[i] = grid[i].split("").sort().join("");
  }

  for (let j = 0; j < width; j++) {
    for (let i = 1; i < height; i++) {
      if (grid[i][j] < grid[i - 1][j]) return "NO";
    }
  }

  return "YES";
}

// let grid = ["eabcd", "fghij", "olkmn", "trpqs", "xywuv"];
let grid = ["mpxz", "abcd", "wlmf"];

console.log(gridChallenge(grid));
