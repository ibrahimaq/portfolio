import React from "react"
import MagnifyingGlass from "../assets/icons/MagnifyingGlass"

const SearchBlogs = ({ searchTerm, setSearchTerm }) => {
    return (
        <div>
            <p className="text-xl md:text-2xl">Search for a blog</p>
            <label
                htmlFor="search"
                className="flex flex-row w-full md:w-1/2 bg-transparent border-b  border-l border-font-greydark focus:outline-1 focus:outline-font-greydark p-2 mt-4 mb-8 cursor-pointer"
            >
                <MagnifyingGlass customClass='w-6 h-6' />
                <input
                    id="search"
                    type="search"
                    className="w-full focus:outline-none bg-inherit text-font-greydark pl-3"
                    placeholder="..."
                    value={searchTerm || ""}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </label>
        </div>
    )
}

export default SearchBlogs
