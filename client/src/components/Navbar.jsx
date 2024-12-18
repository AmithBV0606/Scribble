import { useState } from "react";
import { IKImage } from "imagekitio-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold cursor-pointer">
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
          path="/logo.png"
          alt="logo"
          className="w-8 h-8"
        />
        <span>Scribble</span>
      </div>

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
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="py-3 px-6 rounded-3xl bg-blue-800 hover:bg-blue-600">
              Login 👋
            </button>
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="py-3 px-6 rounded-3xl bg-blue-800 hover:bg-blue-600">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;