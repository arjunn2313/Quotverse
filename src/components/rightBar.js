import React, { useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import axios from 'axios';
import { TfiLineDouble } from "react-icons/tfi";

export default function RightBar() {
 
  return (
    <div className="hidden sm:block sm:col-span-2">
      <div className="p-5 flex justify-end items-end border-b border-l border-r">
        <TfiLineDouble className='text-2xl'/>
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
