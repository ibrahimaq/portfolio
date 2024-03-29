import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout/Layout";
import Seo from "../components/Seo/Seo";
import TagsList from "../components/TagsList";
import {kebabCase, camelCase} from 'lodash'
import AllCards from "../components/cards/AllCards";
import { getSlugFromUrl } from "../helpers";
import Container from "../components/Container";


const TagsPage = () => {
    const [activeTag, setActiveTag] = useState<string>('');
    const [numberOfTaggedBlogs, setNumberOfTaggedBlogs] = useState<number>(0)
    const [taggedBlogs, setTaggedBlogs] = useState<any>(null)
    const data = useStaticQuery(graphql`
    {
        allContentfulBlog(sort: {date: DESC}) {
          nodes {
            id
            date(formatString: "Do MMM YYYY")
            featuredImage {
              title
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, aspectRatio: 2, quality: 70)
            }
            markdown {
              childMarkdownRemark {
                frontmatter {
                  tags
                  title
                  slug
                }
              }
            }
          }
        }
      }
    `)

    let uniqueTags: string[] = [];
    data?.allContentfulBlog?.nodes?.forEach((node: { markdown: { childMarkdownRemark: { frontmatter: { tags: string[]; }; }; }; }) => {
        node.markdown.childMarkdownRemark.frontmatter.tags.forEach(tag => {
            if (uniqueTags.includes(tag)) {
                return
            } else {
                uniqueTags.push(tag)
            }
        })
    })


    const getArrOfBlogsByTag = () => {
      // returns 
      let taggedBlogsArr = Array();
      data.allContentfulBlog.nodes.forEach((node: any) => {
        node.markdown.childMarkdownRemark.frontmatter.tags.forEach((tag: string) =>  {
          if (kebabCase(tag) === activeTag) {
            taggedBlogsArr.push(node)
          }
        })
      })
      ;
      return taggedBlogsArr;
    }

    useEffect(() => {
        setActiveTag(getSlugFromUrl(window.location.pathname));
    }, [])

    useEffect(() => {
        setNumberOfTaggedBlogs(getArrOfBlogsByTag().length);
        setTaggedBlogs(getArrOfBlogsByTag())

    }, [activeTag])

    // let noOfBlogs;

    // if (taggedBlogs.length) taggedBlogs.length;

    return ( 
        <Layout>
          <Seo 
          title={`#${camelCase(activeTag)} blogs`} 
          description={`Here you will find all blogs tagged with #${activeTag}`}
          ogType="article"
          // ogUrl={`blogs/${slug}`}
          />
            <Container className="pt-[150px]">
              <h1 className="text-center text-base md:text-lg">
              {numberOfTaggedBlogs} blog{numberOfTaggedBlogs<2? '' : 's'} tagged
                <span className="block w-fit mx-auto text-2xl md:text-3xl px-3 py-1 mt-2 rounded-lg">#{camelCase(activeTag)}</span>
              </h1>
                {data && uniqueTags.length > 0 && 
                    <TagsList tags={uniqueTags} activeTag={activeTag} wrapperClass='mt-5' />
                }
          
              <section className="pt-20">
                  {/* <p className="p-subtitle">{noOfBlogs} blog{noOfBlogs && noOfBlogs > 1 ? 's' : ''} found</p> */}
                  {taggedBlogs && <AllCards data={taggedBlogs} />}
              </section>
            </Container>
        </Layout>
     );
}
 
export default TagsPage;