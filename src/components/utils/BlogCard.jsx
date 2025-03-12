import React from "react";

const BlogCard = ({blog:{image,meta,comment,title,url}}) => {
  return (
    <div className="border border-gray-50 rounded-lg shadow-blog bg-white overflow-hidden">
      <a href={url} className="w-full block">
        <img
          className="w-full block grayscale hover:grayscale-0 transition-all duration-700"
          src={image}
          alt=""
        />
      </a>
      <div className="p-6">
        <p className=" text-sm leading-[143%] text-gray-400">
         {meta} / {comment} Comments
        </p>
        <a
          href={url}
          className=" text-sm lg:text-lg leading-[133%] text-[#333] font-medium mt-2 block"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
