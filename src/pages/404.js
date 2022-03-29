import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
const Notfound = () => {
  return (
    <Layout>
      <h2>Sorry, the page you are looking for does not exist</h2>
      <Link to="/">Go back to homepage</Link>
    </Layout>
  )
}

export default Notfound
