import React, { useEffect, useState } from "react";
import UserServiceInstance from "../Service/UserService";
import { Link, useParams } from "react-router-dom";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dob: "",
    mobileNo: "",
    city: "",
    password: "",
    role: "",
  });

  const { userId } = useParams();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      UserServiceInstance.addUser(userData)
        .then((response) => {
          console.log(response);
          // Navigate("/userDetails")
        })
        .catch((error) => {
          console.log(error);
        });
      // success message or redirect
    } catch (error) {
      console.error(error);
      // error message or display errors to user
    }
    console.log(userData);
  };

  useEffect(() => {
    if (userId) {
      UserServiceInstance.getUserById(userId)
        .then((response) => {
          console.log(response);
          setUserData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userId]);

  return (
    <section className="mt-20 mb-20 px-60 flex justify-center items-center h-screen shadow-5xl rounded-xl ">
      <div className="w-full max-w-md justify-center">
        <form
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-center uppercase">
            Register
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={userData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="city"
            >
              City:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              placeholder="Enter your city"
              name="city"
              value={userData.city}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="mobileNo"
            >
              Mobile No:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNo"
              type="text"
              placeholder="Enter your mobile No"
              name="mobileNo"
              value={userData.mobileNo}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
              Date of birth:
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              placeholder="Select the date:"
              value={userData.dob}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email Address:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="role"
            >
              Role:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              name="role"
              value={userData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select a role</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
              <option value="GUEST">Guest</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={(event) =>
                setUserData({ ...userData, password: event.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="rememberMe"
            >
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                value={userData.role}
                onChange={handleChange}
              />
              Remember Me
            </label>
          </div>

          <div className="flex">
            <div className="flex items-center justify-between">
              <button
                onChange={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
            <div className="register ">
              <p className="ml-6 mt-2 ">
                Already have an account?
                <Link
                  to="/login"
                  className="hover:text-blue-700 font-bold underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
