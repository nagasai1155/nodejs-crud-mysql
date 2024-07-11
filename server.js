const express = require('express');  
const app = express();
const db = require('./db.js');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(5500,()=>{
    console.log("server started ");
})

// console.log(db);

app.get('/mobiles',(req,res)=>{
    db.getMobiles().then((r)=>{
        res.send(r);
    })
    .catch((err)=>{
        res.send(err);
    })
})
app.put('/mobiles1',(req,res)=>{
    db.updataMobiles(req.body.s_no,req.body.name,req.body.place,req.body.sno).then((r)=>{
        res.send(r);
    })
    .catch(()=>{
        res.send("error");
    })
})
app.post('/mobiles2',(req,res)=>{
   db.addMobiles(req.body.s_no,req.body.name,req.body.place).then((e)=>{
    res.send(e);
   })
   .catch(()=>{
    res.send("error");
   })
})
app.delete('/mobiles3',(req,res)=>{
    db.deleteMobiles().then((r)=>{
        res.send(r);
    })
    .catch(()=>{
        res.send("error");
    })
})