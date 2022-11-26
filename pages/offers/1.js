import Contact from "../../sections/Contact/Contact"
import { Footer } from "../../sections/Footer/Footer"
import { Row, Col, Container } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import style from "../../styles/Offers.module.css"

export default function App() {
  const { t } = useTranslation()

  return (
    <div id={"landing-page"}>
      <section id={"offer1"} className={`default-container`}>
        <Container fluid={"xxl"}>
          <Container fluid={"xl"}>
            <h1 className={style.title1}>{t("offers:offer1.title")}</h1>
            <p className={style.subTitle} style={{ textAlign: "center", fontWeight: 600 }}>
              {t("offers:offer1.subTitle")}
            </p>
            <Row align="center">
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer1.wstep.title")}</p>
                <li className={style.li}>{t("offers:offer1.wstep.description1")}</li>
                <li className={style.li}>{t("offers:offer1.wstep.description2")}</li>
                <li className={style.li}>{t("offers:offer1.wstep.description3")}</li>
                <li className={style.li}>{t("offers:offer1.wstep.description4")}</li>
                <li className={style.li}>{t("offers:offer1.wstep.description5")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer1.section1.title")}</p>
                <li className={style.li}>{t("offers:offer1.section1.description1")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description2")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description3")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description4")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description5")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description6")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description7")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description8")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description9")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description10")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description11")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description12")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description13")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description14")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description15")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description16")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description17")}</li>
                <li className={style.li}>{t("offers:offer1.section1.description18")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer1.section2.title")}</p>
                <li className={style.li}>{t("offers:offer1.section2.description1")}</li>
                <li className={style.li}>{t("offers:offer1.section2.description2")}</li>
                <li className={style.li}>{t("offers:offer1.section2.description3")}</li>
                <li className={style.li}>{t("offers:offer1.section2.description4")}</li>
                <li className={style.li}>{t("offers:offer1.section2.description5")}</li>
                <li className={style.li}>{t("offers:offer1.section2.description6")}</li>
                <li className={style.li}>{t("offers:offer1.section2.description7")}</li>
                <li className={style.li}>{t("offers:offer1.section2.description8")}</li>
                <li className={style.li}>{t("offers:offer1.section2.description9")}</li>
                <li className={style.li}>{t("offers:offer1.section2.description10")}</li>
              </Col>
            </Row>
            <Row style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <Col xl="6" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer1.section3.title")}</p>
                <li className={style.li}>{t("offers:offer1.section3.description1")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description2")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description3")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description4")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description5")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description6")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description7")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description8")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description9")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description10")}</li>
                <li className={style.li}>{t("offers:offer1.section3.description11")}</li>
                <p className={`${style.offer} ${style.time}`}>{t("offers:offer1.time").toUpperCase()}</p>
                <p className={style.offer}>{t("offers:offer1.group").toUpperCase()}</p>
                <p className={style.offer}>{t("offers:offer1.price").toUpperCase()}</p>
              </Col>
              <Col xl="6" className={style.imageColumn}>
                <img src={"/assets/images/png/offers/planet.png"} alt="planet" className={style.imageOffer1} />
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
