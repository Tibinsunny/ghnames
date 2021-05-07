
const express=require('express');
const app=express();
const fetch=require("node-fetch");
const router=express.Router();

router.use(express.json())

router.post('/find',(req,res) => {
  let profileLink=req.body.profile;
    fetch(`https://github.com/${profileLink}`).then(result=>{
        res.json({
            status:result.status,
        })
    })
})
module.exports=router;
