function nChai(g, b, k, n) {
  var first = "";
  if (g > b) {
    first = "Green";
  } else {
    first = "Black";
  }
  var second = "";

  if (first === "Green") {
    second = "Black";
  } else {
    second = "Green";
  }
  var chai_schedule = [];
  var temp = 0;
  var drinkNow = false;
  if ((!(b < k) && !(g < k)) || g == k || b == k) {
    for (var i = 0; i < n; i++) {
      if (temp === 0) {
        temp = k;
        drinkNow = !drinkNow;
      }
      if (drinkNow === true && temp > 0) {
        chai_schedule.push(first);
      }
      if (drinkNow === false && temp > 0) {
        chai_schedule.push(second);
      }
      temp--;
    }
  }
  return chai_schedule;
}

console.log(nChai(3, 2, 1, 3 + 2));
