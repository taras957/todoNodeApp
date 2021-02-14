const express = require('express')
const router = express.Router();
const Todo = require('../models/Todo')

router.get('/', async(req,res) => {
    const Todos = await Todo.find()
    try{
        res.json(Todos)
    }catch(e){
        res.json({message:e})
    }
})

router.post('/', (req,res) => {
  const todo = new Todo({
      ...req.body
  })

  todo.save()
  .then((data)=> {
      res.json(data)
  })
  .catch(error => {
      res.json({message:error})
  })
})

router.delete('/:todoId' , async(req,res) => {

    try{
        const deletedTodo = await Todo.remove({_id:req.params.todoId});
        res.json(deletedTodo)
    } catch(e) {
        res.json({message:e})
    }
})

router.patch('/:todoId' , async(req,res) => {

    try{
        const updatedTodo = await Todo.updateOne({_id:req.params.todoId},{$set:req.body});
        res.json(updatedTodo)
    } catch(e) {
        res.json({message:e})
    }
})
module.exports = router