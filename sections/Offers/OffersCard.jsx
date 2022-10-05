import Image from "next/image"
import React from "react"
import style from "../../styles/Offers.module.css"

export const OffersCard = ({ src, title }) => {
  return (
    <div className={style.offerCard}>
      <div className={style.gradient}></div>
      <Image src={src} alt={title} className={style.offerImage} width={540} height={331} />
      <div className={style.offerTitleWrapper}>
        <p className={style.offerTitle}>{title}</p>
      </div>
    </div>
  )
}
