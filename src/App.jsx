import { useState } from "react"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import WhyChoose from "./components/WhyChoose"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import QuoteModal from "./components/QuoteModal"
import "./styles.css"


function App(){

  const [open,setOpen] = useState(false)

  return (
    <>
      <Navbar/>

      <Home openModal={()=>setOpen(true)} />
      <About/>
      <Services/>
      <WhyChoose/>
      <Clients/>
      <CTA/>
      <Contact/>
      <Footer/>
      <FloatingButtons/>
      

      <QuoteModal show={open} close={()=>setOpen(false)} />
    </>
  )
}

export default App