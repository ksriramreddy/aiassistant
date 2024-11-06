import { collection, getDocs, query, where } from "firebase/firestore";
import { useSelector } from "react-redux";
import { firestore } from "../Firebase/firebase";
import { useEffect } from "react";


const collec = collection(firestore,'users')
const q = query(collec,where(firestore,'==',user.id))
const newUser = []
useEffect(async ()=>{
    const querySnapshot = await getDocs()
    querySnapshot.forEach(doc=>{
        newUser.push({id:doc.id,...doc.data()})
    })
    console.log('new user',newUser);
},[user])



