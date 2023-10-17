import React from "react";
import Sidebar from "../AdminDashboard/Dashboard/Sidebar";
//import TwoColumnLayout from "./TwoColumnLayout";
import SummaryPage from "./Dashboard/SummaryPage";

function AdminDashboard() {
  const movieCount =100;
  const theatreCount =60;

  return (
    <div className="flex flex-row">
      <Sidebar />
      <SummaryPage movieCount={movieCount} theatreCount={theatreCount}/>
      {/* <p>More content in the dashboard when display dashboard default page, it may be total movie, theatres, and else else</p> */}


    </div>
  );
}

export default AdminDashboard;