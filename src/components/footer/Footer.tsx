import React from "react"
import Twitter from "../../assets/icons/Twitter"
import Linkedin from "../../assets/icons/Linkedin"
import Github from "../../assets/icons/Github"
import Container from "../Container"
import { useGlobalContext } from "../../context/GlobalContext"

const Footer = () => {
  const { color } = useGlobalContext()
  return (
    <footer className="pt-20 pb-10">
      <Container>
        <div className="flex flex-row">
          <p className="p-default !text-gray-400 font-light">
            &copy; Ibrahim Al-Quraishi {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
