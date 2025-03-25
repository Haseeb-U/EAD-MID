import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [toggleTheme, setToggleTheme] = useState(false)
  const [counter, setCounter] = useState(30)

  function toggleHandeler(event) {
    setToggleTheme(!toggleTheme)
    // document.getElementsByTagName("body").classList = ".light"
  }

  function counterHandeler() {
    setInterval(() => {
      if(counter > 25) {
        setCounter(prev => prev - 1)
      }
    }, 1000)

    

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
          <div className="timer" id="timerDisplay">{counter}s</div>
          <div className="btn-group">
            <button id="startButton" onClick={counterHandeler}>Start Timer</button>
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
