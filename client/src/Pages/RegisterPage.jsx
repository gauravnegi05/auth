import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="bg-yellow-300 shadow-md rounded-lg p-8 w-full max-w-md border-2 border-black">
        <h2 className="text-white text-4xl text-center font-bold pb-7" style={{ textShadow: "0 0 3px #fff, 0 0 1px #fff, 0 0 1px #fff" }}>
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

            
            
          <div>
            <label className="block text-gray-700 mb-1 font-bold">Name</label>
            <input
              type="text"
                name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          
          
          <div>
            <label className="block text-gray-700 mb-1 font-bold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          

          <div>
            <label className="block text-gray-700 mb-1 font-bold">Password</label>
            <input
              type="password"
                name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-black mt-4 font-bold">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
