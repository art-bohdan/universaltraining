import React from "react"
import useTranslation from "next-translate/useTranslation"
import { Col, Container, Row } from "react-bootstrap"
import style from "../../styles/Offers.module.css"
import { OffersCard } from "./OffersCard"

const Offers = () => {
  const { t } = useTranslation()

  const offersData = [
    { id: "1", title: t("common:OffersSection.card1.title"), src: "/assets/images/png/offers/image1.png" },
    { id: "2", title: t("common:OffersSection.card2.title"), src: "/assets/images/png/offers/image2.png" },
    { id: "3", title: t("common:OffersSection.card5.title"), src: "/assets/images/png/offers/image5.png" },
    { id: "4", title: t("common:OffersSection.card4.title"), src: "/assets/images/png/offers/image4.png" },
    { id: "5", title: t("common:OffersSection.card3.title"), src: "/assets/images/png/offers/image3.png" },
    { id: "6", title: t("common:OffersSection.card6.title"), src: "/assets/images/png/offers/image6.png" },
    { id: "7", title: t("common:OffersSection.card7.title"), src: "/assets/images/png/offers/image7.png" },
    { id: "8", title: t("common:OffersSection.card8.title"), src: "/assets/images/png/offers/image8.png" }
  ]

  return (
    <section id={"offers"} className={`${style.offers} default-container`}>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <h1 className={style.title}>{t("common:OffersSection.OffersTitle").toUpperCase()}</h1>
          <p className={`${style.description} ${style.marginBottom}`}>{t("common:OffersSection.OffersDescription")}</p>
          <img src={"/assets/images/png/offers/offersHand.png"} alt="hand" className={style.image} />
          <Row style={{ justifyContent: "center" }}>
            {offersData.map((offer) => (
              <Col key={offer.id} xs={12} md={6} lg={6} className={style.itemCenter}>
                <OffersCard src={offer.src} title={offer.title} id={offer.id} />
              </Col>
            ))}
          </Row>
          <h1 className={`${style.title} ${style.consultationTitle}`}>
            {t("common:OffersSection.OffersConsultation").toUpperCase()}
          </h1>
          <p className={style.description}>{t("common:OffersSection.OffersConsultationDescription")}</p>
        </Container>
      </Container>
    </section>
  )
}

export default Offers
