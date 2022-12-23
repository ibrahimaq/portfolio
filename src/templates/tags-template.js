import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout/Layout";
import TagsList from "../components/TagsList";
import {kebabCase, camelCase} from 'lodash'


const TagsPage = () => {
    const [activeTag, setActiveTag] = useState(null);
    const [numberOfTaggedBlogs, setNumberOfTaggedBlogs] = useState(null)
    const data = useStaticQuery(graphql`
    {
        allContentfulBlog {
          nodes {
            id
            markdown {
              childMarkdownRemark {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      }
    `)

    let uniqueTags = [];
    data?.allContentfulBlog?.nodes?.forEach(node => {
        node.markdown.childMarkdownRemark.frontmatter.tags.forEach(tag => {
            if (uniqueTags.includes(tag)) {
                return
            } else {
                uniqueTags.push(tag)
            }
        })
    })

    const getTagSlugFromUrl = (path) => {
      //returns last part of url where the slug is the tag
      const indexOfLastSlash = path.lastIndexOf('/');
      const tagSlug = path.slice(indexOfLastSlash + 1);
      return tagSlug
    }

    const getNumberOfTaggedBlogs = () => {
      // returns 
      let taggedBlogsArr = [];
      data.allContentfulBlog.nodes.forEach((node, i)=> {
        node.markdown.childMarkdownRemark.frontmatter.tags.filter(tag => 
            kebabCase(tag) === activeTag ? taggedBlogsArr.push(camelCase(tag)) : null
        )
      })
      console.log(taggedBlogsArr);
      return taggedBlogsArr.length;
    }

    useEffect(() => {
        setActiveTag(getTagSlugFromUrl(window.location.pathname));
    }, [])

    useEffect(() => {
        console.log(getNumberOfTaggedBlogs())
        setNumberOfTaggedBlogs(getNumberOfTaggedBlogs());
    }, [activeTag])

    return ( 
        <Layout>
            <div className="content-container">
              <h1 className="text-center text-base md:text-lg">
              {numberOfTaggedBlogs} blog{numberOfTaggedBlogs<2? '' : 's'} tagged
                <span className="block bg-pink-300 w-fit mx-auto text-2xl md:text-3xl px-3 py-1 mt-2 rounded-lg">#{camelCase(activeTag)}</span>
              </h1>
                {data && uniqueTags.length > 0 && 
                    <TagsList tags={uniqueTags} activeTag={activeTag} wrapperClass='mt-5' />
                }
            </div>
            <section>

            </section>
        </Layout>
     );
}
 
export default TagsPage;