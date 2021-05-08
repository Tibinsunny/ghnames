const express=require('express');
const app=express();
const cors=require('cors');
const api=require('./api/index')
app.use(cors())
app.use('/api',api)

app.listen(process.env.PORT || 2000,(err,succ)=>{
    if(err)
    {
        console.log("Something went wrong")
    }
    else
    {
        console.log("Server is Up")
    }
})
