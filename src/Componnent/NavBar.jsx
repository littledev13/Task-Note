import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar" className="flex flex-row justify-between ">
      <Link to="/" className=" hover:text-slate-400 group">
        <h1 className="font-Rubik text-4xl">Task Note</h1>
      </Link>
      <ul className="flex flex-row gap-4 items-center">
        <li className="hover:scale-125 hover:-translate-x-1 transition-transform duration-200">
          <Link
            to="/"
            className="hover:text-slate-400 transition-colors duration-200"
          >
            Sign UP
          </Link>
        </li>
        <li className="hover:scale-125 hover:-translate-x-1 transition-transform duration-200">
          <Link
            to="matkul"
            className="hover:text-slate-400 transition-colors duration-200"
          >
            Sign IN
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
