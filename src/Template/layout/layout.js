import * as React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import NavBar from "../../component/common/navBar/navBar"
import Footer from "../../component/common/footer/footer"
import './layout.scss'
import Header from "../../component/common/nav-header/Header"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
      <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </>
  )
}
export default Layout;