const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Query = require('./models/query.model')
const jwt = require('jsonwebtoken')
const { application } = require('express')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://ardhendu:9434243742@cluster0.rs0jllc.mongodb.net/ClassDB')

app.get('/hello',(rew,res)=>{
    res.send('hello world')
})

app.post('/api/signup',async (req,res)=>{
    console.log(req.body)
    try{

        const user = await User.findOne({
            roll: req.body.roll,
            password: req.body.password,
            role: req.body.role,
        })

        if(user){
           return res.status(200).json({msg:'Duplicate User',user:false})
        }
        else{
            const newuser = await User.create({
                roll: req.body.roll,
                password: req.body.password,
                role: req.body.role,
            })
            return res.status(200).json({msg:'all okay',user:true})
        }
    }
    catch(err){
        res.status(400).json({msg:'error',error:err})
    }
})

app.post('/api/login',async (req,res)=>{
    console.log(req.body)
    try{
        const user = await User.findOne({
            roll: req.body.roll,
            password: req.body.password,
            role: req.body.role,
        })
        console.log(user)
        if(user){
            // const token = jwt.sign({
            //     roll:user.roll,
            //     password:user.password,
            // },'secretkey')
            return res.status(200).json({msg:'all okay',user:true})
        }
        else{
            return res.status(200).json({msg:'not okay',user:false})
        }
    }
    catch(err){
        res.json({status:'error',error:'Invalid data here'})
    }
})

app.post('/api/getStuQuery',async (req,res)=>{
    try{
        console.log("getting there")
        const data = await Query.find({
            roll: req.body.roll
        })
        console.log(data)
        
        return res.status(200).json({msg:'not okay',user:false,data:data})
    }
    catch(err){
        res.json({status:'error',error:'Invalid data here'})
    }
})

app.post('/api/addComment',async (req,res)=>{
    console.log(req.body)
    try{

        const user = await Query.findOne({
            roll: req.body.roll,
            exam: req.body.exam,
            course: req.body.course,
            question: req.body.question,
            ta: req.body.taroll,
            stuComment: req.body.comments
        })
        // console.log("check done")
        if(user){
           return res.status(200).json({msg:'Duplicate User',user:false})
        }
        else{
            const newuser = await Query.create({
                roll: req.body.roll,
                exam: req.body.exam,
                course: req.body.course,
                question: req.body.question,
                ta: req.body.taroll,
                stuComment: req.body.comments,
                taComment: ""
            })
            // console.log("entry done")
            return res.status(200).json({msg:'all okay',user:true})
        }
        
        // res.send(user)
        
        // console.log("control is here")
    }
    catch(err){
        res.status(400).json({msg:'error',error:err})
    }
})

app.listen(3005,()=>{
    console.log('Server started at 3005 port')
})