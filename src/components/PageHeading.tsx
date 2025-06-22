import React from "react"
import { useGlobalContext } from "../context/GlobalContext"

interface IPageHeading {
  title: string
}

const PageHeading = ({ title }: IPageHeading) => {
  const { color } = useGlobalContext()

  return (
    <h1
      className={`relative w-fit before:block before:absolute before:bottom-[1px] before:left-0 before:w-[100px] before:h-[4px] before:bg-${color}-600 before:opacity-70
    `}
    >
      {title}
    </h1>
  )
}

export default PageHeading
