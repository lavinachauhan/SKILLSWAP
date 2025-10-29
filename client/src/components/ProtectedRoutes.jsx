import React from 'react'
import { Outlet } from 'react-router-dom';
import SignIn from './SignIn';

const ProtectedRoutes = () => {
    const token = localStorage.getItem('token');
    return token ? <Outlet /> : <Navigate to = "/SignIn"/>
}

export default ProtectedRoutes
