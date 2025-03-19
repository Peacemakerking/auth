// src/pages/Home.tsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Secure Authentication with Firebase
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A modern React application with Firebase Authentication, TypeScript,
          and Tailwind CSS
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-indigo-100 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Secure Authentication
          </h2>
          <p className="text-gray-600 mb-6">
            Firebase Authentication provides secure, easy-to-use login features
            with email/password authentication.
          </p>
          <Link
            to="/register"
            className="mt-auto bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-indigo-100 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Modern Tech Stack
          </h2>
          <p className="text-gray-600 mb-6">
            Built with React, TypeScript for type safety, and Tailwind CSS for
            beautiful, responsive UI components.
          </p>
          <Link
            to="/login"
            className="mt-auto bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>

      <div className="mt-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <span className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-medium text-gray-800">
                User Authentication
              </h3>
            </div>
            <p className="text-gray-600 ml-11">
              Secure email and password authentication powered by Firebase.
            </p>
          </div>

          <div className="p-4">
            <div className="flex items-center mb-4">
              <span className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-medium text-gray-800">TypeScript</h3>
            </div>
            <p className="text-gray-600 ml-11">
              Type-safe code providing better development experience and fewer
              bugs.
            </p>
          </div>

          <div className="p-4">
            <div className="flex items-center mb-4">
              <span className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-medium text-gray-800">
                Tailwind CSS
              </h3>
            </div>
            <p className="text-gray-600 ml-11">
              Beautiful, responsive UI with utility-first CSS framework.
            </p>
          </div>

          <div className="p-4">
            <div className="flex items-center mb-4">
              <span className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-medium text-gray-800">
                Protected Routes
              </h3>
            </div>
            <p className="text-gray-600 ml-11">
              Secure routes that require authentication before access.
            </p>
          </div>

          <div className="p-4">
            <div className="flex items-center mb-4">
              <span className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-medium text-gray-800">
                Profile Management
              </h3>
            </div>
            <p className="text-gray-600 ml-11">
              Update profile information and change passwords securely.
            </p>
          </div>

          <div className="p-4">
            <div className="flex items-center mb-4">
              <span className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-medium text-gray-800">
                Responsive Design
              </h3>
            </div>
            <p className="text-gray-600 ml-11">
              Mobile-friendly interface that works on all device sizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
