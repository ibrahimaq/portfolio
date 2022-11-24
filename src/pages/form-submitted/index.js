import React from "react";
import Layout from "../../components/layout/Layout"
import * as styles from "./styles.module.scss"
const FormSubmitted = () => {

    return ( 
        <Layout>
             <div className={styles.title}>
               <h1>Thank you</h1>
               <p>Your email has been received</p>
             </div>
        </Layout>
     );
}
 
export default FormSubmitted;