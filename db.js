const mysql = require('mysql2');
const con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Nagasai@6302',
    database:'information'
})
function getMobiles(){
return new Promise(function(succ,reject){
    con.query('select * from laptops',(err,row,cols)=>{
        if(err){
          reject(err);
        }else {
          succ(row);
        //console.log(cols);
        }
        con.end();
});
})
}
function addMobiles(sno,name,place){
    return new Promise(function(succ,rej){
        con.query('insert into laptops values(?,?,?)',[sno,name,place],(err,row)=>{
            if(err){
                rej(err);
            }else {
                succ(row);
            }
    
        })
    })
}
function updataMobiles(name,place,sno){
    return new Promise(function(succ,rej){
        con.query('update laptops set name=? ,place=? where sno=?',[name,place,id],(err,row)=>{
            if(err){
                rej(err);
            }else {
               succ(row);
            }
        } )
    })
}
function deleteMobiles(s_no){
    return new Promise(function(succ,rej){
        con.query('delete from  laptops where s_no =? ',[s_no ],(err,row)=>{
            if(err){
                rej(err);
            }else {
                succ(row);
            }
        } )
    })
}
// addMobiles(3579,"kumaruufddsu","oooadsdrtea");
// updataMobiles(12);
// deleteMobiles(12);
// getMobiles();



 module.exports={
    deleteMobiles,updataMobiles,getMobiles,addMobiles
 }