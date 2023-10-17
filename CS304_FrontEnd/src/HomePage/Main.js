import React from "react";

import img01 from "../Assets/img01 (11).jpg"
import img02 from "../Assets/img01 (10).jpg"
import img03 from "../Assets/img01 (22).jpg"
import img04 from "../Assets/img01 (23).jpg"
import img05 from "../Assets/img01 (4).jpg"
import img06 from "../Assets/img01 (12).jpg"

import { FaCertificate } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    imgSrc: img01,
    FilmName: "Avengers",
    Category: "Action",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 2,
    imgSrc: img02,
    FilmName: "After Earth",
    Category: "Horror",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 3,
    imgSrc: img03,
    FilmName: "Dead Pool",
    Category: "Comedy",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 1,
    imgSrc: img04,
    FilmName: "Avengers",
    Category: "Action",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 2,
    imgSrc: img05,
    FilmName: "After Earth",
    Category: "Horror",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 3,
    imgSrc: img06,
    FilmName: "Dead Pool",
    Category: "Comedy",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 1,
    imgSrc: img01,
    FilmName: "Avengers",
    Category: "Action",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 2,
    imgSrc: img05,
    FilmName: "After Earth",
    Category: "Horror",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 3,
    imgSrc: img04,
    FilmName: "Dead Pool",
    Category: "Comedy",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 1,
    imgSrc: img03,
    FilmName: "Avengers",
    Category: "Action",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 2,
    imgSrc: img02,
    FilmName: "After Earth",
    Category: "Horror",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
  {
    id: 3,
    imgSrc: img02,
    FilmName: "Dead Pool",
    Category: "Comedy",
    rating: "4.9",
    Year: "2022",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
  },
];




const Main = () => {
  return (
    <section className="">
      <div className="">
        <h1 className="font-bold text-3xl mt-6">Most Popular Movies</h1>
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
                  {/* <p className="description text-gray-500 mb-4">
                    {Description}
                  </p> */}
                  <div className="buttonDiv flex justify-between">
                    <button className="btn btn-secondary flex items-center">
                      <BiDetail className="icon" />
                      <span className="text-sm">
                        <Link to={`/singleMovie/:id`}> Details </Link>
                        
                        </span>
                    </button>
                    <button className="btn btn-primary">
                    <Link to={`/singleMovie/:id`}> Book Now </Link>
                      </button>
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

export default Main;
