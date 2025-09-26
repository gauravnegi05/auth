import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-center px-4">
      
      <h1 className="text-white text-4xl font-bold pb-7 " style={{ textShadow: "0 0 3px #fff, 0 0 1px #fff, 0 0 1px #fff" }}>
        Welcome to Auth System
      </h1>

      
      <p className="text-lg md:text-xl mb-8 max-w-md text-black font-bold">
        A secure and simple authentication system built with Node.js, JWT, and React.
      </p>

      
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
