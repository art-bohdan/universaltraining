import React from "react"
import styled from "styled-components"
import useTranslation from "next-translate/useTranslation"
import ActiveLink from "./ActiveLink"
import navStyles from "../../styles/Nav.module.css"

const MobileLinksContainer = styled.nav`
  margin-top: 65px;
  height: 0;
  width: 100%;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  background: transparent;
  backdrop-filter: blur(15px);
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
  flex-direction: column;
  align-items: flex-start;
`
const MobileLink = styled.span`
  padding: 16px 0;
  width: 100%;
  color: #818a8a;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s linear;
  display: flex;
  justify-content: flex-start;

  &:hover {
    filter: brightness(1.2);
  }
`

export const MobileSidebar = ({ setIsMobileNavOpen, isMobileNavOpen }) => {
  const [activeClasses, setActiveClasses] = React.useState("mobile-collapsed collapsing")
  const { t } = useTranslation()
  console.log(activeClasses, "activeClasses")
  console.log(isMobileNavOpen, "isMobileNavOpen")
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
        <MobileLink
          onClick={() => {
            setIsMobileNavOpen(false)
          }}
        >
          <ActiveLink href="#about" activeClassName={navStyles.link}>
            <a> {t("common:AboutSection.About")}</a>
          </ActiveLink>
        </MobileLink>
        <MobileLink onClick={() => setIsMobileNavOpen(false)}>
          <ActiveLink href="#offers" activeClassName={navStyles.link}>
            <a>{t("common:OffersSection.Offers")}</a>
          </ActiveLink>
        </MobileLink>
        <MobileLink onClick={() => setIsMobileNavOpen(false)}>
          <ActiveLink href="#experts" activeClassName={navStyles.link}>
            <a>{t("common:ExpertsSection.Experts")}</a>
          </ActiveLink>
        </MobileLink>
        <MobileLink onClick={() => setIsMobileNavOpen(false)}>
          <ActiveLink href="#feedback" activeClassName={navStyles.link}>
            <a>{t("common:FeedbackSection.Feedback")}</a>
          </ActiveLink>
        </MobileLink>
        <MobileLink onClick={() => setIsMobileNavOpen(false)}>
          <ActiveLink href="#contact" activeClassName={navStyles.link}>
            <a>{t("common:ContactSection.Contact")}</a>
          </ActiveLink>
        </MobileLink>
      </WrapperDiv>
    </MobileLinksContainer>
  )
}
