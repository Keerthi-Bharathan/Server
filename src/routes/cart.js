const express=require("express")
const router=express.Router();
const cartMid=(req,res,next)=>{
    if(req.body.password=="keerthikv"){
        next();
    }
    else{
        res.send("incorrect")
    }
    

}


router.get("/login",cartMid,
(req,res)=>{
    res.send("kee3")
})


module.exports=router;