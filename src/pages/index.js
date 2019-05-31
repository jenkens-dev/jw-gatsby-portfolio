import React from "react"
import { Link } from "gatsby"
import Projects from "../components/projects"
import NavBar from "../components/navBar"
import AboutMe from "../components/aboutMe"
import Contact from "../components/contactPage"
import Image from "../components/image"
import SEO from "../components/seo"
import ProfilePicture from "../images/profilepicture.jpg"
import "../components/styles.css"

const IndexPage = () => (
  <div>
    <NavBar />
    <div className="pageGrid">
      <div className="titleGrid">
        <div className="profilePictureWrapper">
          <img src={ProfilePicture} />
        </div>
        <div className="nameHeader">
          <h1 id="top">Jennifer Williams</h1>
          <p>Self-taught front end developer</p>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  </div>
)

export default IndexPage
