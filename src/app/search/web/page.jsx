import WebSearchResults from "@/components/WebSearchResults"
import Link from "next/link"

export default async function WebSearchPage({searchParams}) {

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY_GOOGLE}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
`)
if (!response.ok) {
  throw new Error("something went wrong!")
}
const data =await response.json()
const results = data.items

if (!results) {
  return <div className="flex flex-col  justify-center items-center pt-10 ">
    <h1 className="text-3xl mb-4 ">No results found</h1>
    <p className="text-lg">
      Try  searching  for something else  or  go back to home page. {' '}
<Link href='/' className="text-blue-500">
  Home  
</Link>
    </p>
  </div>
}
  return (
    <>
      {results&& <WebSearchResults results={data}/>}
    </>
  )
}
