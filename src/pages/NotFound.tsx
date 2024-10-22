import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <img
        src={logo}
        alt="Ekjal Logo"
        className="w-24 h-24 mb-8"
      />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="text-lg font-semibold bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
