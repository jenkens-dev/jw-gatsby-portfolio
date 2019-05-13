import React from "react"
import { FaJsSquare } from "react-icons/fa"
import { FaGitSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import FlipOnHover from "./FlipOnHover"
import "./styles.css"

const SkillsContainer = () => (
  <div className="skillsContainer">
    <FlipOnHover size="skillSize" back={<div>JavaScript</div>}>
      <FaJsSquare className="skillsIcon" style={{ color: "#F0DB4F" }} />
    </FlipOnHover>
    <FlipOnHover back={<div>React</div>}>
      <FaReact className="skillsIcon" style={{ color: "#61dafb" }} />
    </FlipOnHover>
    <FlipOnHover back={<div>HTML5</div>}>
      <FaHtml5 className="skillsIcon" style={{ color: "#E44D26" }} />
    </FlipOnHover>
    <FlipOnHover back={<div>CSS3</div>}>
      <FaCss3Alt className="skillsIcon" style={{ color: "#1572B6" }} />
    </FlipOnHover>
    <FlipOnHover back={<div>Git</div>}>
      <FaGitSquare className="skillsIcon" style={{ color: "#f14e32" }} />
    </FlipOnHover>
    <FlipOnHover back={<div>GitHub</div>}>
      <FaGithub className="skillsIcon" style={{ color: "#24292e" }} />
    </FlipOnHover>
  </div>
)

export default SkillsContainer
