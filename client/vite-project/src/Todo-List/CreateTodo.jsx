import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateTodo = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState('');
    const navigate=useNavigate();

    const resetInputs=()=>{
        setName('');
        setNumber('');
        setEmail('');

    }

    const createTodos=()=>{
        let obj={
            name:name,
            email:email,
            mobile:number
        }
        fetch('http://localhost:3001/create-todo',{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "Content-Type": "application/json",
            },

        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            // console.log(data)
            if(data.success){
                navigate('/data')
                toast.success(data.messege)
            }else{
                toast.error(data.messege)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        // toast.success("data created ")
        createTodos();
        resetInputs();
        // console.log(obj)
    }
  return (
    <>
    <h3 className="addtodo" for="todo">ADD NEW TODO </h3>
    <div className='form'>

      <form onSubmit={handleSubmit} className='form-box' >
        <div className="inputs">
        <label for="name"><b>Name*:</b> </label><br />
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Name' required />
        </div>
        <div className="inputs" >
        <label for="email"><b>Email*:</b> </label><br />
            <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Email' required/>
        </div>
        <div className="inputs">
        <label for="number"><b>Number*:</b></label><br />
            <input type="number" value={number} onChange={(event)=>setNumber(event.target.value)} placeholder='Enter Number' required/>
        </div>
        <input className='btn' type="submit" />
      </form>
    </div>
    </>
  )
}

export default CreateTodo
