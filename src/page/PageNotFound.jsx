import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 text-gray-800 bg-gray-100">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <p className="text-gray-500">There are no live links or repository pages available for this project.</p>
      </div>
    </div>
  );
}
