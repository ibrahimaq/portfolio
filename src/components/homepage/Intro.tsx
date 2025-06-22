import React from "react"

const Intro = () => {
  return (
    <section className="bg-greyBg py-20">
      <div className="content-container flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1>Hi, I'm Ibrahim.</h1>
          <p className="text-lg text-font-greydark mt-4">
            I'm a frontend developer based in London.
            <br />I build websites, write code and play the piano.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro
