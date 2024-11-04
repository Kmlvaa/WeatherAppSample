import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/account/Login'
import Register from '../pages/account/Register'

export default function Index() {
    return (
        <Routes>
           <Route path='/login' element={<Login />}/>  
           <Route path='/register' element={<Register />}/>  
        </Routes>
    )
}
