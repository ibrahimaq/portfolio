import React from "react"
import Header from "../Navbar"
import Footer from "../footer/Footer"
import ThemeOption from "../FloatingThemeBtn"
import Overlay from "../Overlay"

interface ILayout {
  children: React.ReactNode
}
const Layout = ({ children }: ILayout) => {
  return (
    <div className='overflow-hidden min-h-screen flex flex-col'>
      <Header />
      <Overlay />
      <div className='flex-grow'>
        <ThemeOption />
        
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
