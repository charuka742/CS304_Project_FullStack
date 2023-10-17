import React from "react";
import { Link } from "react-router-dom";

// import img01 from "../Assets/img01 (1).jpeg"
// import img02 from "../Assets/img01 (1).jpg"
// import img03 from "../Assets/img01 (3).jpg"
// import img04 from "../Assets/img01 (3).jpg"
// import img05 from "../Assets/img01 (4).jpg"
// import img06 from "../Assets/img01 (5).jpg"

import img0 from "../../Assets/img01 (22).jpg";
import img1 from "../../Assets/img01 (12).jpg";
import img2 from "../../Assets/img01 (23).jpg";

import { FaCertificate } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { FiStar } from "react-icons/fi";

const Data = [
  {
    id: 1,
    imgSrc: img0,
    theatreName: "Milano",
    city: "Kegalle",
    // rating: "4.9"
  },
  {
    id: 1,
    imgSrc: img1,
    theatreName: "Tarson",
    city: "Kandy",
  },
  {
    id: 1,
    imgSrc: img2,
    theatreName: "KCC",
    city: "Kandy",
  },
  {
    id: 1,
    imgSrc: img0,
    theatreName: "Milano",
    city: "Kegalle",
    // rating: "4.9"
  },
  {
    id: 1,
    imgSrc: img2,
    theatreName: "Tarson",
    city: "Kandy",
  },
  {
    id: 1,
    imgSrc: img0,
    theatreName: "KCC",
    city: "Kandy",
  },
  {
    id: 1,
    imgSrc: img2,
    theatreName: "Milano",
    city: "Kegalle",
    // rating: "4.9"
  },
  {
    id: 1,
    imgSrc: img0,
    theatreName: "Tarson",
    city: "Kandy",
  },
  {
    id: 1,
    imgSrc: img1,
    theatreName: "KCC",
    city: "Kandy",
  },
  {
    id: 1,
    imgSrc: img0,
    theatreName: "Milano",
    city: "Kegalle",
    // rating: "4.9"
  }
];

const TheatreDetails = () => {
  return (
    <section className="">
      <div className="">
        <h1 className="font-bold text-3xl mt-6">Top Rated Theatres</h1>
      </div>

      <div className="grid m-2 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-fit">
        {Data.map(
          ({ id, imgSrc, FilmName, Category, rating, Year, Description }) => {
            return (
              <div key={id} className="shadow-md rounded-md">
                <div className="">
                  <img
                    src={imgSrc}
                    alt={FilmName}
                    className="w-full h-full object-cover rounded-t-md"
                  />
                </div>
                <div className="cardInfo p-4 ">
                  <h4 className="FilmName text-xl font-bold mb-2">
                    {FilmName}
                  </h4>
                  <span className="flex items-center text-gray-500 mb-2">
                    <FaCertificate className="icon mr-2" />
                    <span className="name">{Category}</span>
                  </span>
                  <div className="Year flex items-center text-gray-500 mb-2">
                    <div className="rating flex items-center mr-4">
                      <span className="text-yellow-500 mr-1">{rating}</span>
                      <FiStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                    <span className="year">{Year}</span>
                  </div>
                  <p className="description text-gray-500 mb-4">
                    {Description}
                  </p>
                  <div className="buttonDiv flex justify-between">
                    <button className="btn btn-secondary flex items-center">
                      <BiDetail className="icon" />
                      <span className="text-sm">
                        <Link to={`/movies/:theatreId`}> Details</Link>{" "}
                      </span>
                    </button>

                    {/* <button className="btn btn-primary">Book Now</button> */}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default TheatreDetails;
