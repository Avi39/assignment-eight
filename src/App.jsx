import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Questions from './components/Questions/Questions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Questions></Questions>

    </div>
  )
}

export default App
