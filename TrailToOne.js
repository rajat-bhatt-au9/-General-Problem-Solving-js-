/* Take a positive integer x. If x is even, divide x by 2 to get x / 2. If x is odd, multiply x by 3 and
add 1 to get 3x + 1. Repeat the process indefinitely. No matter which number you start with, you
will always reach 1 eventually during the process.
Given a number x, return the number of steps required to reach 1.
 */
function TrailToOne(x) {
  count = 0;
  if (x < 1) {
    return 0;
  }
  while (x > 1) {
    if (x % 2 === 0) {
      x = x / 2;
    } else {
      x = 3 * x + 1;
    }
    count++;
  }
  return count;
}

console.log(TrailToOne(12));
