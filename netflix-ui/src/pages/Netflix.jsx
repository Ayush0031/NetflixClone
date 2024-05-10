import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'


const Netflix = () => {
  const[isScrolled,setIsScrolled]=useState("");

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return ()=>{window.onscroll = null}
  }




  return (
    <div>
      <Navbar isScrolled={isScrolled}/>
    </div>
  )
}

export default Netflix
