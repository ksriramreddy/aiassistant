import express from 'express'
import cors from 'cors'
import {db} from './firebase.js'
import {collection,addDoc} from 'firebase/firestore'
import { loginUser } from './login.js'
import path from 'path'
import { useReducer } from 'react'

// const express = require('express')
// const cors = require('cors')
// const {Users} = require('./firebase.js')
const app = express()
app.use(express.json());
app.use(cors());
app.set('view engine', 'jsx')
app.use(express.static(path.join(path.dirname.toString(), 'public')));
app.use(express.urlencoded({extended:true}))

const registerUser = async (data)=>{
    try {
        const ref = await addDoc(collection(db,'users'),data)
    } catch (error) {
        console.log(error.message);   
    }
}

app.post('/register', async (req,res)=>{
    const data = req.body
    console.log(data);
    await registerUser(data)
    res.send(req.body)
})

app.post('/login',async (req,res)=>{
    const data = req.body;
    const user = await loginUser(data);
    if(user){
        console.log(user);
        localStorage.setItem('user', user)
        res.send(user)
    }
    else{
        console.log(user);
    }       
})
app.listen(3000,()=>{
    console.log("running");     
    })