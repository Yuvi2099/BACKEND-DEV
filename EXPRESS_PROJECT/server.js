const express = require("express")

const userdata = require("./data")

const app = express();

app.get("/", (req, res) => {
    res.send("hello dev")
})

app.get("/user", (req, res) => {
    res.send("user route")
})

app.get("/user/profile", (req, res) => {
    res.send("user profile route")
})

app.get("/user/page", (req, res) => {
    let name=req.query.name;
    let age=req.query.age;
    res.json({
        name,
        age
    });
})

app.get("/about", (req, res) => {
    res.send("about")
})

app.get("/userdetail", (req, res) => {
    res.json(userdata);
});

let a = [1, 2, 3, 4, 5];

app.get("/userdetail1", (req, res) => {
    let ans = {
        time: "morning ",
        month: "january",
        year: "2026"
    }
    res.json(ans);
})

app.get("/userAge", (req, res) => {
    let userGreaterThan20 = userdata.filter((ele) => ele.age > 20)
    console.log(userGreaterThan20)
    res.json(userGreaterThan20);
})

app.get("/surname", (req, res) => {

})

app.get("/usergender", (req, res) => {

    let finaldata = userdata.map((ele) => {
        let finalName = "";

        if (ele.gender === "male") {
            finalName = "Mr. " + ele.name;
        } else if (ele.gender === "female") {
            finalName = "Mrs. " + ele.name;
        }
        return { finalName }
    });

    res.json(finaldata);
});

app.get("/user/:id",(req,res)=>{
  const id=parseInt(req.params.id);

  let user=userdata.find((ele)=>ele.id===id)

  res.json(user);
})

app.listen(3000, () => {
    console.log("server is running")
})

 