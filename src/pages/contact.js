import React from "react";
import ContactForm from "../components/contact-form/ContactForm"
import Layout from "../components/layout/Layout";
import Seo from "../components/Seo/Seo";
import { StaticImage } from "gatsby-plugin-image";


const Contact = () => {

    return ( 

        <Layout>
            <Seo 
            title={"Contact Me"} 
            description={"Contact me by filling in the contact form or find me on social media."}
            ogType={"website"}
            // ogUrl={`/contact`}
            />
            <div className="content-container !py-0 sm:px-0">
                <div className="grid md:grid-cols-12">
                    <div className="md:col-span-5 flex flex-col my-14 md:my-20">
                        <h1>Let's partner up</h1>
                        <p className="mt-2 mb-5">We can make it work, together.</p>
                        <ContactForm />
                    </div>
                    <div className="hidden md:block md:col-span-1"></div>
                    <div className="hidden md:block md:col-span-6">
                        <StaticImage 
                        src="../assets/images/plant.jpeg"
                        alt=''
                        aspectRatio={1}
                        className="block h-full"
                        transformOptions={{cropFocus: 'east'}} 
                        />
                    </div>
                </div>
            </div>
            
            
        </Layout>
     );
}
 
export default Contact;