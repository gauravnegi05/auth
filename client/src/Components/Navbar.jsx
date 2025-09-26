import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold hover:text-yellow-400 transition text-white" style={{ textShadow: "0 0 3px #fff, 0 0 1px #fff, 0 0 1px #fff" }}>
          Auth
        </Link>

        
        <div className="space-x-10 mr-10 text-lg">
          <Link to="/login" className="hover:text-yellow-400 transition">
            Login
          </Link>
          <Link to="/register" className="hover:text-yellow-400 transition">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
