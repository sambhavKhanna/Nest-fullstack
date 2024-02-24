import { useState } from 'react'
import { Landing } from './Components/Landing'
import { Comments } from './Components/Comments'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/story/:id' element={<Comments />}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
