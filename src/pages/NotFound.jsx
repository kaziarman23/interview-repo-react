import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page not found.</h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
