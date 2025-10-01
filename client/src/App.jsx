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

const Appcontent = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
   return(
    <div className=  {`${isHomePage ? 'bg-[url("./bg-blue.jpg")] bg-cover h-[100%]' : "backdrop-blur-md"} bg-cover  bg-blue-950`}>
        <Routes>
          <Route path = "/" element = {<HomePage/>}></Route>
          <Route path = "/SignIn" element = {<SignIn/>}></Route>
          <Route path = "/Signup" element = {<SignUp/>}></Route>
          <Route path = "/Dashboard" element = {<Dashboard/>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Appcontent/>
    </BrowserRouter>
  )
}

export default App