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
            <h1 className={style.title1}>{t("offers:offer3.title")}</h1>
            <p className={style.subTitle} style={{ textAlign: "center", fontWeight: 600 }}>
              {t("offers:offer3.subTitle").toUpperCase()}
            </p>
            <p className={style.subTitle} style={{ textAlign: "center", fontWeight: 600, marginTop: 50 }}>
              {t("offers:offer3.sub1Title").toUpperCase()}
            </p>
            <Row align="center">
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer3.section1.title")}</p>
                <li className={style.li}>{t("offers:offer3.section1.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section1.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section1.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section1.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section1.description5")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer3.section2.title")}</p>
                <li className={style.li}>{t("offers:offer3.section2.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section2.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section2.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section2.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section2.description5")}</li>
                <li className={style.li}>{t("offers:offer3.section2.description6")}</li>
                <li className={style.li}>{t("offers:offer3.section2.description7")}</li>
                <li className={style.li}>{t("offers:offer3.section2.description8")}</li>
                <li className={style.li}>{t("offers:offer3.section2.description9")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer3.section3.title")}</p>
                <li className={style.li}>{t("offers:offer3.section3.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section3.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section3.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section3.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section3.description5")}</li>
                <li className={style.li}>{t("offers:offer3.section3.description6")}</li>
                <li className={style.li}>{t("offers:offer3.section3.description7")}</li>
                <li className={style.li}>{t("offers:offer3.section3.description8")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle} style={{ marginBottom: 50 }}>
                  {t("offers:offer3.section4.mainTitle").toUpperCase()}
                </p>
                <p className={style.subTitle}>{t("offers:offer3.section4.title")}</p>
                <li className={style.li}>{t("offers:offer3.section4.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section4.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section4.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section4.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section4.description5")}</li>
                <li className={style.li}>{t("offers:offer3.section4.description6")}</li>
                <li className={style.li}>{t("offers:offer3.section4.description7")}</li>
                <li className={style.li}>{t("offers:offer3.section4.description8")}</li>
                <li className={style.li}>{t("offers:offer3.section4.description9")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer3.section5.title")}</p>
                <li className={style.li}>{t("offers:offer3.section5.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section5.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section5.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section5.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section5.description5")}</li>
                <li className={style.li}>{t("offers:offer3.section5.description6")}</li>
                <li className={style.li}>{t("offers:offer3.section5.description7")}</li>
                <li className={style.li}>{t("offers:offer3.section5.description8")}</li>
                <li className={style.li}>{t("offers:offer3.section5.description9")}</li>
                <li className={style.li}>{t("offers:offer3.section5.description10")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p
                  className={style.subTitle}
                  style={{ marginBottom: 50, width: "100%", textAlign: "center", fontWeight: 600 }}
                >
                  {t("offers:offer3.section6.mainTitle").toUpperCase()}
                </p>
                <p className={style.subTitle}>{t("offers:offer3.section6.title")}</p>
                <li className={style.li}>{t("offers:offer3.section6.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section6.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section6.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section6.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section6.description5")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer3.section7.title")}</p>
                <li className={style.li}>{t("offers:offer3.section7.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section7.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section7.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section7.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section7.description5")}</li>
                <li className={style.li}>{t("offers:offer3.section7.description6")}</li>
                <li className={style.li}>{t("offers:offer3.section7.description7")}</li>
                <li className={style.li}>{t("offers:offer3.section7.description8")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer3.section8.title")}</p>
                <li className={style.li}>{t("offers:offer3.section8.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section8.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section8.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section8.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section8.description5")}</li>
                <li className={style.li}>{t("offers:offer3.section8.description6")}</li>
                <li className={style.li}>{t("offers:offer3.section8.description7")}</li>
                <li className={style.li}>{t("offers:offer3.section8.description8")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p
                  className={style.subTitle}
                  style={{ marginBottom: 50, width: "100%", textAlign: "center", fontWeight: 600 }}
                >
                  {t("offers:offer3.section9.mainTitle").toUpperCase()}
                </p>
                <p className={style.subTitle}>{t("offers:offer3.section9.title")}</p>
                <li className={style.li}>{t("offers:offer3.section9.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description5")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description6")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description7")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description8")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description9")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description10")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description11")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description12")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description13")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description14")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description15")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description16")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description17")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description18")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description19")}</li>
                <li className={style.li}>{t("offers:offer3.section9.description20")}</li>
              </Col>
              <Col xl="12" className={style.column}>
                <p className={style.subTitle}>{t("offers:offer3.section10.title")}</p>
                <li className={style.li}>{t("offers:offer3.section10.description1")}</li>
                <li className={style.li}>{t("offers:offer3.section10.description2")}</li>
                <li className={style.li}>{t("offers:offer3.section10.description3")}</li>
                <li className={style.li}>{t("offers:offer3.section10.description4")}</li>
                <li className={style.li}>{t("offers:offer3.section10.description5")}</li>
                <li className={style.li}>{t("offers:offer3.section10.description6")}</li>
                <li className={style.li}>{t("offers:offer3.section10.description7")}</li>
                <li className={style.li}>{t("offers:offer3.section10.description8")}</li>
                <li className={style.li}>{t("offers:offer3.section10.description9")}</li>
                <p className={`${style.offer} ${style.time}`}>{t("offers:offer3.time").toUpperCase()}</p>
                <p className={style.offer}>{t("offers:offer3.group").toUpperCase()}</p>
                <p className={style.offer}>{t("offers:offer3.price").toUpperCase()}</p>
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
