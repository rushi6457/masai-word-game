const mongoose=require('mongoose');
const connect=async()=>{
    return await mongoose.connect(`mongodb+srv://rushi6457:Rushikesh6457@cluster0.srjjdkw.mongodb.net/mock-14?retryWrites=true&w=majority`)
}
module.exports=connect;