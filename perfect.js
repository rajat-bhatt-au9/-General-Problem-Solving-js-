/* Write a function that tells if a given number is perfect or not. A number is called perfect if the
sum of the factors of a number (excluding the number itself) is the number itself.
Return “Perfect” if the number is perfect
if the sum of factors is greater than the input return “Abundant”
if the sum of factors is lesser than the input return “Deficient”.
 */

function isPerfect(n) {
  sum = 0;
  for (var i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  if (sum === n) {
    return "Perfect";
  } else if (sum >= n) {
    return "Abundant";
  } else {
    return "Deficient";
  }
}

console.log(isPerfect(6));
