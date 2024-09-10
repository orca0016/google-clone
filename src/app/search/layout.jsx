import SearchHeader from "@/components/SearchHeader";



export default function SearchLayout({ children }) {
  return (
      <div
        className={`antialiased`}
      >
        <SearchHeader/>
        {children}
      </div>
  );
}
