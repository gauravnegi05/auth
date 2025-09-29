import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/me")
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        {user ? (
          <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Welcome, {user.name}
            </h2>
            <p className="text-gray-600 mb-6"> Email: {user.email}</p>
            <button
              onClick={logout}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500 text-lg">Loading your profile...</p>
        )}
      </div>
    </div>
  );
}
