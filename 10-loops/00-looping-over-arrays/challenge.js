module.exports.sumNumbers = function (amount) {
  var total = 0;
  for (i = 0; i < amount.length; ++i) {
   total += amount[i]; 
 }
 return total;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  var string = inputString.toLowerCase().split(",");
  return string;
}

module.exports.addIndex = function(inputData) {
  var array = [];
  for (var i = 0; i < inputData.length; i++) {
    array.push(i + " is " + inputData[i]);
  }
  return array;
}
