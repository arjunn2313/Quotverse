import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Comments() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-4 flex items-center gap-4 border-l border-r">
        <IoIosArrowRoundBack
          className="text-4xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <span>Comments</span>
      </div>

      {/* SELECTED Quote */}

      <div className="border-b border-l border-r p-4 flex gap-5">
        <img src="assets\image 1.png" className="w-10 h-10" alt="User" />
        <div>
          <span>Mahathma Gandhi</span>
          <p>
            Forgiveness is choosing to love. It is the first skill of
            self-giving love.
          </p>
          <div className="flex text-2xl gap-4 pt-3">
            <FaHeart />
            <BiMessageRounded className="cursor-pointer" />
            <LiaTelegramPlane className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-2 pt-3 text-gray-500 text-sm">
            <span>wisdom - love</span>
            <span>12 Likes - 2 Comments</span>
          </div>
        </div>
      </div>

      {/* DISPLAYED COMMENT */}

      <div className="border-b border-l border-r p-4">
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-5">
            <img src="assets\image 1.png" className="w-10 h-10" alt="User" />
            <div>
              <span className="text-gray-500">Mahathma Gandhi</span>
              <p className="text-sm">
                Forgiveness is choosing to love. It is the first skill of
                self-giving love.
              </p>
            </div>
          </div>
          <FaHeart className="text-sm" />
        </div>
      </div>

      {/* ADD COMMENT */}
      <div className="flex items-center justify-between p-4 border-b border-l border-r">
        <div className="flex gap-5 items-center justify-center">
          <img src="assets\image 1.png" className="w-10 h-10" alt="User" />
          <input
            type="text"
            className="text-sm text-gray-500 outline-none bg-black"
            placeholder="Add your comment here...."
          />
        </div>
        <span className="cursor-pointer">POST</span>
      </div>
    </div>
  );
}
