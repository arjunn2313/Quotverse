import React, { useContext, useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import axios from 'axios';
import { TfiLineDouble } from "react-icons/tfi";
import { appContext } from "../context/appContext";
import RightP from '../context/appContext'
import { IoMdClose } from "react-icons/io";

export default function RightBar() {
 const toggle = useContext(RightP)
  
  return (
    
    <div className={toggle.isToggle ?  "absolute right-0 z-10 w-3/4 bg-black h-full sm:hidden":"hidden sm:relative sm:block sm:col-span-2"}>
      <div className="p-5 flex justify-end items-end border-b border-l border-r">
        {toggle.isToggle ? <IoMdClose className='text-2xl'onClick={toggle.handleToggle}/> :<TfiLineDouble className='text-2xl'/>}
      </div>
      <div className="w-4/5 mx-auto mt-12 flex flex-col md:gap-4 lg:gap-8 ">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h4 className="sm:text-md md:text-lg    lg:text-2xl font-bold  ">Trending Topics</h4>
            <CiSettings className="text-2xl" />
          </div>
         <span className="text-blue-400">show all quotes</span>
        </div>

        <div>
            <p className="text-gray-500">AGE</p>
            <p>#age</p>
            <p  className="text-gray-500">123 quotes</p>
        </div>

        <div>
            <p className="text-gray-500">AGE</p>
            <p>#age</p>
            <p  className="text-gray-500">123 quotes</p>
        </div>

        <div>
            <p className="text-gray-500">AGE</p>
            <p>#age</p>
            <p  className="text-gray-500">123 quotes</p>
        </div>

        <div>
            <p className="text-gray-500">AGE</p>
            <p>#age</p>
            <p  className="text-gray-500">123 quotes</p>
        </div>




      </div>
    </div>
   
  );
}
