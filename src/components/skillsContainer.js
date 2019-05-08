import React from "react"
import { FaJsSquare } from "react-icons/fa"
import { FaGitSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaReact } from "react-icons/fa"

const SkillsContainer = () => (
  <div>
    <FaJsSquare style={{ color: "#F0DB4F" }} />
    <FaReact style={{ color: "#61dafb" }} />
    <FaHtml5 style={{ color: "#E44D26" }} />
    <FaCss3Alt style={{ color: "#1572B6" }} />
    <FaGitSquare style={{ color: "#f14e32" }} />
    <FaGithub style={{ color: "#24292e" }} />
  </div>
)

export default SkillsContainer
