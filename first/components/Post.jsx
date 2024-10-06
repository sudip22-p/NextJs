"use client";
import React from "react";
import Link from "next/link";
const Post = ({ postNumber, callFrom }) => {
    if (callFrom === "multipleBlogPage") {
        return (
            <Link href={`/post/${postNumber}`}> 
            <div
              className="border border-gray-300 p-4 rounded-lg shadow-md cursor-pointer w-[25vw] bg-green-900 h-[20vh]"
            >
              <h2 className="text-xl font-bold mb-2">Post {postNumber}</h2>
              <p>This is the content of post {postNumber}.</p>
            </div>
            </Link>
          );
    }
  return (
    <div
      className="border border-gray-300 p-4 rounded-lg shadow-md cursor-pointer w-[90vw] bg-yellow-900 h-[20vh]"
    >
      <h2 className="text-xl font-bold mb-2">Post {postNumber}</h2>
      <p>This is the content of post {postNumber}.</p>
    </div>
  );
};

export default Post;
