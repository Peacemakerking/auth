import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Firebase Auth
        </Link>
        <div>
          {user ? (
            <>
              <span className="text-gray-600 mr-4">Welcome, {user.email}</span>
              <button
                onClick={signOut}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-900 mr-4"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-700 hover:text-gray-900"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
