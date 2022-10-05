import React from "react"
import style from "../../styles/Statistics.module.css"
import { Col, Container, Row } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"

export const Statistics = () => {
  const { t } = useTranslation()

  const data = [
    { id: "1", value: "4+", description: t("common:StatisticsSection.card1.description") },
    { id: "2", value: "54+", description: t("common:StatisticsSection.card2.description") },
    { id: "3", value: "8+", description: t("common:StatisticsSection.card3.description") },
    { id: "4", value: "42+", description: t("common:StatisticsSection.card4.description") }
  ]
  return (
    <section id={"statistics"} className={style.statistics}>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <Row>
            <Col md={3} xs={6} className={style.columnWrapper}>
              <h3 className={style.title}>{data[0].value}</h3>
              <p className={style.description}>{data[0].description}</p>
            </Col>
            <Col md={3} xs={6} className={style.columnWrapper}>
              <h3 className={style.title}>{data[1].value}</h3>
              <p className={style.description}>{data[1].description}</p>
            </Col>
            <Col md={3} xs={6} className={style.columnWrapper}>
              <h3 className={style.title}>{data[2].value}</h3>
              <p className={style.description}>{data[2].description}</p>
            </Col>
            <Col md={3} xs={6} className={style.columnWrapper}>
              <h3 className={style.title}>{data[3].value}</h3>
              <p className={style.description}>{data[3].description}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}
