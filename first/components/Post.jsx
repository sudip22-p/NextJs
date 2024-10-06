"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Post = ({ postNumber, callFrom }) => {
  const onClickHandler =
    callFrom === "multipleBlogPage" ? () => handleClick(postNumber) : null;
  const router = useRouter();
  const handleClick = (postNumber) => {
    router.push(`/post/${postNumber}`);
  };
  return (
    <div
      key={postNumber}
      className={`border border-gray-300 p-4 rounded-lg shadow-md cursor-pointer ${
        callFrom === "multipleBlogPage" ? "w-[25vw] bg-green-900" : "w-[90vw] bg-yellow-900"
      } h-[20vh]`}
      onClick={onClickHandler}
    >
      <h2 className="text-xl font-bold mb-2">Post {postNumber}</h2>
      <p>This is the content of post {postNumber}.</p>
    </div>
  );
};

export default Post;
