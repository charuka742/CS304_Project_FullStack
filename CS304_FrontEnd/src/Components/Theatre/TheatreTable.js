import React, { useEffect, useState } from "react";
import TheatreServiceInstance from "../../Service/TheatreService";
import { Link } from "react-router-dom";

const TheatreTable = () => {
  const [theatre, setTheatre] = useState([]);

  useEffect(() => {
    getTheatres();
  }, []);

  const getTheatres = () => {
    TheatreServiceInstance.getAllTheatres()
      .then((response) => {
        setTheatre(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTheatre = (theatreId) => {
    TheatreServiceInstance.deleteTheatre(theatreId)
      .then((response) => {
        window.alert("Successfully Deleted " + theatreId);
      })
      .then(() => {
        getTheatres();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center text-2xl font-bold text-gray-800 uppercase">
        <h1 className="p-4"> Theatre Data List: ADMIN</h1>
      </div>
      <div className="p-4 flex">
        <Link
          to="/addTheatre"
          className="font-sans bg-transparent hover:bg-blue-500 text-blue-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
        >
          Add Theatre
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      TheatreID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Theatre Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact No
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Manager Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Manager No
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Standard Seats
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Premium Seats
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      VIP Seats
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total Seats
                    </th>

                    {/* <th
                      scope="col"
                      className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <p>
                        RunTime <p className="lowercase">(min)</p>
                      </p>
                    </th> */}

                    <th scope="col" className="relative px-3 py-2">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-3 py-2">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {theatre.map((theatre) => (
                    <tr key={theatre.TheatreId}>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium  text-gray-900">
                              {theatre.theatreId}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.theatreName}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.city}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.teleNo}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.email}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.managerName}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.managerNo}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.standardSeats}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.premiumSeats}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.vipSeats}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {theatre.noOfTotalSeats}
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap text-right text-sm font-medium">
                        <div className="p-4 flex">
                          {/* <a
                            href={`/updateTheatre/${theatre.theatreId}`}
                            className="font-sans bg-transparent hover:bg-gray-500 text-gray-700 font-bold uppercase hover:text-white py-2 px-2 border border-gray-500 hover:border-transparent rounded"
                          >
                            Edit
                          </a> */}

                          <Link
                            to={`/updateTheatre/${theatre.theatreId}`}
                            className="font-sans bg-transparent hover:bg-gray-500 text-gray-700 font-bold uppercase hover:text-white py-2 px-2 border border-gray-500 hover:border-transparent rounded"
                          >
                            Edit
                          </Link>
                        </div>
                      </td>

                      <td className="px-3 py-2 whitespace-nowrap text-right text-sm font-medium">
                        <div className="p-4 flex">
                          <button
                            onClick={() => deleteTheatre(theatre.theatreId)}
                            className="font-sans bg-transparent hover:bg-red-500 text-red-700 font-bold uppercase hover:text-white py-2 px-2 border border-gray-500 hover:border-transparent rounded"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheatreTable;
