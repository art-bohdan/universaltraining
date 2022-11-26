import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import selectorLng from "../styles/SelectorLng.module.css"

export const SelectorLanguage = () => {
  const [lng, setLng] = React.useState("pl")
  const router = useRouter()

  React.useEffect(() => {
    setLng(router.locale)
  }, [router])

  return (
    <div className={selectorLng.languageWrapper}>
      {/* <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a className={locale === lng ? selectorLng.current : ""}>{locale.toUpperCase()}</a>
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  )
}
