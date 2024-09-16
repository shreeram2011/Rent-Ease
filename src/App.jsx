import React from 'react'
import Nav from './Components/Navbar/Nav'
import Routing from './utils/Routing'

const App = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <Routing />
    </div>
  )
}

export default App