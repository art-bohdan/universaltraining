import React from "react"
import styled from "styled-components"
import useTranslation from "next-translate/useTranslation"
import ActiveLink from "./ActiveLink"
import navStyles from "../../styles/Nav.module.css"
import { useRouter } from "next/router"
import { Context } from "../../context/Context"
import { SelectorLanguage } from "../SelectorLanguage"

const MobileLinksContainer = styled.nav`
  margin-top: 70px;
  height: 0;
  width: 100%;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  background: transparent;
  flex-direction: column;
  align-items: center;
  display: flex;
  background-color: var(--main-color);
  position: absolute;
  left: 0;
  top: 0;
  padding: 40px 40px 110px;
  overflow-y: auto;
`

const WrapperDiv = styled.div`
  width: max-content;
  align-self: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MobileLink = styled.span`
  padding: 16px 0;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s linear;
  display: flex;
  justify-content: center;

  &:hover {
    filter: brightness(1.2);
  }
`

export const MobileSidebar = ({ setIsMobileNavOpen, isMobileNavOpen }) => {
  const { t } = useTranslation()
  const [activeClasses, setActiveClasses] = React.useState("mobile-collapsed collapsing")
  const { selectedHashLink, setSelectedHasLink } = React.useContext(Context)
  const router = useRouter()
  const path = router.pathname

  React.useEffect(() => {
    if (isMobileNavOpen) {
      setActiveClasses("mobile-collapsed collapsing")
    } else {
      setTimeout(() => {
        setActiveClasses("mobile-hidden")
      }, 700)
      setActiveClasses("slideUp show")
    }
  }, [isMobileNavOpen])

  return (
    <MobileLinksContainer className={activeClasses}>
      <WrapperDiv>
        <ActiveLink href="/#about">
          <MobileLink
            className={selectedHashLink === "about" ? navStyles.active : ""}
            onClick={() => {
              setSelectedHasLink("about")
              setIsMobileNavOpen(false)
            }}
          >
            {t("common:AboutSection.About")}
          </MobileLink>
        </ActiveLink>

        <ActiveLink href="/#offers">
          <MobileLink
            className={selectedHashLink === "offers" || path.includes("offers") ? navStyles.active : ""}
            onClick={() => {
              setSelectedHasLink("offers")
              setIsMobileNavOpen(false)
            }}
          >
            {t("common:OffersSection.Offers")}
          </MobileLink>
        </ActiveLink>

        <ActiveLink href="/#experts">
          <MobileLink
            className={selectedHashLink === "experts" || path.includes("experts") ? navStyles.active : ""}
            onClick={() => {
              setSelectedHasLink("experts")
              setIsMobileNavOpen(false)
            }}
          >
            {t("common:ExpertsSection.Experts")}
          </MobileLink>
        </ActiveLink>

        <ActiveLink href="/#feedback">
          <MobileLink
            className={selectedHashLink === "feedback" ? navStyles.active : ""}
            onClick={() => {
              setSelectedHasLink("feedback")
              setIsMobileNavOpen(false)
            }}
          >
            {t("common:FeedbackSection.Feedback")}
          </MobileLink>
        </ActiveLink>

        <ActiveLink href="/#contact">
          <MobileLink
            className={selectedHashLink === "contact" ? navStyles.active : ""}
            onClick={() => {
              setSelectedHasLink("contact")
              setIsMobileNavOpen(false)
            }}
          >
            {t("common:ContactSection.Contact")}
          </MobileLink>
        </ActiveLink>

        <SelectorLanguage />
      </WrapperDiv>
    </MobileLinksContainer>
  )
}
