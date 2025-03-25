import { useState } from 'react'
import './App.css'

function App() {
  const [toggleTheme, setToggleTheme] = useState(false)

  function toggleHandeler(event) {
    setToggleTheme(!toggleTheme)
    // document.getElementsByTagName("body").classList = ".light"
  }

  return (
    <>
      <div className={"theme " + (toggleTheme ? "light": "")}>
      <div className="container">
        
        <div className="header">
          <h1>Countdown & Light Switch</h1>
          <div className="toggle-container">
            <label className="toggle-switch">
              <input type="checkbox" id="themeToggle" onChange={toggleHandeler} checked={toggleTheme}/>
              <span className="slider"></span>
            </label>
            <span>Light Mode</span>
          </div>
        </div>
    
    
        <div className="timer-section">
          <div className="progress-bar">
            <div className="progress" id="progress"></div>
          </div>
          <div className="timer" id="timerDisplay">30s</div>
          <div className="btn-group">
            <button id="startButton">Start Timer</button>
            <button id="resetButton" style={{display: "none"}}>Reset Timer</button>
          </div>
          <div className="message" id="messageArea"></div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
