import React from "react"
import style from "../../styles/Feedback.module.css"
import { Container } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import Slider from "react-slick"
import { CustomCardFeedback } from "./CustomCardFeedback"

const Companies = () => {
  const { t } = useTranslation()

  const data = [
    {
      id: "1",
      src: "/assets/images/png/feedback/companies/company1.png"
    },
    {
      id: "2",
      src: "/assets/images/png/feedback/companies/company2.png"
    },
    {
      id: "3",
      src: "/assets/images/png/feedback/companies/company3.png"
    },
    {
      id: "4",
      src: "/assets/images/png/feedback/companies/company4.png"
    },
    {
      id: "5",
      src: "/assets/images/png/feedback/companies/company5.png"
    },
    {
      id: "6",
      src: "/assets/images/png/feedback/companies/company6.png"
    },
    {
      id: "7",
      src: "/assets/images/png/feedback/companies/company7.png"
    },
    {
      id: "8",
      src: "/assets/images/png/feedback/companies/company8.png"
    },
    {
      id: "9",
      src: "/assets/images/png/feedback/companies/company9.png"
    },
    {
      id: "10",
      src: "/assets/images/png/feedback/companies/company10.png"
    },
    {
      id: "11",
      src: "/assets/images/png/feedback/companies/company11.png"
    },
    {
      id: "12",
      src: "/assets/images/png/feedback/companies/company12.png"
    },
    {
      id: "13",
      src: "/assets/images/png/feedback/companies/company13.png"
    },
    {
      id: "14",
      src: "/assets/images/png/feedback/companies/company14.png"
    },
    {
      id: "15",
      src: "/assets/images/png/feedback/companies/company15.png"
    },
    {
      id: "16",
      src: "/assets/images/png/feedback/companies/company16.png"
    }
  ]

  const sliderSettings = {
    speed: 500,
    cemterMode: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    centerPadding: "100px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 3,
          cemterMode: true,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
          cemterMode: true,
          slidesToScroll: 2
        }
      }
    ]
  }
  return (
    <section id={"feedback"} className={`${style.company} default-container`}>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <h1 className={style.companySectionTitle}>{t("common:CompaniesSection.CompaniesTitle").toUpperCase()}</h1>
          <Slider {...sliderSettings} className={style.slider}>
            {data.map((data) => (
              <CustomCardFeedback key={data.id} id={data.id} src={data.src} />
            ))}
          </Slider>
        </Container>
      </Container>
    </section>
  )
}

export default Companies
