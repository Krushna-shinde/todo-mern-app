
import './App.css'
// import CreateTodo from './Todo-List/CreateTodo';
// import TodoList from './Todo-List/TodoList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Router from './Router';
import Navbar from './Todo-List/Navbar';

function App() {

  return (
     <div className='App'>
     {/* <h2>Todo List</h2> */}
     {/* <CreateTodo/>
     <TodoList/> */}
     <Navbar/>
     <Router/>
     <ToastContainer/>
     </div>
  )
}

export default App
