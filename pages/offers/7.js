import Contact from "../../sections/Contact/Contact"
import { Footer } from "../../sections/Footer/Footer"
import { Container } from "react-bootstrap"
import useTranslation from "next-translate/useTranslation"
import style from "../../styles/Offers.module.css"

export default function App() {
  const { t } = useTranslation()
  return (
    <div id={"landing-page"}>
      <section id={"offer7"} className={`default-container`}>
        <Container fluid={"xxl"}>
          <Container fluid={"xl"}>
            <h1 className={style.title1}>{t("offers:offer7.title")}</h1>
            <p className={style.subTitle} style={{ textAlign: "center", fontWeight: 600 }}>
              {t("offers:offer7.subTitle")}
            </p>
            <p className={style.subTitle}>{t("offers:offer7.description1")}</p>
            <p className={style.subTitle}>{t("offers:offer7.description2")}</p>
            <p className={style.subTitle}>{t("offers:offer7.description3")}</p>
            <p className={style.subTitle}>{t("offers:offer7.description4")}</p>
            <p className={style.subTitle}>{t("offers:offer7.description5")}</p>
            <p style={{ fontSize: 24 }}>{t("offers:offer7.description6")}</p>
            <p className={style.marginTopMin} style={{ fontSize: 24 }}>
              {t("offers:offer7.description7")}
            </p>
            <p style={{ fontSize: 24 }}>{t("offers:offer7.description8")}</p>
            <p className={style.marginTopMin} style={{ fontSize: 24 }}>
              {t("offers:offer7.description9")}
            </p>
            <p style={{ fontSize: 24 }}>{t("offers:offer7.description10")}</p>
            <p style={{ fontSize: 24 }}>{t("offers:offer7.description11")}</p>
            <p style={{ fontSize: 24 }}>{t("offers:offer7.description12")}</p>
            <p className={style.marginTopMin} style={{ fontSize: 24 }}>
              {t("offers:offer7.description13")}
            </p>
            <p style={{ fontSize: 24 }}>{t("offers:offer7.description14")}</p>
            <p style={{ fontSize: 24 }}>{t("offers:offer7.description15")}</p>
            <p style={{ fontSize: 24 }} className={style.marginTopMin}>
              {t("offers:offer7.description16")}
            </p>
            <p className={style.marginTop} style={{ fontSize: 24 }}>
              {t("offers:offer7.description17")}
            </p>
          </Container>
        </Container>
      </section>
      <Contact />
      <Footer />
    </div>
  )
}
