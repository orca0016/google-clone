"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams()
  const   searchTerm  = searchParams.get("searchTerm")
  const selectTab = (tab) => {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  };
  return (
    <div className="w-full flex space-x-2 select-none border-b justify-center lg:justify-start text-gray-700 text-sm lg:pl-52">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center  space-x-1 border-b-4 border-transparent active:text-blue-500  cursor-pointer pb-3 px-2 ${
          pathName === "/search/web" && "!text-blue-600  !border-blue-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center  space-x-1 border-b-4 border-transparent active:text-blue-500  cursor-pointer pb-3 px-2 ${
          pathName === "/search/image" && "!text-blue-600  !border-blue-600"
        }`}
      >
        <AiOutlineCamera  className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
