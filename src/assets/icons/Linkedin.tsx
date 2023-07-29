import React from "react"
import { IIconType } from "./ArrowRight"

const Linkedin = ({ stroke, fill, customClass }: IIconType) => {
    return (
        <svg
            className={customClass}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} />
        </svg>
    )
}

export default Linkedin
