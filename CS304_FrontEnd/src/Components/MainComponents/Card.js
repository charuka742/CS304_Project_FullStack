import {BiDetail } from "react-icons/bi";
import {FaCertificate} from "react-icons/fa";
import { useState, useEffect } from "react";
import MovieService from "../../Service/MovieService";
import img from "../../Assets/img01 (10).jpg"
import MovieServiceInstance from "../../Service/MovieService";
import { Link } from "react-router-dom";
// import {RiVideoLine} from 'react-icons/ri'

const Main = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // const [director, setDirector] = useState('');
  // const [res, setRes] = useState('');


  useEffect(() => {
    getAllMvs()
  }, []);

  const getAllMvs = () => {
    MovieService.getAllMvs()
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    MovieServiceInstance.searchMovieByTitle()
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // const handleInputChangeDirector = (event) => {
  //   setDirector(event.target.value);
  // };

  // const handleSubmit2 = (event) => {
  //   event.preventDefault();

  //   MovieServiceInstance.searchMovieByDirector()
  //     .then(response => {
  //       setRes(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };



  return (
    <section className="main container section">
      <div className="mt-4 pt-4 ml-5 pl-5 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies by title"
          value={query}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-lg"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg ml-2">Search</button>
      </form>
      <div className="mt-4">
        {results.map(movie => (
          <div key={movie.id} className="border border-gray-300 p-2 rounded-lg mb-2">
            <h2 className="font-semibold">{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Cast: {movie.cast}</p>
          </div>
        ))}
      </div>
    </div>

    {/* <div>
      <form onSubmit={handleSubmit2}>
        <input
          type="text"
          placeholder="Search movies by Director"
          value={director}
          onChange={handleInputChangeDirector}
          className="border border-gray-300 p-2 rounded-lg"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg ml-2">Search</button>
      </form>
      <div className="mt-4">
        {res.map(movie => (
          <div key={movie.id} className="border border-gray-300 p-2 rounded-lg mb-2">
            <h2 className="font-semibold">{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Cast: {movie.cast}</p>
          </div>
        ))}
      </div>
    </div>  */}

      <div className="">
        <h3 className="font-bold text-3xl text-black-600 mb-4 pb-5 ">Most Popular Movies</h3>
      </div>
      <div className="secContent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        {movie.map(({ movieId, title, language, director, rating, releaseDate, description }) => {
          
          return (
            <div key={movieId} className="singleDestination rounded-lg shadow-lg ml-8 mr-4 overflow-hidden" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}} >
              <div className="imageDiv">
                <img src={img} alt={title} />
              </div>
              <div className="cardInfo p-6 md:p-8 lg:p-12 xl:p-16">
                <h4 className="Title text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-2">{title}</h4>
                <div className="content flex items-center mb-4">
                  <FaCertificate className="icon mr-2" />
                  <span className="name text-gray-600">{language}</span>
                </div>
                <div className="content flex items-center mb-4">
                  <span className="name text-gray-600">{"By: "+ director}</span>
                </div>
                <div className="Year flex items-center">
                  <div className="rating bg-[#0c4a6e] text-white rounded-3xl py px-2 mr-4">
                    <span className="ratingAA text-lg md:text-lg lg:text-lg xl:text-lg font-medium">{rating}</span>
                    <small className="text-xs md:text-xs lg:text-xs xl:text-xs font-medium">+2</small>
                  </div>
                  <div className="releaseDate">
                    <h5 className="text-gray-600 text-xs md:text-xs lg:text-xs xl:text-xs font-medium">{releaseDate}</h5>
                  </div>
                </div>

                <div className="desc text-gray-600 text-xs md:text-xs lg:text-xs xl:text-xs font-medium mt-4">
                  <p>{description}</p>
                </div>

                <button className=" items-center mt-6 bg-[#9333ea] hover:bg-[#64748b] text-white rounded-3xl py-2 px-4 transition duration-300 ease-in-out">
                  <Link to={`/singleMovie/:id`} className="flex-col" >Details<p><BiDetail className="icon ml-2" /></p> </Link>
                </button>

                
              </div>
            </div>
          );
        })}
        
      </div>
    </section>
  );
};

export default Main;
