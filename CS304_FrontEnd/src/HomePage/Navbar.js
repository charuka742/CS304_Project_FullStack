import React, { useState } from "react";
// import img from "../Assets/google.png"
import { FcFilmReel } from "react-icons/fc";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1b2d36] max-w-10xl dark:bg-cyan-600">
      <div className="max-w-10xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
             to="/">
              <div className="flex justify-between">
                {/* <img className="h-8 w-auto" src={img}/> */}
                <FcFilmReel className="flex justify-between" size={30} />
                <p className="ml-3 font-bold text-white font-sans text-3xl ">
                  ZEROZINEMA
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex text-black items-baseline">
              <Link

                to="/"
                className="px-3 mt-3  py-2 rounded-md text-md font-medium text-neutral-700 dark:text-black hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Home
              </Link>
              <Link

                to="/movies"
                className="ml-4 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Movies
              </Link>
              <Link

                to="/theatres"
                className="ml-4 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Theatres
              </Link>

              <Link

                to="/promotions"
                className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Promotions
              </Link>
              <Link

                to="/feedbackList"
                className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Feedback
              </Link>

              <Link

                to="/contact"
                className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Contact
              </Link>
              <Link

                to="/about"
                className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                About
              </Link>
              <Link
                to="/login"
                className="font-sans bg-transparent hover:bg-blue-900 text-white font-bold  hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-2xl"
              >
                Signin
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMenu}>
              <HiMenu
                className={`block h-6 w-6 fill-current text-neutral-600 dark:text-neutral-200 ${
                  isMenuOpen ? "hidden" : "block"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={"menu " + (isMenuOpen ? "block" : "hidden") + " md:hidden"}
      >
        <div className="px-2 text-xl text-black pt-2 pb-3 sm:px-3">
          <Link

            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Home
          </Link>
          <Link

            to="/movies"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Movies
          </Link>
          <Link

            to="/theatres"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Theatres
          </Link>
          <Link

            to="/promotions"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Promotions
          </Link>
          <Link

            to="/feedbackList"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Feedback
          </Link>

          {/* <Link to="" className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out">Feedback</Link> */}

          <Link

            to="/about"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            About
          </Link>
          <Link

            to="/contact"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Contact
          </Link>
          {/* <Link

            to="/login"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Signin
          </Link> */}
          <Link
            to="/login"
            className="mt-1 block px-3 py-2 rounded-lg text-base dark:text-neutral-200  dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-outfont-sans bg-transparent hover:bg-blue-900 text-gray-700 font-bold uppercase hover:text-white border border-gray-900 hover:border-transparent"
          >
            Signin
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
