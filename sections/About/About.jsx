import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import style from "../../styles/About.module.css"

const About = () => {
  const { t } = useTranslation()

  return (
    <section id={"about"} className={`${style.about} default-container`}>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <Row>
            <h1 className={style.titleMobile}>{t("common:AboutSection.About")}</h1>
            <Col lg={6} xl={6} xxl={4} className={style.itemCenter}>
              <img className={style.image} src={"/assets/images/png/image_Pavel.png"} alt={"image-about"} />
            </Col>
            <Col lg={6} xl={6} xxl={8} style={{ alignSelf: "center" }}>
              <h1 className={style.titleDesktop}>{t("common:AboutSection.About")}</h1>
              <p className={style.description}>{t("common:AboutSection.AboutDescription")}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default About
