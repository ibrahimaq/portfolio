import React from "react"
import Layout from "../components/layout/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo/Seo"
import RecentBlogs from "../components/blogs/RecentBlogs"
import HeroBgGradient, {
  HeroBgGradientDataType,
} from "../components/HeroBgGradient"
import AboutMe from "../components/AboutMe"
import SayHello from "../components/SayHello"

export default function Home() {
  const pageMetadata = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  const title = pageMetadata.site.siteMetadata.indexPageTitle
  const description = pageMetadata.site.siteMetadata.description

  return (
    <Layout>
      <Seo title="Home" description={description} ogType={"profile"} />
      <HeroBgGradient data={heroData} />
      <AboutMe />
      <RecentBlogs />
      <SayHello
        heading="Say Hello &#128075;"
        body="Get in touch for a friendly chat, or find me on any of these social mediums."
      />
    </Layout>
  )
}

const heroData: HeroBgGradientDataType = {
  headingTopLine: "Hi I'm Ibrahim.",
  headingBottomLine: "I'm a frontend developer based in London.",
  bodyCopy:
    "I enjoy building modern stylish interfaces and continuously learning new tools and technologies.",
}
