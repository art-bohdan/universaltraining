import React from "react"
import Image from "next/image"
import style from "../../styles/Header.module.css"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link"
import { Context } from "../../context/Context"

export const Logo = () => {
  const { t } = useTranslation()
  const { setSelectedHasLink } = React.useContext(Context)

  return (
    <div className={style.logoWrapper}>
      <Image src={"/assets/images/png/earth.png"} alt="earth" width="32" height="32" />
      <Link href={"/"}>
        <span className={style.logoName} onClick={() => setSelectedHasLink("")}>
          {t("common:HeroSection.companyName")}
        </span>
      </Link>
    </div>
  )
}
