import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import UserServiceInstance from "../Service/UserService";

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    getAllUsr()
  }, []);



  const getAllUsr=()=>{
    UserServiceInstance.getallUsers()
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } 


  const deleteUser = (userId)=>{
    UserServiceInstance.deleteUser(userId)
  .then((response) => {
    window.alert("Successfully Deleted" + userId);
  })
  .then(() => {
    getAllUsr();
  })
  .catch((error) => {
    console.log(error);
  });
    
  }
  



  return (
    <div>
      <div className="flex justify-center text-2xl font-bold text-gray-800 uppercase">
        <h1 className="p-4">User Details: ADMIN</h1>
      </div>
      {/* <div className="p-4 flex">
        <a
          href="/addMovie"
          className="font-sans bg-transparent hover:bg-blue-500 text-blue-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
        >
          Add Movie
        </a>

        <Link to="/addMovie" className="font-sans bg-transparent hover:bg-blue-500 text-blue-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" > Add Movie</Link>
      </div> */}

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date of Birth
                    </th>
                    
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact No
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Password
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>

                    {/* <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Release Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <p>
                        RunTime <p className="lowercase">(min)</p>
                      </p>
                    </th> */}

                    {/* <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th> */}

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>

                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {userData.map((userData) => (
                    <tr key={userData.userId}>

                      <td className="px-2 py-1 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium  text-gray-900">
                              {userData.userId}
                            </div>
                            {/* <div className="text-sm text-gray-500">{person.email}</div> */}
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {userData.name}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {userData.email}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {userData.dob}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {userData.mobileNo}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {userData.city}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {userData.password}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {userData.role}
                        </div>
                      </td>

                      {/* <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {movie.releaseDate}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {movie.runtime}
                        </div>
                      </td> */}

                      {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="p-4 flex">
                          <a
                            href={`/updateMovie/${movie.movieId}`}
                            className="font-sans bg-transparent hover:bg-gray-500 text-gray-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
                          >
                            Edit
                          </a>

                          <Link to={`/updateMovie/${movie.movieId}`} className="font-sans bg-transparent hover:bg-gray-500 text-gray-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"> Edit</Link>
                        </div>
                      </td> */}

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="p-4 flex">
                          <button 
                          onClick={()=> deleteUser(userData.userId)}
                          className="font-sans bg-transparent hover:bg-red-500 text-red-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
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

export default UserTable;
