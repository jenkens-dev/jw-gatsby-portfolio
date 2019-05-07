import React from "react"
import { FaTwitterSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"

const Contact = () => (
  <div>
    <h2>Contact Me</h2>
    <GoMail style={{ color: "black" }} />
    <FaTwitterSquare style={{ color: "#1da1f2" }} />
    <FaLinkedin style={{ color: "#0073b1" }} />
    <FaGithub style={{ color: "#24292e" }} />
  </div>
)

export default Contact
