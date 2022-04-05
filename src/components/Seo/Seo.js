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
        </Helmet>
     );
}
 
export default Seo;
