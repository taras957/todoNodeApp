const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    is_done:Boolean,
})

module.exports = mongoose.model('Todos',TodoSchema)