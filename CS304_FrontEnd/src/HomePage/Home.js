import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import video from "../../src/Assets/Vid0 (1).mp4"


const Home = () => {
  return (
    <section className="relative">
      <video src={video} muted autoPlay loop type="video/mp4" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="container mx-auto relative z-10 text-white">
        <div className="text-center animate-pulse mt-3">
          <span className="uppercase mt-20 font-bold text-3xl md:text-5xl">With The Love</span>
          <h1 className="relative text-2xl md:text-4xl font-bold mt-4 md:mt-6 " >Experience The Best Theatre You Ever Wanted</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-4 md:gap-6 mt-12 ">
          
          <div className="">
            <label htmlFor="city">City:</label>
            <div className="flex items-center">
              <MdLocationOn className="text-gray-500" size={25} />
              <input
                type="text"
                placeholder="Enter The City:"
                className="pl-4 border border-gray-400 rounded-lg py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="text">Theatre:</label>
            <div className="flex items-center">
              <AiFillHome className="text-gray-500" size={25}/>
              <input
                type="text"
                placeholder="Enter the Theatre:"
                className="pl-4 border border-gray-400 rounded-lg py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="date">Date:</label>
            <div className="flex items-center">
              <BsFillCalendarDateFill className="text-gray-500 mr-2" size={25} />
              <input
                type="date"
                placeholder="Enter The Date:"
                className="pl-4 border border-gray-400 rounded-lg py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* <div className="flex items-center">
            <HiFilter className="text-gray-500" size={25} />
            <span className="ml-2">MORE FILTERS</span>
          </div> */}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="mr-4">
            <FiFacebook className="text-2xl text-gray-500" />
          </div>
          <div>
            <AiOutlineInstagram className="text-2xl text-gray-500" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
