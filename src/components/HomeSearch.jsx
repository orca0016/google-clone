"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading , setRandomSearchLoading] = useState(false)
  const router = useRouter();
  const handelSubmit = (e) => {
    e.preventDefault(); 
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
};
const randomSearch = async () => {
    setRandomSearchLoading(true)
    const response = await fetch("https://random-word-api.herokuapp.com/word").then((res)=>res.json()).then((data)=>data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false)
    
};
  return (
    <>
      <form
        onSubmit={handelSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl  lg:max-w-2xl"
      >
        <AiOutlineSearch
          onClick={handelSubmit}
          className="text-xl text-gray-500 mr-3 "
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="flex flex-col  space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button className="btn" onClick={handelSubmit}>
          Google Search
        </button>
        <button className="btn disabled:opacity-80" disabled={randomSearchLoading  } onClick={randomSearch}>
          {randomSearchLoading ? (
            <img src="spinner.svg" alt="loading..." className="h-6 text-center  mx-auto" />
          ):(
            <span>I Am Filling Lucky</span>
          )}
          
        </button>
      </div>
    </>
  );
}
