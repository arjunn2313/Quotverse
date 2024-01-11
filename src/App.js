import React, { createContext, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import LeftBar from "./components/leftBar";
import Likes from "./components/likes";
import RightBar from "./components/rightBar";
import RightP from './context/appContext'

function App() {
 const[isToggle,setIsToggle] = useState(false)
 const handleToggleStatus = () =>{
  setIsToggle(!isToggle)
 }
 console.log(isToggle)

  return (
    <div className="text-white grid grid-cols-9">
    <RightP.Provider value={{isToggle:isToggle,handleToggle:handleToggleStatus}}>
        <LeftBar />
        <Home />
        <RightBar />
        </RightP.Provider>
  
    </div>
  );
}

export default App;
