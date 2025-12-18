import express from 'express';
const app = express();

const Port = 8000;
app.get('/',(req,res)=>{
    console.log("Get Request is working")
    res.send("Hello from the TechChefz backend project ")
})

app.listen(Port,()=>{
    console.log(`Server is running at port ${Port}`);
})