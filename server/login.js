import {collection,getDocs,where,query} from 'firebase/firestore'
import {db} from './firebase.js'

export const loginUser = async (data) =>{
    const collec = collection(db,'users');
    const q = query(collec, where('username', '==', data.username))
    const user = [];
    try {
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc=>{
            user.push({id:doc.id , ...doc.data()})
        })
        console.log(user);
        return user
    } catch (error) {
        console.log("login error",error.message);
        return error
    }
}   