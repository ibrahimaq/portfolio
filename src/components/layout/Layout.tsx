import React from "react"
import Header from "../Navbar"
import Footer from "../footer/Footer"
import ThemeOption from "../ThemeOption"

interface ILayout {
  children: React.ReactNode
}
const Layout = ({ children }: ILayout) => {
  return (
    <div className='overflow-hidden min-h-screen flex flex-col'>
      <Header />
      <div className='flex-grow'>
        <ThemeOption />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
