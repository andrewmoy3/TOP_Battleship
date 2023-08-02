import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import './css/index.css'
import Game from './Components/Game.js'

const { playerBoard, computerBoard, handleClick } = Game();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App playerBoard={playerBoard} computerBoard={computerBoard} handleClick={handleClick}/>
  </React.StrictMode>,
)
