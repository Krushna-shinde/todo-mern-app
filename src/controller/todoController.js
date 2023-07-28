const todoModel = require('../model/TodoModel.js');

const createTodoController=async(req,res)=>{
    try {
        const {name,email,mobile}=req.body;
        const data = await todoModel({
            name:name,
            email:email,
            mobile:mobile
        })
        data.save();
        res.status(201).send({
            success:true,
            messege:"Data created succesfull..",
            data
        })
        
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            messege:"Error while creating data.",
            error
        })
    }
}


//get todos controller funtion

const getTodosController= async(req,res)=>{
    try {
        const data= await todoModel.find({});
        res.status(200).send({
            success:true,
            messege:"Data get successfully.",
            data
        })
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            messege:"Error while getting todos",
            error
        })
    }
}

//update todos controller funtion
const updateTodoController=async(req,res)=>{
    try {
        let id = req.params.id;
        const {name,email,mobile}=req.body;
        const data = await todoModel.findByIdAndUpdate(id,{
            name:name,
            email:email,
            mobile:mobile
        })
        data.save();
        res.status(200).send({
            success:true,
            messege:"Data updated successfully.",
            data
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            messege:"Error while updating data",
            error
        })
    }
}

//dete todo control funtion
const deleteTodoController=async(req,res)=>{
    try {
        let id = req.params.id;
        const data = await todoModel.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            messege:"Data deleted succesfully",
            data
        })
        
    } catch (error) {
        res.status(400).send({
            success:false,
            messege:"Error while deleting todo",
            error
        })
    }
}

// all dat deleted
const deleteallTodoController=async(req,res)=>{
    try {
        const data = await todoModel.deleteMany({});
        res.status(200).send({
            success:true,
            messege:"All Data deleted succesfully",
            data
        })
        
    } catch (error) {
        res.status(400).send({
            success:false,
            messege:"Error while deleting all todo",
            error
        })
    }
}

module.exports={createTodoController,getTodosController,updateTodoController,deleteTodoController,deleteallTodoController}