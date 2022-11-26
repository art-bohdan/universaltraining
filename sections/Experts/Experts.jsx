import React from "react"
import useTranslation from "next-translate/useTranslation"
import Slider from "react-slick"
import style from "../../styles/Experts.module.css"
import { Container } from "react-bootstrap"
import { CustomCard } from "./CustomCard"

const Experts = () => {
  const { t } = useTranslation()

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
      position: t("common:ExpertsSection.card4.position"),
      name: t("common:ExpertsSection.card4.name"),
      src: "/assets/images/png/team/image4.png"
    },
    {
      id: "5",
      position: t("common:ExpertsSection.card5.position"),
      name: t("common:ExpertsSection.card5.name"),
      src: "/assets/images/png/team/image5.png"
    },
    {
      id: "6",
      position: t("common:ExpertsSection.card6.position"),
      name: t("common:ExpertsSection.card6.name"),
      src: "/assets/images/png/team/image6.png"
    },
    {
      id: "7",
      position: t("common:ExpertsSection.card7.position"),
      name: t("common:ExpertsSection.card7.name"),
      src: "/assets/images/png/team/image7.png"
    },
    {
      id: "8",
      position: t("common:ExpertsSection.card8.position"),
      name: t("common:ExpertsSection.card8.name"),
      src: "/assets/images/png/team/image8.png"
    }
  ]

  const sliderSettings = {
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    dots: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
          cemterMode: true,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
          cemterMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section id={"experts"} className={`${style.experts} default-container`}>
      <div className={style.customBackground} />
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <h1 className={style.title}>{t("common:ExpertsSection.ExpertsTitle").toUpperCase()}</h1>
          <Slider {...sliderSettings} className={style.sliderWrapper}>
            {data.map((data) => (
              <CustomCard key={data.id} name={data.name} position={data.position} src={data.src} id={data.id} />
            ))}
          </Slider>
          <p className={style.description}>{t("common:ExpertsSection.description")}</p>
        </Container>
      </Container>
    </section>
  )
}

export default Experts
