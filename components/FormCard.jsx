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
  const [emailError, setEmailError] = React.useState("")
  const [disabled, setDisable] = React.useState(true)
  const { t } = useTranslation()

  const mailSend = (e) => {
    e.preventDefault()
    emailjs.send("service_5gmmh7s", "template_ko3rhkp", templateState, "POw3u2e1ljmjgrFzu").then((res) => {
      setTemplateState(initState())
    }),
      (err) => {
        console.log("FAILED...", err)
      }
  }

  // const onBlurEmail = (event) => {
  //   const regexp =
  //     /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  //   if (!event.target.value) {
  //     setEmailError("Это поле не может быть пустым")
  //   }
  //   if (!regexp.test(String(event.target.value).toLowerCase())) {
  //     setEmailError("Имейл не корректный")
  //   } else {
  //     setEmailError("")
  //   }
  // }

  React.useEffect(() => {
    if (
      templateState.name.length > 0 &&
      templateState.phone.length > 0 &&
      templateState.userEmail.length > 0 &&
      templateState.message.length > 0
    ) {
      setDisable(false)
    }
  }, [templateState])

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

      <button className={styles.button} type="submit" onClick={mailSend} disabled={disabled}>
        {t("common:ContactSection.form.send")}
      </button>
    </form>
  )
}
