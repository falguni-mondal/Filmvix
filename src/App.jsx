import React from 'react'
import Sidenav from './components/Navbar/Sidenav'
import Routing from './utils/Routing'

const App = () => {
  return (
    <div className='w-full h-screen flex text-[#e9e9e9]'>
      <Sidenav />
      <Routing />
    </div>
  )
}

export default App