import React from "react"
import style from "../../styles/Footer.module.css"
import { Col, Container, Row } from "react-bootstrap"
import ActiveLink from "../../components/Header/ActiveLink"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <section id={"offers"} className={`${style.footer} default-container`}>
      <Container fluid={"xxl"}>
        <Container fluid={"xl"}>
          <Row>
            <Col md={{ span: 2 }} className={style.col}>
              <p className={style.title}>{t("common:FooterSection.col1.title")}</p>
              <ActiveLink href="#about">
                <a className={style.subTitle}> {t("common:AboutSection.About")}</a>
              </ActiveLink>
              <ActiveLink href="#offers">
                <a className={style.subTitle}>{t("common:OffersSection.Offers")}</a>
              </ActiveLink>
              <ActiveLink href="#experts">
                <a className={style.subTitle}>{t("common:ExpertsSection.Experts")}</a>
              </ActiveLink>
              <ActiveLink href="#feedback">
                <a className={style.subTitle}>{t("common:FeedbackSection.Feedback")}</a>
              </ActiveLink>
              <ActiveLink href="#contact">
                <a className={style.subTitle}>{t("common:ContactSection.Contact")}</a>
              </ActiveLink>
            </Col>

            <Col md={{ span: 3, offset: 1 }} className={style.col}>
              <p className={style.title}>{t("common:FooterSection.col2.title")}</p>
              <span className={style.subTitle}>{t("common:FooterSection.col2.row1")}</span>
              <span className={style.subTitle}>{t("common:FooterSection.col2.row2")}</span>
              <span className={style.subTitle}>{t("common:FooterSection.col2.row3")}</span>
              <span className={style.subTitle}>{t("common:FooterSection.col2.row4")}</span>
            </Col>

            <Col md={{ span: 2, offset: 1 }} className={style.col}>
              <p className={style.title}>{t("common:FooterSection.col3.title")}</p>
              <span className={style.subTitle}>{t("common:FooterSection.col3.row1")}</span>
              <span className={style.subTitle}>{t("common:FooterSection.col3.row2")}</span>
              <span className={style.subTitle}>{t("common:FooterSection.col3.row3")}</span>
            </Col>

            <Col md={{ span: 3 }} className={style.col}>
              <p className={style.title}>{t("common:FooterSection.col4.title")}</p>
              <span className={style.subTitle}>{t("common:FooterSection.col4.row1")}</span>
              <span className={style.subTitle}>{t("common:FooterSection.col4.row2")}</span>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className={style.dividerWrapper}>
        <div className={style.dividerLeft} />
        <div className={style.logoWrapper}>
          <Image src={"/assets/images/png/earth.png"} alt="earth" width="32" height="32" />
          <span className={style.logoName}>{t("common:HeroSection.companyName")}</span>
        </div>
        <div className={style.dividerRight} />
      </div>
    </section>
  )
}
