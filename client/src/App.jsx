import React from 'react'
import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './components/Animation.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from './components/Dashboard';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import Profile from './components/Profile';
import BrowseSkills from './components/BrowseSkills';

const Appcontent = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isDashBoard = location.pathname === '/Dashboard';
  const both = isHomePage || isDashBoard;
   return(
    <div className=  {`${both ? 'bg-[url("./bg-blue.jpg")] bg-cover h-[100%]' : "backdrop-blur-md bg-cover h-[100%] overflow-y-hidden flex flex-col items-center justify-between  bg-blue-950"} `}>

        <Routes>
          <Route element = {<ProtectedRoutes/>}>
              <Route path = "/Dashboard" element = {<Dashboard/>}></Route>
              <Route path = "/profile" element = {<Profile/>}></Route>
          </Route>
          <Route path = "/" element = {<HomePage/>}></Route>
          <Route path = "/SignIn" element = {<SignIn/>}></Route>
          <Route path = "/Signup" element = {<SignUp/>}></Route>
          <Route path = "/skills" element = {<BrowseSkills/>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Appcontent/>
      <ToastContainer position="top-center" autoClose={2000} />
    </BrowserRouter>
    
  )
}

export default App