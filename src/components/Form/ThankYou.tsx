import React from "react";
import Lottie from "lottie-react";
import tick2 from '../../assets/Lottie/animation_lk4rvout.json'

const ThankYou = () => {
    return ( 
        <>
         <div className="flex flex-col text-center">
            <div className="max-w-[200px] mx-auto">
                <Lottie animationData={tick2} loop={false}  />
            </div>
            <p className="h2">Thank you!</p>
            <p className="p-subtitle mt-5">Your email has been received.</p>
        </div>
        </>
        
     );
}
 
export default ThankYou;