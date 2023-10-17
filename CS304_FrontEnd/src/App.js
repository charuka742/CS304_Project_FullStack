import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Components/MainComponents/Footer";
import Navbar from "./HomePage/Navbar";
import Home from "./HomePage/Home";
import Main from "./HomePage/Main";

import SignUp from "./User/SignUp";
import Login from "./User/Login";

import Card from "../src/Components/MainComponents/Card";

import AboutUsPage from "./Components/MainComponents/AboutUs";
import ContactUs from "./Components/MainComponents/Contact";
import SingleMovie from "./Components/Movie/FilmDetails";
import Promotions from "./Components/Promotions/Promotions";
import FeedbackList from "./Components/Feedback/FeedbackList";
import AddFeedback from "./Components/Feedback/AddFeedback";

import AdminMovieDetails from "./AdminDashboard/Movie_Admin/AdminMovieDetails";
import AdminTheatreDetails from "./AdminDashboard/Theatre_Admin/AdminTheatreDetails";
import DashboardAdmin from "./AdminDashboard/dashboardAdmin";
import AddMovieAdmin from "./AdminDashboard/Movie_Admin/AddMovieAdmin";
import AddTheatreAdmin from "./AdminDashboard/Theatre_Admin/AddTheatreAdmin";
import AdminUserDetails from "./User/AdminUserDetails";

import SeatApp from "./Booking/SeatApp";
import TheatreDetails from "../src/Components/Theatre/TheatreDetails";
import MovieFilter from "./Components/Movie/MovieFilter";
import TheatreDetails01 from "../src/Components/Theatre/TheatreDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Main />
              <Footer />
            </>
          }
        ></Route>

        {/* example */}
        <Route
          path="/signUp"
          element={
            <>
              <Navbar />
              <SignUp />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUsPage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/theatres"
          element={
            <>
              <Navbar />
              <TheatreDetails01 />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <>
              <Navbar />
              <Card />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/movies/:theatreId"
          element={
            <>
              <Navbar />
              <Card />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/singleMovie/:id"
          element={
            <>
              <Navbar />
              <SingleMovie />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/seatApp"
          element={
            <>
              <Navbar />
              <SeatApp />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/promotions"
          element={
            <>
              <Navbar />
              <Promotions />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/feedbackList"
          element={
            <>
              <Navbar />
              <FeedbackList />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/addFeedback"
          element={
            <>
              <Navbar />
              <AddFeedback />
              <Footer />
            </>
          }
        ></Route>

        {/* Admin Dashboard */}

        {/* <Route
          path="/dashboard"
          element={
            <>
              <AdminDashboard />
            </>
          }
        ></Route> */}

        <Route
          path="/dashboard"
          element={
            <>
              <DashboardAdmin />
            </>
          }
        ></Route>

        <Route
          path="/adminMovieDetails"
          element={
            <>
              <AdminMovieDetails />
            </>
          }
        ></Route>

        <Route
          path="/adminTheatreDetails"
          element={
            <>
              <AdminTheatreDetails />
            </>
          }
        ></Route>
        <Route
          path="/UserDetails"
          element={
            <>
              <AdminUserDetails />
            </>
          }
        ></Route>

        <Route
          path="/addMovie"
          element={
            <>
              <AddMovieAdmin />
            </>
          }
        ></Route>
        <Route path="/update/:id" Component={AddMovieAdmin}></Route>
        <Route
          path="/addTheatre"
          element={
            <>
              <AddTheatreAdmin />
            </>
          }
        ></Route>

        <Route
          path="/theatreDetails"
          element={
            <>
              <TheatreDetails />
            </>
          }
        ></Route>
        <Route
          path="/movieFilter"
          element={
            <>
              <MovieFilter />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
