const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const TodoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique: true
    },
    is_done:Boolean,
})

TodoSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Todos',TodoSchema)