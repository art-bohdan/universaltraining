import React from "react"
import style from "../../styles/HeroPage.module.css"
import { Container, Row, Col } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import { CustomButton } from "../../components/CustomButton"
import { Context } from "../../context/Context"

export const HeroPage = () => {
  const { t } = useTranslation()
  const { setSelectedHasLink } = React.useContext(Context)

  return (
    <section id={"heroPage"} className={`${style.heroPage}`}>
      <Container fluid={"xxl"}>
        <Row className={style.heroPageWrapper}>
          <Col sm={8} className={style.textWrapperColumn}>
            <div className={style.heroPageWrapperText}>
              <h2 className={style.title}>{t("common:HeroSection.title").toUpperCase()}</h2>
              <p className={style.description} style={{ paddingBottom: 0, marginBottom: 0 }}>
                {t("common:HeroSection.description1")}
              </p>
              <p className={style.description}>{t("common:HeroSection.description2")}</p>
              <p className={style.description}>{t("common:HeroSection.description3")}</p>
              <div className={style.buttonWrapper}>
                <CustomButton
                  link={"#offers"}
                  style={{ marginRight: 22 }}
                  title={t("common:HeroSection.checkOffer")}
                  onClick={() => setSelectedHasLink("offers")}
                />
                <CustomButton
                  link={"#contact"}
                  title={t("common:HeroSection.writeToUs")}
                  onClick={() => setSelectedHasLink("contact")}
                />
              </div>
            </div>
          </Col>
          <Col sm={4} className={style.imageWrapper}>
            <img className={style.heroPageImage} src={"/assets/images/png/HeroMainImage.png"} alt={"hands"} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
