let mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/memorandumMessage')

 let Schema = mongoose.Schema

let messageSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  id:{
    type:Number,
    required:false
  }
}) 

module.exports = mongoose.model('Messages',messageSchema)