import React from "react"
import Layout from "../components/layout/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import ThanksForReading from "../components/ThanksForReading"
import Seo from "../components/Seo/Seo"

const About = () => {
    const query = useStaticQuery(graphql`
    {
      file(
        childMarkdownRemark: { frontmatter: { title: { eq: "about me" } } }
      ) {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  `)

    return (
        <Layout>
            <Seo
                title="About me"
                description={query.file.childMarkdownRemark.excerpt}
                ogType="profile"
            />
            <div className="pt-20">
                <section className="content-container">
                    <h1 className="relative w-fit before:block before:absolute before:bottom-[1px] before:left-0 before:w-1/3 before:h-[4px] before:bg-pink-600 before:opacity-70">About me</h1>
                </section>
            </div>
            <article className="content-container">
                <div
                    className="prose lg:prose-xl prose-headings:text-font-greydark about"
                    dangerouslySetInnerHTML={{
                        __html: query.file.childMarkdownRemark.html,
                    }}
                />
                <ThanksForReading />
            </article>
        </Layout>
    )
}

export default About
