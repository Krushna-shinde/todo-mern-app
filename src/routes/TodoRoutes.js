const express=require('express');
const { createTodoController, getTodosController, updateTodoController, deleteTodoController, deleteallTodoController } = require('../controller/todoController');

const router = express.Router();
// CRUD

//C==> create todo api endpoint

router.post('/create-todo',createTodoController);

//R==> get todos from mongodb
router.get('/get-todos',getTodosController)

//U==> update todo
// : is used for parameters which is come from url
router.put('/update-todos/:id',updateTodoController)

//delete todos
router.delete('/delete-todos/:id',deleteTodoController)
module.exports=router;

//all delete 
router.delete('/delete-todos',deleteallTodoController)