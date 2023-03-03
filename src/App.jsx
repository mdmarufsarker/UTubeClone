import React from 'react'
import { AppContext } from './context/contextApi'
import './style.css'

function App() {
  return (
    <AppContext>
      <div className="App">
        <h1 className='text-center underline'>Hello</h1>
      </div>
    </AppContext>
  )
}

export default App
