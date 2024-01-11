import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";
import axios from "axios";
import { FaHeart } from "react-icons/fa";

export default function Feed() {
  const [like, setLike] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.quotable.io/quotes/random?limit=5")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLike = (id) => {
    setLike((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  return (
    <div className="">
      {data.map((feed) => (
        <div
          className="border-b border-l border-r p-4 flex gap-5"
          key={feed._id}
        >
          <img src="assets\image 1.png" className="w-10 h-10" alt="User" />
          <div>
            <span>{feed.author}</span>
            <p>{feed.content}</p>
            <div className="flex text-2xl gap-4 pt-3">
              <FaHeart
                className={
                  like[feed._id]
                    ? "text-red-600 cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => handleLike(feed._id)}
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
