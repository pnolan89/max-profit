var maxProfit = function(arr) {
  var profit = 0;
  var priceBefore = 0;
  var priceAfter = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = (i + 1); j < arr.length; j ++) {
      if (arr[j] - arr[i] > profit) {
        priceBefore = arr[i];
        priceAfter = arr[j];
        profit = arr[j] - arr[i];
      }
    }
  }
  if (profit == 0) {
    return "No profit could be made!";
  } else {
    return "Max profit is " + profit + ("! (" + priceBefore + " ==> " + priceAfter + ")");
  }
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([45, 40, 35, 30, 20, 10, 5]));