import React from "react"
import { useEffect } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { IconContext } from "react-icons"
import { useGlobalContext } from "../context/GlobalContext"
import { themeClassBuilder } from "../tools/theme"
import { animated, useTransition } from "@react-spring/web"
import ContactForm from "./Form/ContactForm"

const Overlay = () => {
  const { overlay, setOverlay, formIsSubmitted, setFormIsSubmitted, color } =
    useGlobalContext()

  useEffect(() => {
    const body = document.querySelector("body")
    const layout = document.querySelector(".layout")

    if (overlay && body) {
      body.style.overflow = "hidden"
      layout?.setAttribute("inert", "")
    }
    if (!overlay && body) {
      body.style.overflow = "auto"
      layout?.removeAttribute("inert")
    }
  }, [overlay])

  // useEffect(() => {
  //     if (formIsSubmitted) {
  //         formRef.current.scroll({
  //             top: 0,
  //             behavior: 'smooth'
  //         })
  //     }
  // }, [formIsSubmitted])

  // const transition = useTransition(overlay, {
  //   from: { top: 400, bottom: -400, opacity: 0 },
  //   enter: { top: 100, bottom: 0, opacity: 1 },
  //   leave: { top: 400, bottom: -400, opacity: 0 },
  // })

  const transition = useTransition(overlay, {
    config: { mass: 1, tension: 150, friction: 20 },
    from: { top: 1000, opacity: 0 },
    enter: { top: 100, opacity: 1 },
    leave: { top: 1000, opacity: 0 },
  })

  return (
    <>
      <div
        className={`fixed top-0 left-0 min-h-screen w-full bg-black/30 hover:cursor-pointer z-[9999]
			${overlay ? "block" : "hidden"}
			`}
        onClick={() => setOverlay(false)}
      />
      {transition &&
        transition(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className="fixed w-full bg-white z-[9999] overflow-hidden flex flex-col h-full max-h-[calc(100%-100px)]"
              >
                <div className="p-[20px] flex flex-row justify-end sticky top-0 bg-white rounded-tr-xl rounded-tl-xl">
                  <button
                    onClick={() => setOverlay(false)}
                    aria-label="close overlay"
                  >
                    <IconContext.Provider
                      value={{
                        className: `w-[32px] h-[32px] ${themeClassBuilder({
                          color,
                          el: "text",
                        })}`,
                      }}
                    >
                      <AiOutlineCloseCircle />
                    </IconContext.Provider>
                  </button>
                </div>
                <div className={`overflow-auto relative md:flex-grow`}>
                  <ContactForm />
                </div>
              </animated.div>
            )
        )}
    </>
  )
}

export default Overlay
