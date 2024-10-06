import React from "react";
import Post from "@/components/Post";

const SinglePagePost = ({ params }) => {
  const slugList = ["1", "2", "3", "4", "5"];
  if (!slugList.includes(params.slug)) {
    return (
      <div className="px-[5vw] py-[3vh]">
        <h1 className="text-center font-bold text-3xl mb-2">Post Not Found.</h1>
      </div>
    );
  }
  return (
    <div className="px-[5vw] py-[3vh]">
      <h1 className="text-center font-bold text-3xl mb-2">Blog Single Page</h1>
      <Post postNumber={params.slug}/>
    </div>
  );
};

export default SinglePagePost;
