import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const TeacherLayout = () => {
  const { user, logout } = useAuth();
  if (!user || user.role !== "teacher") {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="min-h-screen ">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Teacher</h1>
        <NavLink
          to="/"
          onClick={logout}
          className="bg-blue-600 text-white p-2 rounded-lg shadow-lg flex items-center"
        >
          Logout
        </NavLink>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherLayout;
