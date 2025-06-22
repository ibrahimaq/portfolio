import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import { navLinks } from "../components/Navbar"
import Lottie from "lottie-react"
import lottie404 from "../assets/Lottie/404Lottie.json"
import Container from "../components/Container"
import { useGlobalContext } from "../context/GlobalContext"

const Notfound = () => {
  const { color } = useGlobalContext()
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <Container className="py-20 mt-20">
        <div className="flex flex-col md:flex-row-reverse md:items-center">
          <div className="md:w-1/2">
            <Lottie animationData={lottie404} loop />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="tracking-wide">Oops!</h1>
            <p className="mt-3 p-subtitle">
              The page you are looking for does not exist.
            </p>
            <p className="text-lg mb-2 p-subtitle">
              Here's some useful links instead
            </p>
            <ul className="flex flex-row">
              {navLinks.map((item, i) => (
                <li key={i} className="mr-3">
                  <Link
                    to={item.link}
                    className={`text-font-greydark p-subtitle underline-offset-4 underline decoration-${color}-600`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <Link to="/">Go back to homepage</Link> */}
        </div>
      </Container>
    </Layout>
  )
}

export default Notfound
