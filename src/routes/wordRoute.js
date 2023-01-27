
const crypto = require('crypto');
function GenerateRandomWord(req,res) {
  let word = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   let length ;
    if(length !==0){
       length= Math.floor(Math.random()*10-5)
    }
    
  for (let i = 0; i < length; i++) {
    word += possible.charAt(Math.floor(Math.random() * possible.length));
  }
res.send(word)
}
module.exports = {
    GenerateRandomWord
}
