import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/Herosection/Herosection'
import Carousel from './Components/Carousel/Carousel'
import BestSeller from './Components/BestSeller/BestSeller'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
import Sitemaintenance from './Components/Sitemaintenance/Sitemaintenance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Sitemaintenance/>    
      <Herosection/>
      <Carousel/>
      <BestSeller/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
