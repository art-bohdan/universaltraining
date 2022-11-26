import React from "react"
import style from "../../styles/Feedback.module.css"
import { Container } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import { Carousel } from "react-responsive-carousel"
import { CustomFeedback } from "./CustomFeedback"

const Feedback = () => {
  const { t } = useTranslation()

  const data = [
    {
      id: "1",
      description: t("common:FeedbackSection.card1.description"),
      caption: t("common:FeedbackSection.card1.caption"),
      src: "/assets/images/png/feedback/feedbackcard1.png"
    },
    {
      id: "2",
      description: t("common:FeedbackSection.card2.description"),
      caption: t("common:FeedbackSection.card2.caption"),
      src: "/assets/images/png/feedback/feedbackcard2.png"
    },
    {
      id: "3",
      description: t("common:FeedbackSection.card3.description"),
      caption: t("common:FeedbackSection.card3.caption"),
      src: "/assets/images/png/feedback/feedbackcard3.png"
    },
    {
      id: "4",
      description: t("common:FeedbackSection.card4.description"),
      caption: t("common:FeedbackSection.card4.caption"),
      src: "/assets/images/png/feedback/feedbackcard4.png"
    }
  ]

  return (
    <section id={"feedback"} className={`${style.feedback} default-container`}>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <h1 className={style.title}>{t("common:FeedbackSection.FeedbackTitle").toUpperCase()}</h1>
          <Carousel showArrows={false} showThumbs={false} showStatus={false} emulateTouch={false}>
            {data.map((data) => (
              <CustomFeedback
                key={data.id}
                id={data.id}
                src={data.src}
                description={data.description}
                caption={data.caption}
              />
            ))}
          </Carousel>
        </Container>
      </Container>
    </section>
  )
}

export default Feedback
