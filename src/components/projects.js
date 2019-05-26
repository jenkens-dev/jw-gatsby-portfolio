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
    <h2 id="projects">Projects</h2>
    <div className="projectGrid">
      <ProjectImage
        src={randomQuoteImg}
        back={
          <div>
            <a
              href="https://codepen.io/Taliaa/pen/XVZQjJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Random Quote Generator
            </a>
            <p>
              Generate a random quote through an API and tweet out your favorite
            </p>
            <p>Made with HTML, CSS, and JavaScript</p>
          </div>
        }
      />
      <ProjectImage
        src={JavaScriptCalc}
        back={
          <div>
            <a
              href="https://codepen.io/Taliaa/pen/GQRePd"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript Calculator
            </a>
            <p>
              Multiply, divide, add, or subtract with this fully functional
              JavaScript Calculator
            </p>
            <p>Made with HTML, CSS, and JavaScript</p>
          </div>
        }
      />
      <ProjectImage
        src={GuessGaming}
        back={
          <div>
            <a
              href="https://codepen.io/Taliaa/pen/PRobBy"
              target="_blank"
              rel="noopener noreferrer"
            >
              RBG Color Game
            </a>
            <p>Guess which colored square corresponds to the given rgb color</p>
            <p>Made with HTML, CSS, and JavaScript</p>
          </div>
        }
      />
      <ProjectImage
        src={Pomodoro}
        back={
          <div>
            <a
              href="https://codepen.io/Taliaa/pen/oEjayP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pomodoro Clock
            </a>
            <p>Stay on task with this Pomodoro clock</p>
            <p>Made with HTML, CSS, and JavaScript</p>
          </div>
        }
      />
      <ProjectImage
        src={TwitchLayout}
        back={
          <div>
            <a
              href="https://codepen.io/Taliaa/pen/ypPdBR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitch API display
            </a>
            <p>Check to see if your favorite Twitch streamer is live</p>
            <p>Made with HTML, CSS, and JavaScript</p>
          </div>
        }
      />
      <ProjectImage
        src={TicTac}
        back={
          <div>
            <a
              href="https://codepen.io/Taliaa/pen/GQMNbe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tic Tac Toe Game
            </a>
            <p>Play Tic Tac Toe against the computer</p>
            <p>Made with HTML, CSS, and JavaScript</p>
          </div>
        }
      />
    </div>
  </div>
)

export default Projects
