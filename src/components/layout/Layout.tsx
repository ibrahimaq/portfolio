import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"

interface ILayout {
  children: React.ReactNode
}
const Layout = ({ children }: ILayout) => {
  return (
    <div className='overflow-hidden min-h-screen flex flex-col'>
      <Header />
      <div className='flex-grow'>
        
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
