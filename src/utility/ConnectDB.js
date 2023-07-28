const mongoose= require('mongoose');

const connectDB= async()=>{
    try {
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/todo');
        console.log(`Database connection successful at host ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDB;