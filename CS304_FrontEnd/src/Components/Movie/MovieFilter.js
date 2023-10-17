import React  from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCertificate } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

import MovieServiceInstance from "../../Service/MovieService";


// import img01 from "../../Assets/img01 (1).jpeg";
// import img02 from "../../Assets/img01 (1).jpg";
// import img03 from "../../Assets/img01 (3).jpg";
// import img04 from "../../Assets/img01 (3).jpg";
// import img05 from "../../Assets/img01 (4).jpg";
// import img06 from "../../Assets/img01 (5).jpg";

// const Data = [
//   {
//     id: 1,
//     imgSrc: img01,
//     FilmName: "Avengers",
//     Category: "Action",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 2,
//     imgSrc: img02,
//     FilmName: "After Earth",
//     Category: "Horror",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 3,
//     imgSrc: img03,
//     FilmName: "Dead Pool",
//     Category: "Comedy",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 1,
//     imgSrc: img04,
//     FilmName: "Avengers",
//     Category: "Action",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 2,
//     imgSrc: img05,
//     FilmName: "After Earth",
//     Category: "Horror",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 3,
//     imgSrc: img06,
//     FilmName: "Dead Pool",
//     Category: "Comedy",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 1,
//     imgSrc: img01,
//     FilmName: "Avengers",
//     Category: "Action",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 2,
//     imgSrc: img05,
//     FilmName: "After Earth",
//     Category: "Horror",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 3,
//     imgSrc: img03,
//     FilmName: "Dead Pool",
//     Category: "Comedy",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 1,
//     imgSrc: img01,
//     FilmName: "Avengers",
//     Category: "Action",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 2,
//     imgSrc: img05,
//     FilmName: "After Earth",
//     Category: "Horror",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
//   {
//     id: 3,
//     imgSrc: img03,
//     FilmName: "Dead Pool",
//     Category: "Comedy",
//     rating: "4.9",
//     Year: "2022",
//     Description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio nulla enim molestiae et! Obcaecati libero error deleniti itaque amet unde, sequi nam id necessitatibus explicabo tempore? Rem, obcaecati quod.",
//   },
// ];

const MovieFilter = () => {
const { movieId } = useParams();

const [movie, setMovie] = useState([]);

useEffect(() => {
  getAllMvs();
}, []);

const getAllMvs = () => {
  MovieServiceInstance.getAllMvs()
    .then((response) => {
      setMovie(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

useEffect(() => {
  if (movieId) {
    MovieServiceInstance.getMovieById(movieId)
      .then((response) => {
        console.log(response);
        // setMovieData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}, [movieId]);


  return (
    <div className="grid m-2 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-fit">
      {movie.map(
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
                <h4 className="FilmName text-xl font-bold mb-2">{FilmName}</h4>
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
                <p className="description text-gray-500 mb-4">{Description}</p>
                <div className="buttonDiv flex justify-between">
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                    <Link
                      to={`/updateMovie/${movie.movieId}`}
                      className="font-sans bg-transparent hover:bg-gray-500 text-gray-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
                    >
                      <BiDetail className="h-5 w-5 mr-2" /> Details
                    </Link>
                  </button>

                  <button
                    href=""
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default MovieFilter;
