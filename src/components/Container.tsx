import React from "react"

type IContainer = {
  className?: string
  padding?: string
  children: React.ReactNode
}
const Container = ({ className, padding, children }: IContainer) => {
  return (
    <div
      className={`max-w-[1440px] mx-auto ${className && className} ${
        padding ? padding : "px-6 md:px-16"
      }`}
    >
      {children}
    </div>
  )
}

export default Container
