import React from "react";
import Sidebar from "../AdminDashboard/Dashboard/Sidebar";
// import TwoColumnLayout from "./TwoColumnLayout";
import UserTable from "./UserDetails";

function AdminUserDetails() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <UserTable />
      
    </div>
  );
}

export default AdminUserDetails;