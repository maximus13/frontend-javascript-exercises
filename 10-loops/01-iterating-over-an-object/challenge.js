module.exports.getKeys = function(obj){
  var result = [],
      i;

  for(i in obj){ 
    if(obj.hasOwnProperty(i)){ 
      result.push(i); 
    }
  }

  return result;
};

module.exports.getValues = function(obj){
  var result = [],
      i;

  for(i in obj){ 
    if(obj.hasOwnProperty(i)){ 
      result.push(obj[i]); 
    }
  }

  return result;
};

module.exports.objectToArray = function(obj){
  var result = [],
      i;

  for(i in obj){
    if(obj.hasOwnProperty(i)){
      result.push(i + " is " + obj[i]);
    }
  }
  return result;
};
};