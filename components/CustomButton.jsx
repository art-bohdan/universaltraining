import React from "react"
import buttonStyle from "../styles/HeroPage.module.css"
import Link from "next/link"

export const CustomButton = ({ title, style, link, onClick }) => {
  return (
    <div className={buttonStyle.button} style={style} onClick={onClick}>
      <Link href={link}>
        <span className={buttonStyle.buttonText}>{title}</span>
      </Link>
    </div>
  )
}
