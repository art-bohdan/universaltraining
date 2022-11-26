import React from "react"
import "../styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import { ContextProvider } from "../context/Context"

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}

export default MyApp
