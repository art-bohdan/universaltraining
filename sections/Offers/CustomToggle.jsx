import React from "react"
import { useAccordionButton } from "react-bootstrap/AccordionButton"
import style from "../../styles/Offers.module.css"
import Image from "next/image"

export const CustomToggle = ({ title, iconEven, eventKey, callback }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey))

  return (
    <div className={style.accordionWrapper}>
      <span className={style.headerTitle} style={{ color: iconEven ? "var(--secondary-color)" : "var(--white-color)" }}>
        {title}
      </span>
      <span onClick={decoratedOnClick} className={style.button}>
        {iconEven ? (
          <Image src={"/assets/images/svg/vectorEven.svg"} alt="vectorEven" width="32" height="32" />
        ) : (
          <Image src={"/assets/images/svg/vectorOdd.svg"} alt="vectorOdd" width="32" height="32" />
        )}
      </span>
    </div>
  )
}
