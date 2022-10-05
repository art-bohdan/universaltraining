import React from "react"
import Image from "next/image"
import style from "../../styles/Header.module.css"
import useTranslation from "next-translate/useTranslation"

export const Logo = ({ color }) => {
  const { t } = useTranslation()

  return (
    <div className={style.logoWrapper}>
      <Image src={"/assets/images/png/earth.png"} alt="earth" width="32" height="32" />
      <span className={style.logoName} style={{ color }}>
        {t("common:HeroSection.companyName")}
      </span>
    </div>
  )
}
