import { useState } from 'react'
import {BrowserRouter,Route,Routes,Router, NavLink, Navigate} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import { useSelector } from 'react-redux'

function App() {
  let user = useSelector(state=>state.user)
  // console.log("from app",user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={!user? <Login/> : <Navigate to={`/`}/>}/>
          <Route path={`/`} element={user? <Home/> : <Navigate to={'/register'} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
