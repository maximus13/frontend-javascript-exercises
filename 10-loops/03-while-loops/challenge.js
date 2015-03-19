module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn()){ 
   
    actionFn(); 
  }
}

module.exports.sumNumbers = function(arr){
 
  var item,
      ret = 0;

  while(item = arr.pop()){
    ret += item;
  }

  return ret;

};