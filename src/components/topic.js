import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";

export default function Topic() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-4 flex items-center gap-4 border-l border-r">
        <IoIosArrowRoundBack
          className="text-4xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div>
          <span className="text-sm text-gray-500">Topic</span>
          <h6 className="font-bold">#Wisdom</h6>
        </div>
      </div>

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
