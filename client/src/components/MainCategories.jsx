import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="mt-2 hidden md:flex bg-white rounded-3xl xl:rounded-full p-3 shadow-slate-600 shadow-2xl items-center justify-center gap-8 text-black">
      {/* Links */}
      <div className="flex-1 flex items-center flex-wrap gap-1">
        <Link
          to={"/posts"}
          className="bg-blue-800 text-white rounded-full px-3 py-2"
        >
          All Posts
        </Link>

        <Link
          to={"/posts?cat=web-design"}
          className="hover:bg-blue-100 rounded-full px-3 py-2"
        >
          Web Design
        </Link>

        <Link
          to={"/posts?cat=development"}
          className="hover:bg-blue-100 rounded-full px-3 py-2"
        >
          Development
        </Link>

        <Link
          to={"/posts?cat=databases"}
          className="hover:bg-blue-100 rounded-full px-3 py-2"
        >
          Databases
        </Link>

        <Link
          to={"/posts?cat=seo"}
          className="hover:bg-blue-100 rounded-full px-3 py-2"
        >
          SEO
        </Link>

        <Link
          to={"/posts?cat=marketing"}
          className="hover:bg-blue-100 rounded-full px-3 py-2"
        >
          Marketing
        </Link>
      </div>

      <span className="text-xl font-bold">|</span>

      {/* Search */}
      <div className="bg-gray-200 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        
        <input
          type="text"
          placeholder="search for posts..."
          className="bg-transparent outline-none max-w-48"
        />
      </div>
    </div>
  );
};

export default MainCategories;