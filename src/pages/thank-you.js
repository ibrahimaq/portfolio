import React from "react";
import Mailbox from "../assets/Mailbox";
import Layout from "../components/layout/Layout"
import { Link } from "gatsby";

const ThankYou = () => {

    return ( 
        <Layout>
             <div className="content-container flex flex-col justify-center items-center">
               
               <h1>Thank you</h1>
               <p>Your email has been received.</p>
               <Mailbox />
               <Link to='/'>Back to home</Link>
             </div>
        </Layout>
     );
}
 
export default ThankYou;