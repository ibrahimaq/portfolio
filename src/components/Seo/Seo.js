import React from "react"
import {Helmet} from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";


const Seo = ({title, metaDescription, keywords}) => {
    const {site} = useStaticQuery(
       graphql`
           {
                site{
                    siteMetadata{
                        title
                        indexPageTitle
                        author
                        description
                    }
                }
            }
        `
    ) 
    console.log(site);
        const author = site.siteMetadata.author;
        const defaultTitle = site.siteMetadata.indexPageTitle;
        const defaultDescription = site.siteMetadata.description;
    
    // const metaDescription = descrition || site.Metadata.description;

    
    return ( 
        
        <Helmet>
            <title>{title? title + " | " + author : defaultTitle }</title>
            <meta name="description" content={metaDescription? metaDescription : defaultDescription} />
            <meta name="author" content="Ibrahim Al-Quraishi" />
            {keywords? <meta name="keywords" content={keywords} /> : null}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Helmet>
     );
}
 
export default Seo;
