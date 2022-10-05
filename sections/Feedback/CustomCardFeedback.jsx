import React from "react"
import style from "../../styles/Feedback.module.css"

export const CustomCardFeedback = ({ src, id }) => {
  return (
    <div className={style.cardFeedback}>
      <img src={src} className={style.image} alt={id} />
    </div>
  )
}
