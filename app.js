import express  from'express';

const app = express();
const port = 3000;

app.get("/" , (req,res)=>{
    res.send('İndex Sayfası 44f')
})

app.listen(port , () =>{
    console.log(` app running ${port}`)
})