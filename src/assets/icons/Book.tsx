import React from "react"


interface IBook {
  fill?: string;
  customClass?: string
  width?: string | number
}

const Book = ({ fill, customClass, width }: IBook) => {
  return (
    <div className={customClass}>
      <svg width={width} viewBox="0 0 24 24" >
        <path
          fill={fill}
          d="M21 4H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M3 19V6h8v13H3m18 0h-8V6h8v13m-7-9.5h6V11h-6V9.5m0 2.5h6v1.5h-6V12m0 2.5h6V16h-6v-1.5Z"
        ></path>
      </svg>
    </div>
  )
}

export default Book
