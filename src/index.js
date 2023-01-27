
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8081
const connect = require("./config/db")
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin:true,credentials:true}))

const userRouter=require('./routes/userRoute');
const wordRouter=require('./routes/wordRoute');
console.log(wordRouter);
app.post("/user/newuser",userRouter.NewUser);
app.get("/user/rankings",userRouter.Rankings);
app.get('/word',wordRouter.GenerateRandomWord);
app.get("/",(req,res) =>res.send("Hello"))
app.listen(PORT,async()=>{
    await connect()
    console.log(`Server started on http://localhost:${PORT}`);
})