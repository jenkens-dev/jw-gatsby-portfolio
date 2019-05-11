import React from "react"
import { FaJsSquare } from "react-icons/fa"
import { FaGitSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import "./styles.css"

const SkillsContainer = () => (
  <div className="skillsContainer">
    <FaJsSquare className="skillsIcon" style={{ color: "#F0DB4F" }} />
    <FaReact className="skillsIcon" style={{ color: "#61dafb" }} />
    <FaHtml5 className="skillsIcon" style={{ color: "#E44D26" }} />
    <FaCss3Alt className="skillsIcon" style={{ color: "#1572B6" }} />
    <FaGitSquare className="skillsIcon" style={{ color: "#f14e32" }} />
    <FaGithub className="skillsIcon" style={{ color: "#24292e" }} />
  </div>
)

export default SkillsContainer
