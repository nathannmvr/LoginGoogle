import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        <a href="localhost:8000">
          LOGIN
        </a>
      </button>
    </div>
  );
}