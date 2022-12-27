import React from "react"
import { camelCase, kebabCase } from "lodash"
import { Link } from "gatsby"

interface propType {
    tags: string[],
    activeTag?: string,
    wrapperClass?: string,
}
const TagsList = ({ tags, activeTag, wrapperClass }: propType) => {

    return (
        <ul className={`flex flex-row flex-wrap justify-center ${wrapperClass && wrapperClass}`}>
            {tags.map((tag, i) => (
                <li key={i} className="ml-5 mt-1">
                    <Link 
                    to={`/tags/${kebabCase(tag)}`}
                    className={`
                        block w-full h-full py-1 px-2 bg-white rounded-lg hover:no-underline
                        ${activeTag === kebabCase(tag) ? 'text-accent-2' : 'text-accent-1'}
                        `}
                    >
                        #{camelCase(tag)}
                    </Link>
                    
                </li>
            ))}
        </ul>
    )
}

export default TagsList
