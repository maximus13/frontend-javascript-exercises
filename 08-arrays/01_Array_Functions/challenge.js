module.exports.reversePlusOne = function(array){
  array.reverse();
  array.unshift(1);
  return array; 
};
//take an array of two numbers, reverse the array, add an element (1) to the start of the array

module.exports.plusesEverywhere = function (array) {
  return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(array){
  return array.length +1;

};