import React from "react"
import randomQuoteImg from "../images/RandomQuote2.png"
import JavaScriptCalc from "../images/JavaScriptCalc.png"
import GuessGaming from "../images/GuessingGame.png"
import Pomodoro from "../images/PomodoroClock.png"
import TwitchLayout from "../images/TwitchAPI.png"
import TicTac from "../images/TicTac.png"
import "./styles.css"
import ProjectImage from "./ProjectImage"

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <div className="projectGrid">
      <ProjectImage
        src={randomQuoteImg}
        back={
          <a
            href="https://codepen.io/Taliaa/pen/XVZQjJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Random Quote Generator
          </a>
        }
      />
      <ProjectImage
        src={JavaScriptCalc}
        back={
          <a
            href="https://codepen.io/Taliaa/pen/GQRePd"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript Calculator
          </a>
        }
      />
      <ProjectImage
        src={GuessGaming}
        back={
          <a
            href="https://codepen.io/Taliaa/pen/PRobBy"
            target="_blank"
            rel="noopener noreferrer"
          >
            RBG Color Game
          </a>
        }
      />
      <ProjectImage
        src={Pomodoro}
        back={
          <a
            href="https://codepen.io/Taliaa/pen/oEjayP"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pomodoro Clock
          </a>
        }
      />
      <ProjectImage
        src={TwitchLayout}
        back={
          <a
            href="https://codepen.io/Taliaa/pen/ypPdBR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch API display
          </a>
        }
      />
      <ProjectImage
        src={TicTac}
        back={
          <a
            href="https://codepen.io/Taliaa/pen/GQMNbe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tic Tac Toe Game
          </a>
        }
      />
    </div>
  </div>
)

export default Projects
