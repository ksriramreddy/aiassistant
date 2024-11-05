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


app.get('/',(req,res)=>{
    // localStorage.getItem('') 
})

app.listen(3000,()=>{
    console.log("running");     
})