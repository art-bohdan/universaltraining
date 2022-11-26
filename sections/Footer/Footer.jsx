import React from "react"
import style from "../../styles/Footer.module.css"
import { Col, Container, Row } from "react-bootstrap"
import ActiveLink from "../../components/Header/ActiveLink"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import Divider from "@mui/material/Divider"
import { Context } from "../../context/Context"

export const Footer = () => {
  const { t } = useTranslation()
  const { setSelectedHasLink } = React.useContext(Context)

  return (
    <section id={"offers"} className={style.footer}>
      <Divider
        textAlign="left"
        className={style.divider}
        style={{ marginBottom: 27, borderColor: "var(--white-color)" }}
      >
        <div className={style.logoWrapper}>
          <img src={"/assets/images/png/earth.png"} alt="earth" className={style.footerLogo} />
          <span className={style.logoName}>{t("common:HeroSection.companyName")}</span>
        </div>
      </Divider>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <Row style={{ marginTop: 33 }}>
            <Col
              xs={{ span: "12", order: "last" }}
              sm={{ span: "6", order: "first" }}
              md={{ span: "2", order: "first" }}
            >
              <div className={style.imageWrapper}>
                <div>
                  <Image src={"/assets/images/png/footer/ORLY.png"} width={86} height={97} alt={"Orly"} />
                </div>
                <div style={{ marginLeft: 15 }}>
                  <Image src={"/assets/images/png/footer/VCC.png"} width={87} height={97} alt={"VCC"} />
                </div>
              </div>
            </Col>

            <Col xs="12" sm="6" md="3">
              <div className={style.col}>
                <p className={style.title}>{t("common:FooterSection.col2.title")}</p>
                <span className={style.subTitle}>{t("common:FooterSection.col2.row1")}</span>
                <span className={style.subTitle}>{t("common:FooterSection.col2.row2")}</span>
                <span className={style.subTitle}>{t("common:FooterSection.col2.row3")}</span>
                <span className={style.subTitle}>{t("common:FooterSection.col2.row4")}</span>
              </div>
            </Col>

            <Col xs="12" sm="6" md="2">
              <div className={style.col}>
                <p className={style.title}>{t("common:FooterSection.col1.title")}</p>
                <ActiveLink href="/#about">
                  <a className={style.subTitle} onClick={() => setSelectedHasLink("about")}>
                    {t("common:AboutSection.About")}
                  </a>
                </ActiveLink>
                <ActiveLink href="/#offers">
                  <a className={style.subTitle} onClick={() => setSelectedHasLink("offers")}>
                    {t("common:OffersSection.Offers")}
                  </a>
                </ActiveLink>
                <ActiveLink href="/#experts">
                  <a className={style.subTitle} onClick={() => setSelectedHasLink("experts")}>
                    {t("common:ExpertsSection.Experts")}
                  </a>
                </ActiveLink>
                <ActiveLink href="/#feedback">
                  <a className={style.subTitle} onClick={() => setSelectedHasLink("feedback")}>
                    {t("common:FeedbackSection.Feedback")}
                  </a>
                </ActiveLink>
                <ActiveLink href="/#contact">
                  <a className={style.subTitle} onClick={() => setSelectedHasLink("contact")}>
                    {t("common:ContactSection.Contact")}
                  </a>
                </ActiveLink>
              </div>
            </Col>

            <Col xs="12" sm="6" md="2">
              <div className={style.col}>
                <p className={style.title}>{t("common:FooterSection.col3.title")}</p>
                <a
                  className={style.subTitle}
                  rel="noreferrer"
                  href="https://www.facebook.com/Pawel.Olgierd.Grotowski"
                  target="_blank"
                >
                  {t("common:FooterSection.col3.row1")}
                </a>
                <a
                  className={style.subTitle}
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/%F0%9F%87%AA%F0%9F%87%BApawel-grotowski-mba-44ba0a2/"
                  target="_blank"
                >
                  {t("common:FooterSection.col3.row2")}
                </a>
              </div>
            </Col>

            <Col xs="12" sm="6" md="3">
              <div className={style.col}>
                <p className={style.title}>{t("common:FooterSection.col4.title")}</p>
                <span className={style.subTitle}>{t("common:FooterSection.col4.row1")}</span>
                <span className={style.subTitle}>{t("common:FooterSection.col4.row2")}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}
