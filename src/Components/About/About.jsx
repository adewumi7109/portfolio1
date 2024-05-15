import React from 'react'
import './about.css'
import aboutImg from '../About/Adewumi.jpg'

function About() {
  return (
    <>
    <section id='about'>
        <div className="img">
           <img src={aboutImg} alt="" />
        </div>
        <div className="details">
            <h2>About</h2>
            <h1>I am a dedicated software engineer with expertise in a diverse range of technologies, specializing in web development. My skill set encompasses both front-end and back-end technologies, enabling me to architect and deliver robust software solutions.</h1>
          <div>
          <p>
              Web Technologies: React/Next js, Supabase, SCSS, Tailwind Css, Boostrap 5, Asp netcore, and SQL
            </p>
            <p>Programming Languages: Javascript, and C#</p>
          </div>
        </div>
    </section>
    </>
  )
}

export default About