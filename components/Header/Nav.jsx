import React from "react"
import navStyles from "../../styles/Nav.module.css"
import useTranslation from "next-translate/useTranslation"
import ActiveLink from "./ActiveLink"

const Nav = () => {
  const [selectedHashLink, setSelectedHasLink] = React.useState("")
  const { t } = useTranslation()

  return (
    <div className={navStyles.nav}>
      <ActiveLink activeClassName={selectedHashLink === "about" ? navStyles.activeLink : ""} href="#about">
        <a onClick={() => setSelectedHasLink("about")}> {t("common:AboutSection.About")}</a>
      </ActiveLink>
      <ActiveLink activeClassName={selectedHashLink === "offers" ? navStyles.activeLink : ""} href="#offers">
        <a onClick={() => setSelectedHasLink("offers")}>{t("common:OffersSection.Offers")}</a>
      </ActiveLink>
      <ActiveLink activeClassName={selectedHashLink === "experts" ? navStyles.activeLink : ""} href="#experts">
        <a onClick={() => setSelectedHasLink("experts")}>{t("common:ExpertsSection.Experts")}</a>
      </ActiveLink>
      <ActiveLink activeClassName={selectedHashLink === "feedback" ? navStyles.activeLink : ""} href="#feedback">
        <a onClick={() => setSelectedHasLink("feedback")}>{t("common:FeedbackSection.Feedback")}</a>
      </ActiveLink>
      <ActiveLink activeClassName={selectedHashLink === "contact" ? navStyles.activeLink : ""} href="#contact">
        <a onClick={() => setSelectedHasLink("contact")}>{t("common:ContactSection.Contact")}</a>
      </ActiveLink>
    </div>
  )
}

export default Nav
