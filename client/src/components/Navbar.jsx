import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link
        to={"/"}
        className="flex items-center gap-4 text-2xl font-bold cursor-pointer"
      >
        <Image src={"logo.png"} alt="Logo" w={32} h={32} />
        <span>Scribble</span>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-3xl"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {/* Change Hamburger Icon */}
          {/* {open ? "X" : "☰"} */}
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-white origin-left transition-all ease-in-out ${
                open && "rotate-45"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-white transition-all ease-in-out ${
                open && "opacity-0"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-white origin-left transition-all ease-in-out ${
                open && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>
        {/* Mobile menu list */}
        <div
          className={`w-full h-screen bg-[#00171f] ${
            open
              ? "flex flex-col items-center justify-center gap-8 text-lg font-medium absolute top-16 transition-all ease-linear -right-0"
              : "hidden -right-[100%]"
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>
            Trending
          </Link>
          <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>
            Most Popular
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            About
          </Link>
          {/* <Link to="/login" onClick={() => setOpen(false)}>
            <button className="py-3 px-6 rounded-3xl bg-blue-800 hover:bg-blue-600">
              Login 👋
            </button>
          </Link> */}

          <SignedOut>
            <Link to="/login">
              <button className="py-3 px-6 rounded-3xl bg-blue-800 hover:bg-blue-600">
                Login 👋
              </button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to={"/"}>Home</Link>
        <Link to="/posts?sort=trending">Trending</Link>
        <Link to="/posts?sort=popular">Most popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-3 px-6 rounded-3xl bg-blue-800 hover:bg-blue-600">
              Login 👋
            </button>
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
