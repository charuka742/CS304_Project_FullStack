import React from "react";

import video from "../../Assets/Vid0 (3).mp4";
import img from "../../Assets/download.jpeg";
import img2 from "../../Assets/ironman.jpeg";
import img3 from "../../Assets/images (1).jpeg";
import img4 from "../../Assets/images.jpeg";

import img5 from "../../Assets/download (1).jpeg";
import img6 from "../../Assets/download (2).jpeg";
import img7 from "../../Assets/download (3).jpeg";
import img8 from "../../Assets/download (4).jpeg";
import { Link } from "react-router-dom";

// import { RiBook2Line } from "react-icons/ri";

const FilmDetails = () => {
  // const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   getAllMvs();
  // }, []);

  // const getAllMvs = () => {
  //   MovieServiceInstance.getAllMvs()
  //     .then((response) => {
  //       setMovie(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="bg-gray-900 text-white pt-10">
      {/* Banner */}
      {/* {movie.map((movie) => ( */}
      <div>
        <div className="relative p-5">
          <video
            src={video}
            controls={true}
            autoPlay
            loop
            muted
            class=" w-full h-relative object-cover object-center"
          ></video>

          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Main Content */}
        <div className="container py-10 mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Film Details */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-4">
                The Avengers End Game{" "}
              </h2>

              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-gray-800 py-1 px-2 rounded-lg">
                  2h 30min
                </span>
                <span className="bg-gray-800 py-1 px-2 rounded-lg">
                  Genre: Action, Thriller
                </span>
                <span className="bg-gray-800 py-1 px-2 rounded-lg">
                  Category: PG-13
                </span>
                <span className="bg-gray-800 justify-end py-1 px-2 rounded-lg">
                  <button  className="font-sans bg-transparent hover:bg-red-500 text-red-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                    {/* <RiBook2Line size={20} className="" /> */}
                    <Link to={`/seatApp`} ><p>BookNow</p></Link>
                  </button>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Description</h3>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                euismod congue enim, ut bibendum massa hendrerit quis. In quis
                sodales lacus. Nam semper, dolor nec vestibulum pulvinar, odio
                mauris pharetra orci, in feugiat orci ex nec quam.
              </p>
              <h3 className="text-2xl font-bold mb-2">Cast & Crew</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <img
                  src={img}
                  alt="Actor 1"
                  className="w-24 h-24 object-cover object-center rounded-full"
                />
                <img
                  src={img2}
                  alt="Actor 2"
                  className="w-24 h-24 object-cover object-center rounded-full"
                />
                <img
                  src={img3}
                  alt="Actor 3"
                  className="w-24 h-24 object-cover object-center rounded-full"
                />
                <img
                  src={img4}
                  alt="Actor 4"
                  className="w-24 h-24 object-cover object-center rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Director</h3>
              <p className="mb-8">John Doe</p>
            </div>
            {/* Film Images */}
            <div className="grid grid-cols-2 gap-4">
              {/* <div className="relative">
              <img
                src="https://picsum.photos/500/750"
                alt="Film Image 1"
                className="w-full h-0 pt-[150%] object-cover object-center"
              />
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/500/750"
                alt="Film Image 2"
                className="w-full h-0 pt-[150%] object-cover object-center"
              />
            </div> */}
            </div>
            {/* Similar Films */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Similar Films</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <img
                    src={img5}
                    alt="Similar Film 1"
                    className="w-full h-0 pt-[150%] object-cover object-center mb-2"
                  />
                  <h4 className="text-lg font-bold">Similar Film 1</h4>
                  <p className="text-sm text-gray-400">Category: PG-13</p>
                </div>
                <div>
                  <img
                    src={img8}
                    alt="Similar Film 2"
                    className="w-full h-0 pt-[150%] object-cover object-center mb-2"
                  />
                  <h4 className="text-lg font-bold">Similar Film 2</h4>
                  <p className="text-sm text-gray-400">Category: PG-13</p>
                </div>
                <div>
                  <img
                    src={img6}
                    alt="Similar Film 3"
                    className="w-full h-0 pt-[150%] object-cover object-center mb-2"
                  />
                  <h4 className="text-lg font-bold">Similar Film 3</h4>
                  <p className="text-sm text-gray-400">Category: PG-13</p>
                </div>
                <div>
                  <img
                    src={img7}
                    alt="Similar Film 4"
                    className="w-full h-0 pt-[150%] object-cover object-center mb-2"
                  />
                  <h4 className="text-lg font-bold">Similar Film 4</h4>
                  <p className="text-sm text-gray-400">Category: PG-13</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};
export default FilmDetails;
