//Sort, move the max to middle , and reverse the right part.

function zigZagSequence(arr) {
  let n = arr.length;

  // 1️⃣ 先对数组进行排序
  arr.sort((a, b) => a - b);

  // 2️⃣ 交换最大元素到中间
  let mid = Math.floor((n - 1) / 2);
  [arr[mid], arr[n - 1]] = [arr[n - 1], arr[mid]];

  // 3️⃣ 反转中间后的元素，确保后半部分递减
  let left = mid + 1,
    right = n - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

console.log(zigZagSequence([1, 2, 3, 4, 5, 6, 7])); // [1, 2, 3, 7, 6, 5, 4]
