//There is no code in hackerrank's js...
//hmm,,, just a lot of if&else.
//The solution is from GPT.

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function countPrimeDates(d1, m1, y1, d2, m2, y2, K) {
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = 0;

  let day = d1,
    month = m1,
    year = y1;

  while (true) {
    // 计算当前日期的 DDMMYYYY 数值
    let num = day * 1000000 + month * 10000 + year;
    if (num % K === 0) count++;

    // 移动到下一天
    day++;

    // 处理月份和闰年情况
    if (month === 2) {
      if (isLeapYear(year) && day > 29) {
        day = 1;
        month++;
      } else if (!isLeapYear(year) && day > 28) {
        day = 1;
        month++;
      }
    } else if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }

    // 处理年份变化
    if (month > 12) {
      month = 1;
      year++;
    }

    // 终止条件
    if (
      year > y2 ||
      (year === y2 && month > m2) ||
      (year === y2 && month === m2 && day > d2)
    ) {
      break;
    }
  }

  return count;
}

// 测试
console.log(countPrimeDates(1, 1, 2012, 1, 2, 2012, 4)); // 示例输出
