"use client";
import React from 'react';
import Post from '@/components/Post';
const Posts = () => {
  const posts = [];

  for (let i = 1; i <= 5; i++) {
    posts.push(
      <Post key={i} postNumber={i} callFrom={"multipleBlogPage"}/>
    );
  }

  return <div className="p-10 gap-x-[3vw] gap-y-[5vh] flex flex-wrap">{posts}</div>;
};

export default Posts;