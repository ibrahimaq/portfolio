import React from "react";
import Button from "../Buttons/Button";
import Lottie from "lottie-react";
import error from '../../assets/Lottie/error-animation.json'
import { useGlobalContext } from "../../context/GlobalContext";


const TryAgain = () => {
	const { setFormIsSubmitted } = useGlobalContext()
	return (
		<div className="flex flex-col text-center">
			<div className="max-w-[200px] mx-auto">
				<Lottie animationData={error} loop={true} />
			</div>
			<p className="h2 mt-8">Sorry!</p>
			<p className="p-subtitle mt-5">We are experiencing technical difficulties.</p>
			<p className="p-subtitle">Please try again later.</p>

			<div className="mt-8">
				<Button label="Try again" onClick={() => setFormIsSubmitted(null)} large />
			</div>
		</div>
	);
}

export default TryAgain;