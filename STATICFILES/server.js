import express from 'express';

const app=express();

//http://localhost:3000/static/img1.jpg
app.use("/static",express.static('public'));


const port=3000;
app.get('/',(req,res)=>{
    res.send("Server is Running");
})

app.listen(port,()=>{
    console.log("Server is running on port ");
})
