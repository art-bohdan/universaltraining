import React from "react"
import style from "../../styles/Feedback.module.css"
import { Row, Col } from "react-bootstrap"

export const CustomFeedback = ({ src, id, description, caption }) => {
  return (
    <Row className={style.card} key={id}>
      <Col xs="12" xl={{ order: "first", span: 8 }} className={style.descriptionWrapper}>
        <p className={style.description}>{description}</p>
        <p className={style.caption}>{caption}</p>
      </Col>
      <Col xs={{ order: "first", span: 12 }} xl="4" className={style.wrapperImage}>
        <img src={src} alt={id} className={style.customFeedbackImage} width={320} />
      </Col>
    </Row>
  )
}
