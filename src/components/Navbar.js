import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed text-lg w-full h-[80px] flex justify-between items-center px-4 bg-[#e8ebed] text-state-600">
      <div>
        <img src="" alt="LogoImage" style={{ width: "300px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link className="p-2 mr-2 bg-slate-400 rounded-md text-white" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className="p-2 mr-2 bg-slate-400 rounded-md text-white" to="about" smooth={true} duration={500}>
            Products
          </Link>
        </li>
        <li>
          <Link className="p-2 mr-2 bg-slate-400 rounded-md text-white" to="skills" smooth={true} duration={500}>
            Add
          </Link>
        </li>
        <li>
          <Link className="py-2 px-3 text-white mr-2 bg-green-700 rounded-md " to="work" smooth={true} duration={500}>
            Card
          </Link>
        </li>
        <li>
          <Link className="p-2 text-white bg-red-500 rounded-md" to="contact" smooth={true} duration={500}>
            Log-In/Sign-Up
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#f7f7fc] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
