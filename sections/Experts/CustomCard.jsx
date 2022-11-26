import React from "react"
import { useRouter } from "next/router"
import style from "../../styles/Experts.module.css"
import { Context } from "../../context/Context"

export const CustomCard = ({ position, name, src, id }) => {
  const router = useRouter()
  const { setSelectedHasLink } = React.useContext(Context)

  return (
    <div
      className={style.customCard}
      onClick={() => {
        setSelectedHasLink("experts")
        router.push(`/experts/#${id}`)
      }}
    >
      <img src={src} className={style.image} alt={name} />
      <div className={style.textWrapper}>
        <div className={style.customBackgroundCard} />
        <p className={style.text}>{position.toUpperCase()}</p>
        <p className={style.text}>{name.toUpperCase()}</p>
      </div>
    </div>
  )
}
