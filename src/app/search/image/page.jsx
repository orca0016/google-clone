import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import React from "react";

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY_GOOGLE}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) {
    throw new Error("something went wrong!");
  }
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col  justify-center items-center pt-10 ">
        <h1 className="text-3xl mb-4 ">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to home page.{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <ImageSearchResults results={data} />}</>;
}
