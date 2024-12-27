import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
  );
  return response.data;
};

const FeaturedPost = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPost(),
  });

  if (isPending) {
    return "loading...";
  }

  if (error) {
    return "Something went wrong!" + error.message;
  }

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        {posts[0].img && <Image
          src={posts[0].img}
          className="rounded-3xl object-cover"
          w={"767"}
        />}

        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>

          <Link className="text-gray-300">{posts[0].category}</Link>

          <span className="text-gray-300">{format(posts[0].createdAt)}</span>
        </div>

        {/* Title */}
        <Link
          to={posts[0].slug}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. */}
          {posts[0].title}
        </Link>
      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            {posts[1].img && <Image
              src={posts[1].img}
              className={"rounded-3xl object-cover w-full h-full"}
              w="256"
            />}
          </div>

          {/* Details and Title */}
          <div className="w-2/3 my-auto">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-gray-300">{posts[1].category}</Link>
              <span className="text-gray-300 text-sm">{format(posts[1].createdAt)}</span>
            </div>

            {/* Title */}
            <Link
              to={posts[1].slug}
              className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium"
            >
              {posts[1].title}
            </Link>
          </div>
        </div>

        {/* Third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            {posts[2].img && <Image
              src={posts[2].img}
              className={"rounded-3xl object-cover w-full h-full"}
              w="256"
            />}
          </div>

          {/* Details and Title */}
          <div className="w-2/3 my-auto">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">03.</h1>
              <Link className="text-gray-300">{posts[2].category}</Link>
              <span className="text-gray-300 text-sm">{format(posts[2].createdAt)}</span>
            </div>

            {/* Title */}
            <Link
              to={posts[2].slug}
              className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium"
            >
              {posts[2].title}
            </Link>
          </div>
        </div>

        {/* Fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            {posts[3].img && <Image
              src={posts[3].img}
              className={"rounded-3xl object-cover w-full h-full"}
              w="256"
            />}
          </div>

          {/* Details and Title */}
          <div className="w-2/3 my-auto">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">04.</h1>
              <Link className="text-gray-300">{posts[3].category}</Link>
              <span className="text-gray-300 text-sm">{format(posts[3].createdAt)}</span>
            </div>

            {/* Title */}
            <Link
              to={posts[3].slug}
              className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium"
            >
              {posts[3].title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
