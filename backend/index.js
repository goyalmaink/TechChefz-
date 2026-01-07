import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import db from './db/connection.js'
import postRoutes from './routes/post.route.js'
import getRoutes from './routes/get.route.js'
import deleteRoutes from './routes/delete.route.js'
import putRoutes from './routes/put.route.js'
const app = express();

const Port = 8000;
// connecting to database 
db()
//using middle ware 
app.use(express.json());
app.use('/api/create',postRoutes)
app.use('/api/getall', getRoutes)
app.use('/api/delete', deleteRoutes)
app.use('/api/update', putRoutes)

app.get('/',(req,res)=>{
    console.log("Get Request is working")
    res.send("Hello from the TechChefz backend project ")
})

app.listen(Port,()=>{
    console.log(`Server is running at port ${Port}`);
})


