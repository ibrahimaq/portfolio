import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import NotFound from "../assets/NotFound"
import { navLinks } from "../components/Navbar"

const Notfound = () => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <div className="content-container !pt-0 min-[290px]:!pt-8 md:!pt-20 flex flex-col md:flex-row-reverse md:items-center">
        <div className="md:w-1/2">
          <NotFound customClass='block w-full  md:w-full mx-auto mb-auto' />
        </div>
        <div className="md:w-1/2 mx-auto mt-8 md:mt-0">
          <h1 className="tracking-wide">Oops!</h1>
          <p className="text-lg mt-3 mb-5">The page you are looking for does not exist.</p>
          <p className="text-lg mt-3 mb-2">Here's some useful links instead</p>
          <ul className="flex flex-row">
            {navLinks.map((item, i) => (
              <li key={i} className='mr-3'>
                <Link to={item.link} className='text-font-greydark underline-offset-4 underline decoration-pink-500'>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
          {/* <Link to="/">Go back to homepage</Link> */}
      </div>
    </Layout>
  )
}

export default Notfound
