import React from "react"
import { FaTwitterSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"

const Contact = () => (
  <div>
    <h2>Contact Me</h2>
    <div className="contactGrid">
      <GoMail style={{ color: "black", height: "90px", width: "90px" }} />
      <FaTwitterSquare
        style={{ color: "#1da1f2", height: "90px", width: "90px" }}
      />
      <FaLinkedin style={{ color: "#0073b1", height: "90px", width: "90px" }} />
      <FaGithub style={{ color: "#24292e", height: "90px", width: "90px" }} />
    </div>
  </div>
)

export default Contact
