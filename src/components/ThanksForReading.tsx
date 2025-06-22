import React from "react"
import { useGlobalContext } from "../context/GlobalContext"

const ThanksForReading = () => {
  const { color } = useGlobalContext()
  return (
    <section className="prose lg:prose-xl max-w-none mx-auto pt-20">
      <h2 className={`text-${color}-600 !mb-5`}>
        Thank you for reading. Let's connect!
      </h2>
      <p>
        Feel free to connect on{" "}
        <a
          href="https://twitter.com/ibrahimaq30"
          className={`decoration-${color}-600`}
        >
          Twitter
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/ibrahimaq/"
          className={`decoration-${color}-600`}
        >
          LinkedIn
        </a>
      </p>
    </section>
  )
}

export default ThanksForReading
