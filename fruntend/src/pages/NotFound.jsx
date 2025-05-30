import React from "react";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20 mb-6 text-purple-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2" stroke="currentColor" fill="none" />
      <path d="M9 10h6M9 14h2" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      <circle cx="18" cy="9" r="1" fill="currentColor" />
    </svg>
    <h1 className="text-5xl font-extrabold mb-2 text-purple-400">404</h1>
    <p className="text-xl mb-4">Sorry, the page you are looking for was not found.</p>
    <p className="text-md text-gray-400 mb-8 text-center max-w-md">
      This section of the Electronic Health Record System is unavailable or does not exist.
      <br />
      Please check the URL or return to the dashboard.
    </p>
    <a
      href="/home"
      className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
    >
      Go to Dashboard
    </a>
  </div>
);

export default NotFound;