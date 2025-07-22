const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

const users = [
    {id:1, name:'Sabana', email:'sabana@yahoo.com'},
    {id:2, name:'Zohir', email:'zohir@outlook.com'},
    {id:3, name:'Kasem', email:'kasem@ygmail.com'},
]



app.get('/',(req,res)=>{
    res.send('Users Management Server is Running')
})

app.get('/users', (req,res)=>{
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('Post API called');
    console.log(req.body);
})

app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`)
})