import React from "react";
import { GoHome } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Likes() {
    const navigate = useNavigate()
  return (
    <div className="">
      <div className="border-b border-l border-r p-4 flex gap-5 cursor-pointer">
        <img src="assets\image 1.png" className="w-10 h-10" alt="User" />
        <div>
          <span>xdd</span>
          <p>ddd</p>
          <div className="flex text-2xl gap-4 pt-3">
            <FaHeart />
            <BiMessageRounded className="cursor-pointer" />
            <LiaTelegramPlane className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
