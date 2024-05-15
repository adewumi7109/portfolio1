import React, {useState} from 'react'
import './project.css'
import Card from './Card/Card'

const Projects = [
    {title: "Traveling Agency Website", technologyUsed: "React Js", url:"https://ykstravel.com.ng/"},
    {title: "Easy Bank App", technologyUsed: "Html/Css & Javascript", url:"https://eazyb.netlify.app/"}
]

function Project() {
 
  return (
    <>
<section id='projects'>
        <h1>
            Projects
        </h1>
        <div className="project-lists">
           
            {Projects.map((project, index)=>(
                <>
                    <Card title={project?.title} technologyUsed={project?.technologyUsed}  url={project?.url} />
                </>
            ))}
        </div>
</section>
    </>
  )
}

export default Project