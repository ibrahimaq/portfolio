import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../Button";
import Card from "./Card";


const AllCards = ({data}) => {


    // const [isTablet, setIsTablet] = useState<Boolean | null>(null);

    // useEffect(() => {
    //     const resize = () => {
    //         if (window.innerWidth > 640 && window.innerWidth < 1280) {
    //             setIsTablet(true);
    //         } else {
    //             setIsTablet(false);
    //         }
    //     }
    //     window.addEventListener('resize', resize);
        

    //     return () => window.removeEventListener('resize', resize);
    // }, []);



    return ( 
        // Desktop cards in a row
        <>
        {data && 
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {data.map((cardData, i) => {
                return (
                    <Card key={i} data={cardData} />
                )
            })}
        </div>
        }
        {/* {isTablet && data && 
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <Link to='/'>
                        <GatsbyImage image={data[0].featuredImage.gatsbyImageData} alt='' />
                    </Link>
                    <h3 className="font-bold text-lg text-font-greydark">{data[0].markdown.childMarkdownRemark.frontmatter.title}</h3>
                    <ul className="flex flex-row flex-wrap gap-2">        
                        {data[0].markdown.childMarkdownRemark.frontmatter.tags.slice(0,3).map((tag: string, i: number) => {
                            return (
                            <li key={i} className='ml-1 text-blue text-sm rounded-sm cursor-pointer'>#{tag}</li> 
                            )
                        })}
                    </ul>
                </div>
                <ul className="flex flex-col    ">
                    {data.slice(1,3).map(blog => {
                        return (
                            <li key={blog.id} className='flex flex-row'>
                                <Link to='/' className="flex w-[200px] h-[200px]">
                                    <GatsbyImage image={blog.featuredImage.gatsbyImageData} alt='' className='w-[200px] h-[200px]' />
                                </Link>
                                <div className="">
                                <h3 className="font-bold text-lg text-font-greydark">{blog.markdown.childMarkdownRemark.frontmatter.title}</h3>
                                    <ul className="flex flex-row flex-wrap gap-2">
                                        {blog.markdown.childMarkdownRemark.frontmatter.tags.slice(0,3).map((tag: string, i: number) => {
                                            return (
                                                <li key={i} className='ml-1 text-blue text-sm rounded-sm cursor-pointer'>#{tag}</li> 
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        
        } */}
        </>
     );
}
 
export default AllCards;

