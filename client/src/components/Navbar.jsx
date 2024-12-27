import { useEffect, useState } from "react";
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
        <div
          className="cursor-pointer text-3xl font-extralight"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? "X" : "☰"}
        </div>
        {/* Mobile menu list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 text-lg font-medium absolute top-16 bg-[#00171f] transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to={"/"}>Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-3 px-6 rounded-3xl bg-blue-800 hover:bg-blue-600">
              Login 👋
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to={"/"}>Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most popular</Link>
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
