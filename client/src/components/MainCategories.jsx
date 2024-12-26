import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

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
      <Search />
    </div>
  );
};

export default MainCategories;