import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/scenes/navbar/navbar'


function App() {
    const [selectedPage, setSelectedPage] = useState('home')
  return (
    <div className="app bg-gray-20 bg-">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
