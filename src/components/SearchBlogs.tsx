import React, { SetStateAction } from "react"
import MagnifyingGlass from "../assets/icons/MagnifyingGlass"

interface ISearchBlogs {
  searchTerm: string
  setSearchTerm: React.Dispatch<SetStateAction<string>>
}
const SearchBlogs = ({ searchTerm, setSearchTerm }: ISearchBlogs) => {
  return (
    <div>
      <p className="text-xl md:text-2xl">Search for a blog</p>
      <label
        htmlFor="search"
        className="flex flex-row w-full md:w-1/2 bg-transparent p-2 mt-4 mb-8 cursor-pointer"
      >
        <MagnifyingGlass customClass="w-6 h-6" />
        <input
          id="search"
          type="search"
          className="w-full focus:outline-none bg-inherit text-font-greydark pl-3 border-b border-b-gray-400 focus:border-b-gray-600 border-l border-l-gray-400 focus:border-l-gray-600"
          placeholder="..."
          value={searchTerm || ""}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </label>
    </div>
  )
}

export default SearchBlogs
