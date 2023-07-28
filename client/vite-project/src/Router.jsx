import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoList from './Todo-List/TodoList'
import CreateTodo from './Todo-List/CreateTodo'
import EditTodo from './Todo-List/EditTodo'

const Router = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<CreateTodo/>}/>
        <Route path='/data' element={<TodoList/>}/>
        <Route path='/edit' element={<EditTodo/>}/>
    </Routes>

    
    </div>
  )
}

export default Router
