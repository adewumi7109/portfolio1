import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import img from './giphy.gif'
import { useRef, useEffect } from 'react';
import './Navbar.css'

function Navbar() {
  var navRef = useRef()
  var parallax = useRef()


 
  const toggleNav = () =>{
    navRef.current.classList.toggle('active')
  }


useEffect(()=>{
  window.addEventListener('scroll', (e) => {
    if(window.scrollY < 370 && window.scrollY > 50 ){

  
  
       parallax.current.style.opacity='0.9';
      } 
      
   else if(window.scrollY > 370 ){

 

     parallax.current.style.opacity='0.2';
    } 

    else{
      parallax.current.style.opacity='1';
    

    }

 
 
   });
 
})

  


  return (
   <>
    <nav>
        <div className='logo'>
            logo
        </div>
        <ul ref={navRef} className='navlinks'>
           <li><a  href="/">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#projects">Projects</a></li>
           <li><a href="#contact">Contact</a></li>
          
        </ul>
         <FaBars className='bars' onClick={toggleNav}/> 
     
   
    </nav> 
  
    <div className='dark-bg'>
    <header  ref={parallax}>
      <div className='heroTitle'>
          <h1>
              My name is Adewumi Ogunsanya & I'm a software developer
         
          </h1>
          <img src={img} alt="" className='gif' />
         
        </div>
        
    </header>
   
    </div>

   </>
  )
}

export default Navbar