import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturedPost = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <Image src="./featured1.jpeg" className="rounded-3xl object-cover" />

        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>

          <Link className="text-gray-200">Web Design</Link>

          <span className="text-gray-300">2 days ago</span>
        </div>

        {/* Title */}
        <Link
          to={"/test"}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Link>
      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className={"rounded-3xl object-cover w-1/3 aspect-video"}
          />

          {/* Details and Title */}
          <div className="w-2/3 my-auto">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-gray-200">Development</Link>
              <span className="text-gray-300 text-sm">3 days ago</span>
            </div>

            {/* Title */}
            <Link
              to={"/test"}
              className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* Third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured3.jpeg"
            className={"rounded-3xl object-cover w-1/3 aspect-video"}
          />

          {/* Details and Title */}
          <div className="w-2/3 my-auto">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">03.</h1>
              <Link className="text-gray-200">Databases</Link>
              <span className="text-gray-300 text-sm">5 days ago</span>
            </div>

            {/* Title */}
            <Link
              to={"/test"}
              className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* Fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured4.jpeg"
            className={"rounded-3xl object-cover w-1/3 aspect-video"}
          />

          {/* Details and Title */}
          <div className="w-2/3 my-auto">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">04.</h1>
              <Link className="text-gray-200">Marketing</Link>
              <span className="text-gray-300 text-sm">1 days ago</span>
            </div>

            {/* Title */}
            <Link
              to={"/test"}
              className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
