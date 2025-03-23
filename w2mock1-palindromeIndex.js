//Set the 'left' & 'right' index.
//If meet the differece, check the two conditions: 'left ++' or 'right --'.
//Oh,, the solution from gpt is better.. and the complexity is still O(n).

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndexFromMe(s) {
  // Write your code here
  let ans = -1;

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] == s[right]) {
      left++;
      right--;
    } else if (ans == -1) {
      if (s[left + 1] == s[right]) {
        ans = left;
        left++;
      } else if (s[left] == s[right - 1]) {
        ans = right;
        right--;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }

  return ans;
}

function palindromeIndex(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // 嘗試移除 left 或 right 來檢查是否變回文
      if (isPalindrome(s, left + 1, right)) return left;
      if (isPalindrome(s, left, right - 1)) return right;
      return -1; // 兩邊移除都無法變成回文
    }
    left++;
    right--;
  }

  return -1; // 本來就是回文

  function isPalindrome(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  }
}

// 測試案例
console.log(palindromeIndex("aaab")); // 3
console.log(palindromeIndex("baa")); // 0
console.log(palindromeIndex("aaa")); // -1
console.log(palindromeIndex("abca")); // 1
