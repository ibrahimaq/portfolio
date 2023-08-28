import React from "react"
import Layout from "../components/layout/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import ThanksForReading from "../components/ThanksForReading"
import Seo from "../components/Seo/Seo"
import { useGlobalContext } from "../context/GlobalContext"
import { getLiMarkerStyle } from "../tools/theme"
import Container from "../components/Container"
import PageHeading from "../components/PageHeading"

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

  const { color } = useGlobalContext()

    return (
        <Layout>
            <Seo
                title="About me"
                description={query.file.childMarkdownRemark.excerpt}
                ogType="profile"
            />
            <Container className="pt-20 mt-20">
              {/* <h1 className="relative w-fit before:block before:absolute before:bottom-[1px] before:left-0 before:w-1/3 before:h-[4px] before:bg-pink-600 before:opacity-70">About me</h1> */}
              <PageHeading title="About me" />
              <article>
                <div
                    className={`mt-20 prose lg:prose-xl prose-headings:text-dark ${color? getLiMarkerStyle(color) : 'prose-li:marker:text-indigo-600'}`}
                    dangerouslySetInnerHTML={{
                        __html: query.file.childMarkdownRemark.html,
                    }}
                />
            </article>
            <ThanksForReading />

            </Container>

        </Layout>
    )
}

export default About
