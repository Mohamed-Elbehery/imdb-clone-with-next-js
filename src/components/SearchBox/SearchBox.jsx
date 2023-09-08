"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    if (mounted) router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center mt-6 sm:flex-row flex-col gap-y-4 sm:px-4"
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Enter Movie Name..."
        className="w-[85%] h-14 px-4 rounded-lg placeholder-gray-500 outline-none bg-gray-100 dark:bg-gray-700 transition duration-300 text-gray-400"
      />
      <button
        disabled={!search}
        className={`${
          !search
            ? "text-gray-500"
            : "py-2 px-4 border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-700 transition duration-300 rounded-md text-amber-400 focus:bg-amber-600 focus:border-amber-600 disabled:text-gray-400"
        }`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
