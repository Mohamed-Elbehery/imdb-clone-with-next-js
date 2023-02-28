"use client";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-red-500 font-semibold text-2xl uppercase">
        Something went wrong!
      </h1>
      <button
        className="border border-amber-400 hover:bg-amber-400 hover:text-gray-800 transition duration-300 py-2 px-4 rounded-md mt-4"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
