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
      <FaJsSquare style={{ color: "#F0DB4F", height: "90px", width: "90px" }} />
    </FlipOnHover>
    <FlipOnHover size="skillSize" back={<div>React</div>}>
      <FaReact style={{ color: "#61dafb", height: "90px", width: "90px" }} />
    </FlipOnHover>
    <FlipOnHover size="skillSize" back={<div>HTML5</div>}>
      <FaHtml5 style={{ color: "#E44D26", height: "90px", width: "90px" }} />
    </FlipOnHover>
    <FlipOnHover size="skillSize" back={<div>CSS3</div>}>
      <FaCss3Alt style={{ color: "#1572B6", height: "90px", width: "90px" }} />
    </FlipOnHover>
    <FlipOnHover size="skillSize" back={<div>Git</div>}>
      <FaGitSquare
        style={{ color: "#f14e32", height: "90px", width: "90px" }}
      />
    </FlipOnHover>
    <FlipOnHover size="skillSize" back={<div>GitHub</div>}>
      <FaGithub style={{ color: "#24292e", height: "90px", width: "90px" }} />
    </FlipOnHover>
  </div>
)

export default SkillsContainer
