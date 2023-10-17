import React from 'react';
import { FaFilm, FaTheaterMasks } from 'react-icons/fa';

const SummaryPage = ({ movieCount, theatreCount }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <FaFilm className="text-3xl text-gray-800" />
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800">Movies</h2>
            <p className="text-4xl font-bold text-gray-800">{movieCount}</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <FaTheaterMasks className="text-3xl text-gray-800" />
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800">Theatres</h2>
            <p className="text-4xl font-bold text-gray-800">{theatreCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
