// A bad question..
//Just want check the factor?
//Oh,, just want check n is odd or even...

function towerBreakers(n, m) {
  // Write your code here

  if (m == 1) return 2;

  return n % 2 == 0 ? 2 : 1;
}
