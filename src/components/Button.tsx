import React from "react";
import { Link } from "gatsby";

type Props = {
    link?: string;
    label: string;
    className?: string;
}

const Button = ({link, label, className}: Props) => {

    return ( 
        <>
        {!link && 
        <button className="px-3 py-2 w-12 text-xl bg-greyBg text-pink-500 cursor-pointer hover:no-underline">
            {label}
        </button>
        }
        {link &&
            <Link to={link} className={`
            px-3 py-2 w-[120px] text-xl text-center bg-transparent text-blue-accent border border-blue-accent cursor-pointer relative transition-all duration-500 z-[1]
            before:absolute before:content-[''] before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-blue-accent before:transition-all before:duration-500 before:z-[-1]
            hover:no-underline hover:text-white before:hover:w-full

            
            ${className}`}>
                {label}
            </Link>
        }
        </>
     );
}
 
export default Button;