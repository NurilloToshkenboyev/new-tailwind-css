import { useState } from 'react'
import './App.css'
import { HederQism } from './header/header.jsx'
import { Section } from './section/section.jsx'
import { Footer } from './footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='  w-[1510px] h-[150vh]' >
      <HederQism/>
      <Section/>
      <Footer/>
    </div>
    </>
  )
}

export default App
