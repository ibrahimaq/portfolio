import React from "react";
import ContactForm from "../../components/contact-form/ContactForm"
import Layout from "../../components/layout/Layout";
import * as styles from "./styles.module.scss"
const Contact = () => {

    return ( 

        <Layout>
            
            <h1 className={styles.title}>Contact</h1>
            <ContactForm />
        </Layout>
     );
}
 
export default Contact;