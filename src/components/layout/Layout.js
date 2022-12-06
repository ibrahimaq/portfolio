import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"


import * as styles from "./styles.module.scss"
const Layout = ({ children }) => {
  return (
    <div className={`overflow-x-hidden${styles.container}`}>
      <Header />
      <div className={styles.content}>
        
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
