import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

// pass in object
const Card = ({data}) => {
    
    return ( 
            <>
                {data && 
                    <div key={data.id} className='flex flex-col overflow-hidden rounded-md box-shadow h-full '>
                        <Link to={`/blogs/${data.markdown.childMarkdownRemark.frontmatter.slug}`} className="block">
                            <GatsbyImage
                            image={data.featuredImage.gatsbyImageData}
                            alt=''
                            className="h-[200px]"
                            />
                        </Link>

                        <div className='p-5 relative flex flex-col h-full'>
                            <Link to={`/blogs/${data.markdown.childMarkdownRemark.frontmatter.slug}`} className="hover:no-underline">
                                <p className="text-sm absolute bg-white -top-[28px] left-0 px-4 py-2">{data.markdown.childMarkdownRemark.timeToRead} mins read</p>
                                <h3 className="font-bold text-lg text-font-greydark">{data.markdown.childMarkdownRemark.frontmatter.title}</h3>
                            </Link>
                        
                            <div className="mt-auto">
                            {/* <Button label='Live' link='/' className='inline-block mt-5'  /> */}
                                <hr className="w-1/4 my-5 bg-font-greydark"/>
                                <ul className="flex flex-row flex-wrap gap-2">
                                
                                <p className="">{data.date}</p>
                                {/* {data.markdown.childMarkdownRemark.frontmatter.tags.slice(0,3).map((tag, i) => {
                                    return (
                                    <li 
                                    key={i}
                                    className='ml-1'
                                    >
                                        <Link to='/' className="text-blue text-sm cursor-pointer">
                                            #{tag}
                                        </Link>
                                    </li> 
                                    )
                                })} */}
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
}
export default Card;