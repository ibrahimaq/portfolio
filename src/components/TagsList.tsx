import React from "react"
import { camelCase, kebabCase } from "lodash"
import { Link } from "gatsby"
import { useGlobalContext } from "../context/GlobalContext"
import { themeClassBuilder } from "../tools/theme"

interface ITagsList {
    tags?: string[],
    activeTag?: string,
    wrapperClass?: string,
}
const TagsList = ({ tags, activeTag, wrapperClass }: ITagsList) => {
    const { color } = useGlobalContext()

    return (
        <ul className={`flex flex-row flex-wrap justify-center ${wrapperClass && wrapperClass}`}>
            {tags && tags.map((tag, i) => (
                <li key={i} className="mx-2 mt-1">
                    <Link 
                    to={`/tags/${kebabCase(tag)}`}
                    className={`
                        block w-full h-full py-1 px-2 bg-slate-200 hover:bg-slate-300 rounded-lg hover:no-underline
                        ${activeTag === kebabCase(tag) ? `${themeClassBuilder({color, el: 'text'})}` : 'text-darkFont'}
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
