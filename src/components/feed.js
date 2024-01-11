import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { quotes } from "../namedExports/quits";
import { useNavigate } from "react-router-dom";


export default function Feed() {
  const [like, setLike] = useState({});
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  // useEffect(() => {
  //   axios
  //     .get("https://api.quotable.io/quotes/random?limit=5")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleLike = (id) => {
    setLike((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

 

  return (
    <div className="">
      {quotes.map((feed) => (
        <div
          className="border-b border-l border-r p-4 flex gap-5"
          key={feed.id} 
        >
          <img src={feed.image} className="w-10 h-10" alt="User" />
          <div>
            <span onClick={()=>navigate(`/comments/${feed.id}`)} className="cursor-pointer">{feed.author}</span>
            <p onClick={()=>navigate(`/comments/${feed.id}`)} className="cursor-pointer">{feed.msg}</p>
            <div className="flex text-2xl gap-4 pt-3">
              <FaHeart
                className={
                  like[feed.id]
                    ? "text-red-600 cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => handleLike(feed.id)}
              />
              <BiMessageRounded className="cursor-pointer" />
              <LiaTelegramPlane className="cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
