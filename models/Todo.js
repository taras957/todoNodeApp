const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    is_done:Boolean,
})

module.exports = mongoose.model('Todos',TodoSchema)