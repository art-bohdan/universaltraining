import React from "react"
import { Accordion, Card } from "react-bootstrap"
import { CustomToggle } from "./CustomToggle"
import style from "../../styles/Offers.module.css"

export const CustomAccordion = ({ offersData }) => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        {offersData.map((data) => (
          <Card key={data.id} className={`${style.accordionCard} ${data.id % 2 === 0 ? style.even : style.odd}`}>
            <Card.Header>
              <CustomToggle eventKey={data.id} title={data.title} iconEven={data.id % 2 === 0} />
            </Card.Header>
            <Accordion.Collapse eventKey={data.id}>
              <Card.Body>{data.description}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </>
  )
}
