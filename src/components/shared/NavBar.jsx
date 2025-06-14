import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlHandbag } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow"
          >
            <div className=" flex flex-col space-y-6">
              {navLinks.map((item) => (
                <Link
                  className="font-semibold hover:text-primary duration-300"
                  href={item.path}
                  key={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </ul>
        </div>
        <Link href="/">
          <Image src="assets/logo.svg" width={100} height={50} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="flex items-center space-x-6">
            {navLinks.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-3 items-center">
          <SlHandbag className="text-xl" />
          <CiSearch className="text-2xl " />
          <a className="secondary">Appointment</a>
        </div>
      </div>
    </div>
  );
};

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },

  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
];

export default NavBar;
