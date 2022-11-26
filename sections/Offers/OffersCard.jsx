import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import style from "../../styles/Offers.module.css"
import { Context } from "../../context/Context"

export const OffersCard = ({ src, title, id }) => {
  const router = useRouter()
  const { setSelectedHasLink } = React.useContext(Context)

  return (
    <div
      className={style.offerCard}
      onClick={() => {
        if (id == 8) {
          return
        }
        setSelectedHasLink("offers")
        router.push(`/offers/${id}`)
      }}
    >
      <div className={style.gradient}></div>
      <Image src={src} alt={title} className={style.offerImage} width={540} height={331} />
      <div className={style.offerTitleWrapper}>
        <p className={style.offerTitle}>{title}</p>
      </div>
    </div>
  )
}
