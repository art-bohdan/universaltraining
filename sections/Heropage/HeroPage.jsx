import React from "react"
import style from "../../styles/HeroPage.module.css"
import { Col, Container, Row } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import { CustomButton } from "../../components/CustomButton"

export const HeroPage = () => {
  const { t } = useTranslation()

  return (
    <section id={"heroPage"} className={`${style.heroPage} default-container`}>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <Row>
            <Col md={{ span: 6 }} className={style.heroPageWrapperText}>
              <span className={style.title}>{t("common:HeroSection.title")}</span>
              <p className={style.description}>{t("common:HeroSection.description")}</p>
              <CustomButton title={t("common:HeroSection.checkOffer")} />
            </Col>
            <Col md={{ span: 6 }}>
              <img
                className={style.heroPageImage}
                src={"/assets/images/png/hands.png"}
                alt={"hands"}
                width={799}
                height={891}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}
