module.exports.copy = function (object) {

var newObject = {};

for (var property in object) {
newObject[property] = object[property];
}

return newObject;

};




module.exports.extend = function(dest, src){

  for(var i in src){ 
    if(src.hasOwnProperty(i)){ 
      dest[i] = src[i]; 
    }
  }
  return dest;
};

module.exports.hasElems = function(obj, array) {
  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]] == undefined) {
      return false;
    }
  }
  return true;
};