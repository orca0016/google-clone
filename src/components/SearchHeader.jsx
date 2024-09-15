import Image from "next/image";
import Link from "next/link";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white ">
      <div className="flex w-full p-2 sm:p-6 gap-4 sm:gap-0 flex-col sm:flex-row  items-center justify-between">
        <Link href="/" >
          <Image
            width="120"
            height="40"
            alt="logo  of google"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden sm:inline-flex space-x-2">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="hidden sm:inline-flex bg-blue-500 text-white  px-6 py-2  font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all  ml-2">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions/>
    </header>
  );
}
