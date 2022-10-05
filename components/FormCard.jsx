import React from "react"
import styles from "../styles/Contact.module.css"
import emailjs from "@emailjs/browser"
import useTranslation from "next-translate/useTranslation"

const initState = () => ({
  name: "",
  phone: "",
  userEmail: "",
  message: ""
})

export const FormCard = () => {
  const [templateState, setTemplateState] = React.useState(initState())
  const { t } = useTranslation()

  console.log(templateState)

  const mailSend = (e) => {
    e.preventDefault()
    console.log(templateState)
    emailjs.send("service_5gmmh7s", "template_ko3rhkp", templateState, "POw3u2e1ljmjgrFzu").then((res) => {
      console.log("Success", res.status, res.text)
      setTemplateState(initState())
    }),
      (err) => {
        console.log("FAILED...", err)
      }
  }
  return (
    <form className={styles.form}>
      <input
        placeholder={t("common:ContactSection.form.name")}
        className={styles.input}
        type="text"
        name="name"
        value={templateState.name}
        onChange={(e) => setTemplateState({ ...templateState, name: e.target.value })}
      />
      <input
        placeholder={t("common:ContactSection.form.phone")}
        className={styles.input}
        type="text"
        name="phone"
        value={templateState.phone}
        onChange={(e) => setTemplateState({ ...templateState, phone: e.target.value })}
      />
      <input
        className={styles.input}
        placeholder={t("common:ContactSection.form.email")}
        type="email"
        name="userEmail"
        value={templateState.userEmail}
        onChange={(e) => setTemplateState({ ...templateState, userEmail: e.target.value })}
      />
      <textarea
        rows={7}
        placeholder={t("common:ContactSection.form.description")}
        className={styles.input}
        name="message"
        value={templateState.message}
        onChange={(e) => setTemplateState({ ...templateState, message: e.target.value })}
      />

      <button className={styles.button} type="submit" onClick={mailSend}>
        {t("common:ContactSection.form.send")}
      </button>
    </form>
  )
}
