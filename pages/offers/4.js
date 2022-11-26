import Contact from "../../sections/Contact/Contact"
import { Footer } from "../../sections/Footer/Footer"
import { Row, Col, Container } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import style from "../../styles/Offers.module.css"

export default function App() {
  const { t } = useTranslation()
  return (
    <div id={"landing-page"}>
      <section id={"offer4"} className={`default-container`}>
        <Container fluid={"xxl"}>
          <Container fluid={"xl"}>
            <h1 className={style.title1} style={{ marginBottom: 0 }}>
              {t("offers:offer4.title")}
            </h1>
            <h1 className={style.title1} style={{ marginTop: 0, paddingTop: 0 }}>
              {t("offers:offer4.subTitle1")}
            </h1>
            <p className={style.subTitle} style={{ textAlign: "center", fontWeight: 600 }}>
              {t("offers:offer4.subTitle")}
            </p>
            <Row align="center">
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer4.section1.title")}</p>
                <li className={style.li}>{t("offers:offer4.section1.description1")}</li>
                <li className={style.li}>{t("offers:offer4.section1.description2")}</li>
                <li className={style.li}>{t("offers:offer4.section1.description3")}</li>
                <li className={style.li}>{t("offers:offer4.section1.description4")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer4.section2.title")}</p>
                <li className={style.li}>{t("offers:offer4.section2.description1")}</li>
                <li className={style.li}>{t("offers:offer4.section2.description2")}</li>
                <li className={style.li}>{t("offers:offer4.section2.description3")}</li>
                <li className={style.li}>{t("offers:offer4.section2.description4")}</li>
                <li className={style.li}>{t("offers:offer4.section2.description5")}</li>
                <li className={style.li}>{t("offers:offer4.section2.description6")}</li>
                <li className={style.li}>{t("offers:offer4.section2.description7")}</li>
                <li className={style.li}>{t("offers:offer4.section2.description8")}</li>
                <li className={style.li}>{t("offers:offer4.section2.description9")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer4.section3.title")}</p>
                <li className={style.li}>{t("offers:offer4.section3.description1")}</li>
                <li className={style.li}>{t("offers:offer4.section3.description2")}</li>
                <li className={style.li}>{t("offers:offer4.section3.description3")}</li>
                <li className={style.li}>{t("offers:offer4.section3.description4")}</li>
                <li className={style.li}>{t("offers:offer4.section3.description5")}</li>
                <li className={style.li}>{t("offers:offer4.section3.description6")}</li>
                <li className={style.li}>{t("offers:offer4.section3.description7")}</li>
                <li className={style.li}>{t("offers:offer4.section3.description8")}</li>
              </Col>
            </Row>
            <Row style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer4.section4.title")}</p>
                <li className={style.li}>{t("offers:offer4.section4.description1")}</li>
                <li className={style.li}>{t("offers:offer4.section4.description2")}</li>
                <li className={style.li}>{t("offers:offer4.section4.description3")}</li>
                <li className={style.li}>{t("offers:offer4.section4.description4")}</li>
                <li className={style.li}>{t("offers:offer4.section4.description5")}</li>
                <li className={style.li}>{t("offers:offer4.section4.description6")}</li>
                <li className={style.li}>{t("offers:offer4.section4.description7")}</li>
                <li className={style.li}>{t("offers:offer4.section4.description8")}</li>
                <p className={`${style.offer} ${style.time}`}>{t("offers:offer4.time").toUpperCase()}</p>
                <p className={style.offer}>{t("offers:offer4.group").toUpperCase()}</p>
                <p className={style.offer}>{t("offers:offer4.price").toUpperCase()}</p>
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
