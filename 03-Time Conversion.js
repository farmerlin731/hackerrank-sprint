//A lot of edge case.. i hate this question-style. Q_Q

function timeConversion(s) {
  // Write your code here
  const [hour, min, second] = s.slice(0, 8).split(":");
  const timeZone = s.slice(-2);

  let newHour =
    timeZone == "AM"
      ? hour == "12"
        ? "00"
        : hour
      : hour == "12"
      ? "12"
      : String(+hour + 12);

  console.log(`${newHour}:${min}:${second}`);
}

let s = "12:05:45AM";
// let s = "07:05:45PM";

timeConversion(s);
