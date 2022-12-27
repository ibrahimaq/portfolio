import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import ThanksForReading from "../components/ThanksForReading";
import Seo from "../components/Seo/Seo";


const About = () => {
    const query = useStaticQuery(graphql`
    {
        file(childMarkdownRemark: {frontmatter: {title: {eq: "about me"}}}) {
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
            <div className="bg-greyBg-dark">
                <section className="content-container">
                    <h1>About me</h1>
                </section>
            </div>
            <article className="content-container">
                    <div className="prose lg:prose-xl about" dangerouslySetInnerHTML={{__html: query.file.childMarkdownRemark.html}} />
                    <ThanksForReading />
            </article>

        </Layout>

    );
}

export default About;