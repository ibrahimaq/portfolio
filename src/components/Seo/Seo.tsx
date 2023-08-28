import React from "react"
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import {getSrc} from "gatsby-plugin-image"

interface propType {
  title?: string,
  description?: string,
  ogType?: 'website' | 'article' | 'profile',
  ogImage?: string,
}

const Seo = ({title, description, ogType, ogImage}: propType) => {
    const {site, contentfulLogo} = useStaticQuery(
       graphql`
       {
        site {
          siteMetadata {
            title
            indexPageTitle
            author
            description
          }
        }
        contentfulLogo(metaImage: {title: {eq: "index snapshot"}}) {
          metaImage {
            gatsbyImageData
          }
        }
      }
      
    `
    ) 
   
        const author = site.siteMetadata.author;
        const defaultTitle = site.siteMetadata.indexPageTitle;
        const defaultDescription = site.siteMetadata.description;

        const logo = contentfulLogo.metaImage;
        const logoSrc = getSrc(logo);
       
    
    // const metaDescription = descrition || site.Metadata.description;

    
    return ( 
        
        <Helmet>
            <title>{title? title + " | " + author : defaultTitle }</title>
            <meta name="description" content={description? description : defaultDescription} />
            <meta name="author" content="Ibrahim Al-Quraishi" />

            {/* <meta property="og:site_name" content={ogSiteName? ogSiteName : "Ibrahim Al-Quraishi | Portfolio"} /> */}
            <meta property="og:title" content={title} />
            <meta property="og:type" content={ogType} />
            <meta property="og:description" content={description ? description : defaultDescription} />
            <meta property="og:url" content={"ibrahimaq.com"} />
            <meta property="og:image" content={ogImage? ogImage : logoSrc} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={"ibrahimaq.com"} />
            <meta name="twitter:image" content={ogImage? ogImage : logoSrc} />
            <meta name="twitter:creator" content="@ibrahimaq30" />

            <meta name="color-scheme" content="light" />
          
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            
        </Helmet>
     );
}
 
export default Seo;
