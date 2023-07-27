const dotenv = require("dotenv")
const express = require("express")
dotenv.config();
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
app.post("/Register/:id/:name",(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.name);
    console.log(req.body)
     res.send("Register")

})
const AuthRoute=require("./routes/auth");
app.use("/api",AuthRoute);
const CartRoute=require("./routes/cart");
app.use("/car",CartRoute);

const mongoose=require("mongoose")
mongoose.connect(process.env.DB).then(()=>{
    console.log("connected")
}).catch(err=>{
    console.log("not connect");
})



app.listen(5000,()=>{
    console.log("server listen at port 5000");
});