function decodeNum(decimal) {
  var binary = decimal.toString(2);
  const sep_arr = [];
  var temp = binary;
  while (temp > 0) {
    for (var i = 1; i <= temp.toString().length; i++) {
      var bin = "1";
      for (var j = 1; j < temp.toString().length; j++) {
        bin += "0";
      }
      sep_arr.push(+bin);
      temp -= +bin;
    }
  }
  const pin = [];
  sep_arr.reverse();

  sep_arr.map((item) => {
    switch (item) {
      case 1:
        pin.push("pop");
        break;
      case 10:
        pin.push("double rip");
        break;
      case 100:
        pin.push("hide your mints");
        break;
      case 1000:
        pin.push("fall");
        break;
      case 10000:
        pin.reverse();
        break;
    }
  });
  return pin;
}
//driveercode
console.log(decodeNum(19));
