import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { kebabCase, camelCase } from 'lodash'

// pass in object
const Card = ({data}) => {
    
    return ( 
            <>
                {data && 
                    <div key={data.id} className='flex flex-col overflow-hidden rounded-md shadow-lg h-full '>
                        <Link to={`/blogs/${data.markdown.childMarkdownRemark.frontmatter.slug}`} className="block relative">
                            <GatsbyImage
                            image={data.featuredImage.gatsbyImageData}
                            alt=''
                            className="h-[200px]"
                            />
                            <p className="text-sm absolute bottom-0 bg-white left-0 px-4 py-2">{data.date}</p>
                        </Link>

                        <div className='p-5 relative flex flex-col h-full'>
                            <Link to={`/blogs/${data.markdown.childMarkdownRemark.frontmatter.slug}`} className="hover:no-underline">
                                <h3 className="font-bold text-lg text-font-greydark">{data.markdown.childMarkdownRemark.frontmatter.title}</h3>
                            </Link>
                        
                            <div className="mt-auto">
                            {/* <Button label='Live' link='/' className='inline-block mt-5'  /> */}
                                <hr className="w-1/4 my-5 bg-font-greydark"/>
                                <ul className="flex flex-row flex-wrap">
                                {data.markdown.childMarkdownRemark.frontmatter.tags.slice(0,3).map((tag, i) => {
                                    return (
                                    <li 
                                    key={i}
                                    className='mr-2'
                                    >
                                        <Link to={`/tags/${kebabCase(tag)}`} 
                                        className="text-accent-1 text-sm cursor-pointer relative hover:!no-underline hover:bg-accent-1 hover:!text-white transition-all duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full  before:bg-accent-1 before:transition-all before:duration-300 hover:before:w-full z-[2] before:z-[-1] ">
                                            #{camelCase(tag)}
                                        </Link>
                                    </li> 
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
}
export default Card;