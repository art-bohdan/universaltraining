import React from "react"
import style from "../../styles/Experts.module.css"

export const CustomCard = ({ position, name, src }) => {
  return (
    <div className={style.customCard}>
      <img src={src} className={style.image} alt={name} />
      <div className={style.textWrapper}>
        <p className={style.text}>{position}</p>
        <p className={style.text}>{name}</p>
      </div>
    </div>
  )
}
