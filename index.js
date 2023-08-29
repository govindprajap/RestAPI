const express = require("express")
const app = express();
const port=8000
app.use(express.urlencoded({extended:true}))
const path = require("path");
app.set("views engine", "ejs")
app.set("views",path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
let posts = [
    {   
        id: "1a",
        username: "govind",
        content: "I love coading"
    },
    {
        id:"2a",
        username: "govindPrajapati",
        content: "I got selected our first intership"
    },
    {
        id:"3a",
        username: "Arvind",
        content: "I love coading by Car"
    }
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs")
})
app.post("/posts", (req, res)=>{
    let {username, content} = req.body
    
    posts.push({username, content})
    // res.send("post request is working")
    res.redirect("/posts")
})
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    
    let post = posts.find((p)=> id===p.id)
   

    res.render("show.ejs")
})

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})