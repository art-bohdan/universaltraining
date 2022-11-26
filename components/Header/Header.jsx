import React from "react"
import Nav from "./Nav"
import { Logo } from "./Logo"
import { Container } from "react-bootstrap"
import { SelectorLanguage } from "../SelectorLanguage"
import { MobileSidebar } from "./MobileSidebar"
import style from "../../styles/Header.module.css"

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)

  return (
    <section id="navbar">
      <nav className={`${style.header} desktop-flex desktop`}>
        <Container fluid={"xxl"} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo />
          <Nav />
          <SelectorLanguage />
        </Container>
      </nav>
      <nav className={`${style.header} mobile-flex mobile hidden`}>
        <Logo />
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
