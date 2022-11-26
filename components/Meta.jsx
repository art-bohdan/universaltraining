import Head from "next/head"
import useTranslation from "next-translate/useTranslation"

const Meta = ({ title, keywords, description }) => {
  const { t } = useTranslation()

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={t(description)} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <title>{t(title)}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "common:HeroSection.companyName",
  keywords: "universal training",
  description: "common:HeroSection.description1"
}

export default Meta
