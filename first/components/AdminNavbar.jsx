import React from "react";
import  Link  from "next/link";
const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4 mt-2">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/admin-dashboard" className="text-white">
          Admin Panel
        </a>
        <div>
          <Link href="/admin-dashboard" className="text-white">
            Admin-Home
          </Link>
          <Link href="/admin-login" className="text-white ml-4">
            Admin-Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
