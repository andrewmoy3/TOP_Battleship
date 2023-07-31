import { useState } from 'react'
import '../css/App.css'
import Banner from './Banner'

function App(props) {

  return (
    <>
      <h1>{props.title}</h1>
      <Banner />
    </>
  )
}

export default App
