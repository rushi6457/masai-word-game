
const crypto = require('crypto');
function GenerateRandomWord(req,res) {
  let word = "";
  let possible = "abcdefghijklmnopqrstuvwxyz";
   let length ;
    if(length !==0){
       length= Math.floor((Math.random()+2)*5)
    }
    
  for (let i = 0; i < length; i++) {
    word += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  if(word.length ==0){
    res.send({"message":"Generate another word"})
  }
  res.send(word)
}
module.exports = {
    GenerateRandomWord
}
