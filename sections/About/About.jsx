import React from "react"
import { Container } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import style from "../../styles/About.module.css"

const About = () => {
  const { t } = useTranslation()

  return (
    <section id={"about"} className={`${style.about} default-container`}>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <div>
            <h1 className={style.title}>{t("common:AboutSection.About").toUpperCase()}</h1>
            <p className={style.description}>{t("common:AboutSection.AboutDescription")}</p>
            <img src={"/assets/images/png/about/About.png"} alt={"About"} className={style.imageAbout} />
          </div>
        </Container>
      </Container>
    </section>
  )
}

export default About
