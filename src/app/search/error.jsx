"use client"

import { useEffect } from "react"

export default function Error({error , reset}) {
    useEffect(()=>{
        console.log("Error:",error)
    },[error])
  return (
    <div className="flex flex-col justify-center items-center h-[50vh] gap-4">
        <h1>Something went wrong </h1>
        <button onClick={()=>reset()} className="border border-gray-200 px-6 py-2 text-blue-500 rounded-md shadow-md">Try again</button>
    </div>
  )
}
