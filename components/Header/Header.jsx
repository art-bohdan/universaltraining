import React from "react"
import Nav from "./Nav"
import { Logo } from "./Logo"
import { SelectorLanguage } from "../SelectorLanguage"
import style from "../../styles/Header.module.css"
import { MobileSidebar } from "./MobileSidebar"

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)

  return (
    <section id="navbar">
      <nav className={`${style.header} desktop-flex desktop`}>
        <Logo />
        <Nav />
        <SelectorLanguage />
      </nav>
      <nav className={`${style.header} mobile-flex mobile hidden`}>
        <img
          alt="hamburger"
          src="/assets/images/svg/hamburger.svg"
          className="hamburger mobile-block"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        />
        <MobileSidebar setIsMobileNavOpen={setIsMobileNavOpen} isMobileNavOpen={isMobileNavOpen} />
      </nav>
    </section>
  )
}

export default Header
