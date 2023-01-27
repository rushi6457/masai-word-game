const {Schema,model} = require('mongoose')

const WordSchema = new Schema({
    word:{type:String}
})
const WordModel = model("word",WordSchema)
module.exports = WordModel