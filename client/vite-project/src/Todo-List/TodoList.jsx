import React, { useEffect, useState } from 'react'
import './style.css';
import {BiEdit} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const TodoList = () => {
    const [todos, setTodos]=useState([]);
    const navigate = useNavigate();

    //get data from backend

    const getTodos=()=>{
        try {
            fetch('http://localhost:3001/get-todos',{
               method:"GET",
               headers:{
                "Content-Type": "application/json",
               }
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                if(data.success){
                    setTodos(data.data)
                }
                // console.log(data)
                
            }).catch((err)=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getTodos()
    },[])
    // console.log(todos)
    const handleEdit=(id)=>{
        //fetch edit api 
        navigate('/edit',{state:{id:id,todos:todos}})
        // toast.success(id)

    }
    const handleDelete=(id)=>{
        // fetch delete api

        fetch(`http://localhost:3001/delete-todos/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
            }
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            if(data?.success){
                toast.success(data.messege);
                window.location.reload();
            }
            // console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
        // toast.success("Data Deleted Successfully.")
    }


  return (
    <div className='tableContainer'>
        <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
        </tr>
        {
            todos.map((todo,i)=>{
                return(
                    <tr key={i}>
                        <td>{todo.name}</td>
                        <td>{todo.email}</td>
                        <td>{todo.mobile}</td>
                        <td className='button'>
                            <div className="edit" onClick={()=>handleEdit(todo._id)}><BiEdit/></div>
                            <div className="delete" onClick={()=>handleDelete(todo._id)}><AiOutlineDelete/></div>
                        </td>
                    </tr>
                )
            })
        }
    </table>
        
      
    </div>
  )
}

export default TodoList
