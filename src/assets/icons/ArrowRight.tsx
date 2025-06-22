import React from "react"

export interface IIconType {
  stroke?: string
  fill?: string
  customClass?: string
}

const Github = ({ stroke, fill, customClass }: IIconType) => {
  return (
    <svg
      className={customClass}
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke={stroke}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13 9 3 3m0 0-3 3m3-3H8m13 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
      />
    </svg>
  )
}

export default Github
