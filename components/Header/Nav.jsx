import React from "react"
import navStyles from "../../styles/Nav.module.css"
import useTranslation from "next-translate/useTranslation"
import ActiveLink from "./ActiveLink"
import { Context } from "../../context/Context"
import { useRouter } from "next/router"

const Nav = () => {
  const { selectedHashLink, setSelectedHasLink } = React.useContext(Context)
  const { t } = useTranslation()
  const router = useRouter()

  const path = router.pathname
  console.log(selectedHashLink)
  return (
    <div className={navStyles.nav}>
      <ActiveLink href="/#about">
        <a className={selectedHashLink === "about" ? navStyles.active : ""} onClick={() => setSelectedHasLink("about")}>
          {t("common:AboutSection.About").toUpperCase()}
        </a>
      </ActiveLink>
      <ActiveLink href="/#offers">
        <a
          className={selectedHashLink === "offers" || path.includes("offers") ? navStyles.active : ""}
          onClick={() => setSelectedHasLink("offers")}
        >
          {t("common:OffersSection.Offers").toUpperCase()}
        </a>
      </ActiveLink>
      <ActiveLink href="/#experts">
        <a
          className={selectedHashLink === "experts" || path.includes("experts") ? navStyles.active : ""}
          onClick={() => setSelectedHasLink("experts")}
        >
          {t("common:ExpertsSection.Experts").toUpperCase()}
        </a>
      </ActiveLink>
      <ActiveLink href="/#feedback">
        <a
          className={selectedHashLink === "feedback" ? navStyles.active : ""}
          onClick={() => setSelectedHasLink("feedback")}
        >
          {t("common:FeedbackSection.Feedback").toUpperCase()}
        </a>
      </ActiveLink>
      <ActiveLink href="/#contact">
        <a
          className={selectedHashLink === "contact" ? navStyles.active : ""}
          onClick={() => setSelectedHasLink("contact")}
        >
          {t("common:ContactSection.Contact").toUpperCase()}
        </a>
      </ActiveLink>
    </div>
  )
}

export default Nav
