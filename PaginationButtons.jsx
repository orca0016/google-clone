"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function PaginationButtons() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;

  return (
    <div className=" flex px-10 pb-4  justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-row justify-center  cursor-pointer items-center hover:underline text-blue-700">
            <FaChevronLeft  />
            <span>previous Page</span>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-row  justify-center cursor-pointer items-center hover:underline">
            <span>Next Page</span>
            <FaChevronRight />
          </div>
        </Link>
      )}
    </div>
  );
}
