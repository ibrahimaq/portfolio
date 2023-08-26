import React from "react"
import Layout from "../components/layout/Layout"

import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo/Seo";
import Intro from "../components/homepage/Intro"
import RecentBlogs from "../components/blogs/RecentBlogs"
import FindMe from "../components/FindMe";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import SayHello from "../components/SayHello";



export default function Home() {

  const pageMetadata = useStaticQuery(graphql`
      {
        site{
          siteMetadata{
            description
          }
        }
      }
  `)
  const title = pageMetadata.site.siteMetadata.indexPageTitle;
  const description = pageMetadata.site.siteMetadata.description;

  
  return(
    <Layout>
      <Seo 
      title="Home" description={description} 
      ogType={"profile"}
      />
      <Hero />
      <AboutMe />
      <RecentBlogs />
      <SayHello />

      
    </Layout>
  )
  
}
