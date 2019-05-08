import React from "react"
import { Link } from "gatsby"
import Projects from "../components/projects"
import NavBar from "../components/navBar"
import AboutMe from "../components/aboutMe"
import Contact from "../components/contactPage"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles.css"

const IndexPage = () => (
  <div>
    <NavBar />
    <h1>Jennifer Williams</h1>
    <p>Self-taught front end developer</p>
    <AboutMe />
    <Projects />
    <Contact />
  </div>
)

export default IndexPage
