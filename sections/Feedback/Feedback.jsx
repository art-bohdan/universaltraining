import React from "react"
import style from "../../styles/Feedback.module.css"
import { Container } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import Slider from "react-slick"
import { CustomCardFeedback } from "./CustomCardFeedback"

const Feedback = () => {
  const { t } = useTranslation()

  const data = [
    {
      id: "1",
      src: "/assets/images/png/feedback/urk.png"
    },
    {
      id: "2",
      src: "/assets/images/png/feedback/PGE.png"
    },
    {
      id: "3",
      src: "/assets/images/png/feedback/ppl.png"
    },
    {
      id: "4",
      src: "/assets/images/png/feedback/dolny.png"
    },
    {
      id: "2",
      src: "/assets/images/png/feedback/PGE.png"
    },
    {
      id: "3",
      src: "/assets/images/png/feedback/ppl.png"
    },
    {
      id: "4",
      src: "/assets/images/png/feedback/dolny.png"
    }
  ]
  const sliderSettings = {
    infinite: true,
    className: "slider variable-width",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: false
  }

  return (
    <section id={"feedback"} className={`${style.feedback} default-container`}>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <h1 className={style.title}>{t("common:FeedbackSection.FeedbackTitle").toUpperCase()}</h1>
          <Slider {...sliderSettings}>
            {data.map((data) => (
              <CustomCardFeedback key={data.id} id={data.id} src={data.src} />
            ))}
          </Slider>
        </Container>
      </Container>
    </section>
  )
}

export default Feedback
