import React from "react"
import useTranslation from "next-translate/useTranslation"
import Slider from "react-slick"
import style from "../../styles/Experts.module.css"
import { Container } from "react-bootstrap"
import { CustomCard } from "./CustomCard"
import { useMediaQuery } from "@material-ui/core"
import { Col } from "react-bootstrap"

const Experts = () => {
  const { t } = useTranslation()
  const IsTabletOrPhone = useMediaQuery("(max-width:1280px)")

  const data = [
    {
      id: "1",
      position: t("common:ExpertsSection.card1.position"),
      name: t("common:ExpertsSection.card1.name"),
      src: "/assets/images/png/team/image1.png"
    },
    {
      id: "2",
      position: t("common:ExpertsSection.card2.position"),
      name: t("common:ExpertsSection.card2.name"),
      src: "/assets/images/png/team/image2.png"
    },
    {
      id: "3",
      position: t("common:ExpertsSection.card3.position"),
      name: t("common:ExpertsSection.card3.name"),
      src: "/assets/images/png/team/image3.png"
    },
    {
      id: "4",
      position: t("common:ExpertsSection.card3.position"),
      name: t("common:ExpertsSection.card3.name"),
      src: "/assets/images/png/team/image3.png"
    },
    {
      id: "5",
      position: t("common:ExpertsSection.card3.position"),
      name: t("common:ExpertsSection.card3.name"),
      src: "/assets/images/png/team/image3.png"
    },
    {
      id: "6",
      position: t("common:ExpertsSection.card3.position"),
      name: t("common:ExpertsSection.card3.name"),
      src: "/assets/images/png/team/image3.png"
    }
  ]

  const sliderSettings = {
    infinite: true,
    className: "slider variable-width",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false
  }

  return (
    <section id={"experts"} className={`${style.experts} default-container`}>
      <div className={style.customBackground} />
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <h1 className={style.title}>{t("common:ExpertsSection.ExpertsTitle").toUpperCase()}</h1>
          <Slider {...sliderSettings}>
            {data.map((data) => (
              <CustomCard key={data.id} name={data.name} position={data.position} src={data.src} />
            ))}
          </Slider>
          <p className={style.description}>{t("common:ExpertsSection.description")}</p>
        </Container>
      </Container>
    </section>
  )
}

export default Experts
