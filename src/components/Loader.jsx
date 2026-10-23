import React from 'react'
import { Link } from "react-router-dom";

function Loader() {
  return (
    <div className="flex justify-center py-20">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-200 border-t-red-600" />
    </div>
  );
}

export default Loader