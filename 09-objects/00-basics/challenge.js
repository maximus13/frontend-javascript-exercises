module.exports.createCourse = function (title, duration, students){
  var course = {
    title: title,
    duration: duration,
    students: students,
  }
  return course
};

module.exports.addProperty = function (object, newProperty, newValue){
  if (object[newProperty] === undefined) {
    object[newProperty] = newValue
  }
  return object
};


module.exports.formLetter = function(letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function canIGet(item, money) {
  return {
    "MacBook Air": 999,
    "MacBook Pro": 1299,
    "Mac Pro": 2499,
    "Apple Sticker": 1
  }[item] <= money;
};




//To solve without IF statements look up block notation
// http://stackoverflow.com/questions/29067715/stuck-on-objects-in-javascript