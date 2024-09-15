import Parser from "html-react-parser";
import Link from "next/link";
import React from "react";
import PaginationButtons from "../../PaginationButtons";
export default function WebSearchResults({ results }) {
  console.log(results);

  return (
    <div className="w-full mx-auto  px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="mb-8  max-w-xl">
          <div className="group flex flex-col ">
            <Link className="text-sm truncate " href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline text-xl truncate font-medium text-blue-800  decoration-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet || '')}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
