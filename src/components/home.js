import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Feed from "./feed";
import Likes from "./likes";
import Comments from "./comments";
import Topic from "./topic";
import { TfiLineDouble } from "react-icons/tfi";
import RightBar from "./rightBar";

export default function Home() {
  const navigate = useNavigate()
  const [like, setLike] = useState({});
  const [data, setData] = useState([]);
  const [toggle,setToggle] =useState(false)

  const handleToggle = () =>{
    setToggle(!toggle)
  }

  // useEffect(() => {
  //   axios.get('https://api.quotable.io/quotes/random?limit=5').then((res) => {
  //     setData(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }, []);

  // const handleLike = (id) => {
  //   setLike((prevLikes) => ({
  //     ...prevLikes,
  //     [id]: !prevLikes[id],
  //   }));
  // };

  return (
    <div className="col-span-9 sm:col-span-5 relative">
      <div className="p-5 flex justify-evenly items-center border-b border-l border-r">
        <GoHome className="text-2xl bg-none cursor-pointer" onClick={()=>navigate('/')}/>
        <IoMdHeartEmpty className="text-2xl cursor-pointer" onClick={()=>navigate('/likes')}/>
        <TfiLineDouble className='text-2xl sm:hidden' onClick={handleToggle}/>
      </div>
        <Routes>
          <Route exact path="/" element={<Feed/>}></Route>
          <Route exact path="/likes" element={<Likes/>}></Route>
          <Route exact path="/comments" element={<Comments/>}></Route>
          <Route exact path="/trending" element={<Topic/>}></Route>
        </Routes>
    </div>
  );
}
