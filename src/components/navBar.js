import React from "react"

const NavBar = () => (
  <>
    <div className="navBar navHeight">
      <a id="title" href="#top">
        JW
      </a>
      <div className="pageTitles">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a id="navContact" href="#contact">
          Contact
        </a>
      </div>
    </div>
    <div className="navHeight" />
  </>
)

export default NavBar
