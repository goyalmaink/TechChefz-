import mongoose from 'mongoose';

const connecttionstring  = process.env.DATABASE_URL;
mongoose.connect(connecttionstring)
.then(()=>{
    console.log("Database connected successfully");
})
.catch((error)=>{
    console.log("Warning comming from the database connection")
    console.log("Database connection failed", error);
})

// export mongoose