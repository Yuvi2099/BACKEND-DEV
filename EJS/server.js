import express from "express";

const app=express();

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("index");
})


app.get("/user",(req,res)=>{
    let userdata={
        name:"John Don",
        age:23
    }
    res.render("user",{userdata});
})


app.get("/list",(req,res)=>{
    let arr=["Apple","Mango","Banana","Grapes","Orange"]
    res.render("list",{arr})
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})