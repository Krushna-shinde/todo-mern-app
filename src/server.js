const express = require('express');
const cors=require('cors')
const connectDB = require('./utility/ConnectDB');
const router = require('./routes/TodoRoutes');

const app = express();
const port = 3001;

app.use(cors())
// database connection
connectDB();

app.use(express.json());
app.use(router)

app.get('/',(req,res)=>{
    res.send('<h2>Hello! I am Todo list Server.</h2>')
})
app.listen(port,()=>{
    console.log(`Server is listening at port : ${port}`)
})