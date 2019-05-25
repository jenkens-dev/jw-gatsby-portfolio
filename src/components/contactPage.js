import React from "react"
import { FaTwitterSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"

const Contact = () => (
  <div>
    <h2 id="contact">Contact Me</h2>
    <div className="contactGrid">
      <a href="mailto:jenken131@gmail.com">
        <GoMail style={{ color: "black", height: "90px", width: "90px" }} />
      </a>
      <a href="https://twitter.com/Talliaa_">
        <FaTwitterSquare
          style={{ color: "#1da1f2", height: "90px", width: "90px" }}
        />
      </a>
      <a href="https://www.linkedin.com/in/jennifer-williams-1b0a54105/">
        <FaLinkedin
          style={{ color: "#0073b1", height: "90px", width: "90px" }}
        />
      </a>
      <a href="https://github.com/Taljjaa">
        <FaGithub style={{ color: "#24292e", height: "90px", width: "90px" }} />
      </a>
    </div>
  </div>
)

export default Contact
