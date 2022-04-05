import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/Seo/Seo"
import * as styles from "./stylesError.module.scss"
const Notfound = () => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <div className={styles.content}>
      <h1>Sorry!</h1>
      <h2>The page you are looking for does not exist</h2>
      <Link to="/">Go back to homepage</Link>
      </div>
    </Layout>
  )
}

export default Notfound
