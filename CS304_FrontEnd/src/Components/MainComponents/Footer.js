import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1b2d36] text-white">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Company
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="/company"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Resources
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="/documentations"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tutorials"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a
                      href="support"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="/polizies"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              Subscribe to our newsletter
            </h4>
            <p className="mt-4 text-base leading-6 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              consectetur suscipit sequi doloribus doloremque distinctio.
            </p>
            <form className="mt-4 sm:flex">
              <label htmlFor="email" />

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white flex-1 block w-full sm:text-sm sm:leading-5"
              />
              <button
                type="submit"
                className="mt-3 w-full sm:mt-0 sm:ml-3 py-3 px-4 rounded-md shadow-sm font-medium text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transition duration-150 ease-in-out"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="/facebook" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="/twitter" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="/instagram" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="/youtube" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base leading-6 text-gray-400 xl:text-center">
            &copy; 2023 ZeroZinema Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
