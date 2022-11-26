import React from "react"
import { FormCard } from "../../components/FormCard"
import style from "../../styles/Contact.module.css"
import { Col, Container, Row } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id={"contact"} className={`${style.contact} default-container`}>
      <div className={style.customBackground} />
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <h1 className={style.title}>{t("common:ContactSection.title").toUpperCase()}</h1>
          <Row>
            <Col xs={{ span: 12 }} lg={{ order: "first", span: 6 }} className={style.formCenter}>
              <img src={"/assets/images/png/ContactImage.png"} alt={"contact-image"} className={style.image} />
            </Col>
            <Col xs={{ order: "first", span: 12 }} lg="6" className={style.formCenter}>
              <FormCard />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Contact
