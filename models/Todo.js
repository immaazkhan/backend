const mongoose=require('mongoose');
const schema=mongoose.Schema;

const TodoSchema = new mongoose.Schema({
      text: {
        type:String
      },
      complete: {
        type:Boolean,
        default:false
      },
      timestamp: {
        type:String,
        default:Date.now()
      }

  }, {
    capped: { size: 1024 },
    bufferCommands: false,
    autoCreate: false // disable `autoCreate` since `bufferCommands` is false
  })


  const Todo=new mongoose.model("Todo",TodoSchema);

  module.exports=Todo;