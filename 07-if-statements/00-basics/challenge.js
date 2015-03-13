module.exports.favoriteNumber = function(favNum,guessNum){
  if(guessNum > favNum){
    return "Too high" } else if (guessNum < favNum){
      return "Too low"
    } else if (guessNum === favNum)
    return "You got it!"
  };




  module.exports.checkLock = function(comboNumOne,comboNumTwo,comboNumThree,comboNumFour){
    if ((comboNumOne === 3 || comboNumOne === 5 || comboNumOne === 7) && (comboNumTwo === 2) && (5 <= comboNumThree && comboNumThree <= 100) && (comboNumFour <9 || comboNumFour > 20) && (comboNumFour != 9 || comboNumFour != 20)){
        return "correct";
      } else {
        return "incorrect";
      }
    };



// function checkLock takes four combination number integers as comboNumOne...
// if comboNumOne equals valid number and ...Two and ...Three and ...Four then return "correct"
// Else return "incorrect"

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