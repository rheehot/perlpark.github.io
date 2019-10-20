import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../stylesheets/layout.scss"
import animation from "../stylesheets/animation.module.css"
import Nav from "../components/header-nav"
import Util from "../components/header-util"
import Footer from "../components/footer"


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title_small
            title_big
          }
        }
      }
    `
  )
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <span className="header__logo__small">{data.site.siteMetadata.title_small}</span>
            <span className="header__logo__big">{data.site.siteMetadata.title_big}</span>
          </Link>
        </div>
        <nav className="header__nav">
          <Nav />
        </nav>
        <Util />
        <div className={animation.header__animation}>
          <div className={animation.header__animation__wave}></div>
          <div className={animation.header__animation__wave}></div>
          <div className={animation.header__animation__wave}></div>
          <div className={animation.header__animation__wave}></div>
        </div>
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}