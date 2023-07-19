const express = require("express")
const app = express();
app.use(express.json());
app.post("/Login",(req,res)=> {
    const{email,password}=req.body;
    if (password=="keerthikv"){
        res.send("login success")
    }else{
        res.send("password incorrect")
    }
    
})
app.post("/Register",(req,res)=>{
    console.log(req.body)
     res.send("Register")

})



app.listen(5000,()=>{
    console.log("server listen at port 5000");
});