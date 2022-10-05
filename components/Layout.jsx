import Meta from "./Meta"
import Header from "./Header/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
