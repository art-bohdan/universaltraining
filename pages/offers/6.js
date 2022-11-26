import Contact from "../../sections/Contact/Contact"
import { Footer } from "../../sections/Footer/Footer"
import { Row, Col, Container } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import style from "../../styles/Offers.module.css"

export default function App() {
  const { t } = useTranslation()
  return (
    <div id={"landing-page"}>
      <section id={"offer6"} className={`default-container`}>
        <Container fluid={"xxl"}>
          <Container fluid={"xl"}>
            <h1 className={style.title1}>{t("offers:offer6.title")}</h1>
            <p className={style.subTitle} style={{ textAlign: "center", fontWeight: 600 }}>
              {t("offers:offer6.subTitle")}
            </p>
            <Row align="center">
              <Col xl="6" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer6.section1.title")}</p>
                <li className={style.li}>{t("offers:offer6.section1.description1")}</li>
                <li className={style.li}>{t("offers:offer6.section1.description2")}</li>
                <li className={style.li}>{t("offers:offer6.section1.description3")}</li>
              </Col>
              <Col xl="6" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer6.section2.title")}</p>
                <li className={style.li}>{t("offers:offer6.section2.description1")}</li>
                <li className={style.li}>{t("offers:offer6.section2.description2")}</li>
                <li className={style.li}>{t("offers:offer6.section2.description3")}</li>
                <li className={style.li}>{t("offers:offer6.section2.description4")}</li>
                <li className={style.li}>{t("offers:offer6.section2.description5")}</li>
                <li className={style.li}>{t("offers:offer6.section2.description6")}</li>
                <li className={style.li}>{t("offers:offer6.section2.description7")}</li>
              </Col>
              <Col xl="6" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer6.section3.title")}</p>
                <li className={style.li}>{t("offers:offer6.section3.description1")}</li>
                <li className={style.li}>{t("offers:offer6.section3.description2")}</li>
                <li className={style.li}>{t("offers:offer6.section3.description3")}</li>
                <li className={style.li}>{t("offers:offer6.section3.description4")}</li>
                <li className={style.li}>{t("offers:offer6.section3.description5")}</li>
                <li className={style.li}>{t("offers:offer6.section3.description6")}</li>
                <li className={style.li}>{t("offers:offer6.section3.description7")}</li>
                <li className={style.li}>{t("offers:offer6.section3.description8")}</li>
              </Col>
              <Col xl="6" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer6.section4.title")}</p>
                <li className={style.li}>{t("offers:offer6.section4.description1")}</li>
                <li className={style.li}>{t("offers:offer6.section4.description2")}</li>
                <li className={style.li}>{t("offers:offer6.section4.description3")}</li>
                <li className={style.li}>{t("offers:offer6.section4.description4")}</li>
                <li className={style.li}>{t("offers:offer6.section4.description5")}</li>
                <li className={style.li}>{t("offers:offer6.section4.description6")}</li>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <p className={`${style.offer} ${style.time}`}>{t("offers:offer6.time").toUpperCase()}</p>
                <p className={style.offer}>{t("offers:offer6.group").toUpperCase()}</p>
                <p className={style.offer}>{t("offers:offer6.price").toUpperCase()}</p>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <Contact />
      <Footer />
    </div>
  )
}
