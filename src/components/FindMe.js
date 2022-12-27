import React, { Fragment } from "react";
import { Link } from "gatsby";

const FindMe = () => {
    return ( 
        <section className="bg-greyBg-dark">
            <div className="content-container">
                <h2 className="text-gray-600 mb-10">Find me</h2>
                <div className="flex flex-col md:flex-row">
                    <ul>
                        {contactLinks.map((item, i) => {
                            return (
                                <Fragment key={i}>
                                {item.link.includes('/contact') ? 
                                    <li key={i}>
                                        <Link 
                                            to={item.link} 
                                            className="text-accent-1 hover:underline hover:underline-offset-4"
                                            >{item.label}
                                        </Link>
                                    </li>
                                    :
                                    <li key={i}>
                                        <a 
                                            href={item.link}
                                            className="text-accent-1 hover:underline hover:underline-offset-4"
                                            >{item.label}
                                        </a>
                                    </li>
                                }
                                </Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default FindMe;

const contactLinks = [
    {
        label: 'linkedin.com/in/ibrahimaq',
        link: 'https://www.linkedin.com/in/ibrahimaq/'  
    },
    {
        label: 'twitter.com/ibrahimaq30',
        link: 'https://twitter.com/ibrahimaq30'
    },
    {
        label: 'github.com/ibrahimaq',
        link: 'https://github.com/ibrahimaq'
    },
    {
        label: 'Email me',
        link: '/contact'
    }
]