import React from 'react'
import { Link } from "react-router-dom";

function ErrorMessage({ message }) {
  return (
    <div className="mx-auto max-w-md rounded-lg border border-red-300 bg-red-50 p-4 text-center text-red-700">
      {message}
    </div>
  );
}

export default ErrorMessage