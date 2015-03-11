module.exports.favoriteNumber = function(favNum,guessNum){
  if(guessNum > favNum){
    return "Too high"
  } else if (guessNum < favNum){
    return "Too low"
  } else if (guessNum === favNum)
  return "You got it!"
};



module.exports.checkLock = function(numOne,numTwo,numThree,numFour){
  var range = []
  
}

module.exports.canIGet = function(item,money){
  if(item === "MacBook Air" && money >= 999){
    return true;
  } else if (item === "MacBook Pro" && money >= 1299){
    return true;
  } else if (item === "Mac Pro" && money >= 2499){
    return true;
  } else if (item =="Apple Sticker" && money >= 1){
    return true;
  } else {
    return false;
  }
};