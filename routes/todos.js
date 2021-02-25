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
      res.status(400).send({message:error})
  })
})

router.delete('/:todoId' , async(req,res) => {

    try{
        await Todo.remove({_id:req.params.todoId});
        res.json({_id:req.params.todoId})
    } catch(e) {
        res.json({message:e})
    }
})

router.patch('/:todoId' , async(req,res) => {

    try{
       await Todo.updateOne({_id:req.params.todoId},{$set:req.body});
        res.json({_id:req.params.todoId,...req.body})
    } catch(e) {
        res.json({message:e})
    }
})
module.exports = router