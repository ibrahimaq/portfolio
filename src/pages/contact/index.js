import React from "react";
import ContactForm from "../../components/contact-form/ContactForm"
import Layout from "../../components/layout/Layout";
import Seo from "../../components/Seo/Seo";
import * as styles from "./styles.module.scss"
const Contact = () => {

    return ( 

        <Layout>
            <Seo 
            title={"Contact Me"} 
            description={"Contact me by filling in the contact form or find me on social media."}
            ogType={"website"}
            // ogUrl={`/contact`}
            />
            <h1 className={styles.title}>Contact</h1>
            <ContactForm />
        </Layout>
     );
}
 
export default Contact;