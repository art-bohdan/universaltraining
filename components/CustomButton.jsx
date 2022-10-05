import React from "react"
import style from "../styles/HeroPage.module.css"

export const CustomButton = ({ title }) => {
  return (
    <div className={style.button}>
      <span className={style.buttonText}>{title}</span>
    </div>
  )
}
