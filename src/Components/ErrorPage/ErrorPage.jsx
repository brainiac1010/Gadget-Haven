import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ errorCode = 404, errorMessage = "Page Not Found" }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
        <div className="text-9xl font-bold text-indigo-600 mb-4">
          {errorCode}
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! {errorMessage}
        </h1>
        <p className="text-gray-600 mb-6">
          {errorCode === 404 
            ? "The page you're looking for doesn't exist or has been moved."
            : "Something went wrong. Please try again later."}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Need help? <a href="/contact" className="text-indigo-600 hover:underline">Contact support</a></p>
      </div>
    </div>
  );
};

export default ErrorPage;