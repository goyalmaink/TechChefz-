import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import db from './db/connection.js'
const app = express();

const Port = 8000;

db()


app.get('/',(req,res)=>{
    console.log("Get Request is working")
    res.send("Hello from the TechChefz backend project ")
})

app.listen(Port,()=>{
    console.log(`Server is running at port ${Port}`);
})
