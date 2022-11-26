import { Footer } from "../../sections/Footer/Footer"
import { Row, Col, Container } from "react-bootstrap"
import style from "../../styles/Experts.module.css"
import useTranslation from "next-translate/useTranslation"

export default function App() {
  const { t } = useTranslation()

  return (
    <div id={"landing-page"}>
      <section id={"offer1"} className={`default-container`}>
        <Container fluid={"xxl"}>
          <Container fluid={"xl"}>
            <Row id={"1"} className={style.rowWrapper}>
              <h1 className={style.title}>{t("experts:expert1.title")}</h1>
              <Col lg="4" className={style.imageWrapperCol}>
                <img src={"/assets/images/png/team/image1.png"} className={style.imageRow} alt={"image1"} />
              </Col>
              <Col lg="8">
                <p className={style.descriptionInfo}>{t("experts:expert1.description1")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert1.description2")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert1.description3")}</p>
              </Col>
              <Col xs="12">
                <p className={style.descriptionInfo}>{t("experts:expert1.description4")}</p>
              </Col>
            </Row>
            <Row id={"2"} className={style.rowWrapper}>
              <h1 className={style.title}>{t("experts:expert2.title")}</h1>
              <Col lg="4" className={style.imageWrapperCol}>
                <img src={"/assets/images/png/team/image2.png"} className={style.imageRow} alt={"image2"} />
              </Col>
              <Col lg="8">
                <p className={style.descriptionInfo}>{t("experts:expert2.description1")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert2.description2")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert2.description3")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert2.description4")}</p>
              </Col>
              <Col xs="12">
                <p className={style.descriptionInfo}>{t("experts:expert2.description5")}</p>
              </Col>
            </Row>
            <Row id={"3"} className={style.rowWrapper}>
              <h1 className={style.title}>{t("experts:expert3.title")}</h1>
              <Col lg="4" className={style.imageWrapperCol}>
                <img src={"/assets/images/png/team/image3.png"} className={style.imageRow} alt={"image3"} />
              </Col>
              <Col lg="8">
                <p className={style.descriptionInfo}>{t("experts:expert3.description1")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert3.description2")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert3.description3")}</p>
              </Col>
              <Col xs="12">
                <p className={style.descriptionInfo}>{t("experts:expert3.description4")}</p>
              </Col>
            </Row>
            <Row id={"4"} className={style.rowWrapper}>
              <h1 className={style.title}>{t("experts:expert4.title")}</h1>
              <Col lg="4" className={style.imageWrapperCol}>
                <img src={"/assets/images/png/team/image4.png"} className={style.imageRow} alt={"image4"} />
              </Col>
              <Col lg="8">
                <p className={style.descriptionInfo}>{t("experts:expert4.description1")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert4.description2")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert4.description3")}</p>
              </Col>
              <Col xs="12">
                <p className={style.descriptionInfo}>{t("experts:expert4.description4")}</p>
              </Col>
            </Row>
            <Row id={"5"} className={style.rowWrapper}>
              <h1 className={style.title}>{t("experts:expert5.title")}</h1>
              <Col lg="4" className={style.imageWrapperCol}>
                <img src={"/assets/images/png/team/image5.png"} className={style.imageRow} alt={"image5"} />
              </Col>
              <Col lg="8">
                <p className={style.descriptionInfo}>{t("experts:expert5.description1")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert5.description2")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert5.description3")}</p>
              </Col>
              <Col xs="12">
                <p>{t("experts:expert5.description4")}</p>
              </Col>
            </Row>
            <Row id={"6"} className={style.rowWrapper}>
              <h1 className={style.title}>{t("experts:expert6.title")}</h1>
              <Col lg="4" className={style.imageWrapperCol}>
                <img src={"/assets/images/png/team/image6.png"} className={style.imageRow} alt={"image6"} />
              </Col>
              <Col lg="8">
                <p className={style.descriptionInfo}>{t("experts:expert6.description1")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert6.description2")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert6.description3")}</p>
              </Col>
              <Col xs="12">
                <p className={style.descriptionInfo}>{t("experts:expert6.description4")}</p>
              </Col>
            </Row>
            <Row id={"7"} className={style.rowWrapper}>
              <h1 className={style.title}>{t("experts:expert7.title")}</h1>
              <Col lg="4" className={style.imageWrapperCol}>
                <img src={"/assets/images/png/team/image7.png"} className={style.imageRow} alt={"image7"} />
              </Col>
              <Col lg="8">
                <p className={style.descriptionInfo}>{t("experts:expert7.description1")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert7.description2")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert7.description3")}</p>
              </Col>
              <Col xs="12">
                <p className={style.descriptionInfo}>{t("experts:expert7.description4")}</p>
              </Col>
            </Row>
            <Row id={"8"} className={style.rowWrapper}>
              <h1 className={style.title}>{t("experts:expert8.title")}</h1>
              <Col lg="4" className={style.imageWrapperCol}>
                <img src={"/assets/images/png/team/image8.png"} className={style.imageRow} alt={"image8"} />
              </Col>
              <Col lg="8">
                <p className={style.descriptionInfo}>{t("experts:expert8.description1")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert8.description2")}</p>
                <p className={style.descriptionInfo}>{t("experts:expert8.description3")}</p>
              </Col>
              <Col xs="12">
                <p className={style.descriptionInfo}>{t("experts:expert8.description4")}</p>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <Footer />
    </div>
  )
}
