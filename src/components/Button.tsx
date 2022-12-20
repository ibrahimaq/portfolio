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
        <button className="px-3 py-2 w-12 text-xl bg-greyBg text-pink cursor-pointer hover:no-underline">
            {label}
        </button>
        }
        {link &&
            <Link to={link} className={`px-3 py-2 w-[120px] text-xl text-center bg-blue text-white cursor-pointer hover:no-underline ${className}`}>
                {label}
            </Link>
        }
        </>
     );
}
 
export default Button;