import React from 'react'
import '../project.css'
function Card({title, technologyUsed, content, url}) {

    // const [isHovered, setIsHovered ] = useState(false)

  return (
    
  <a 
            href={url} 
            target='_blank'
            rel="noreferrer"
            // onMouseOver={()=> setIsHovered(true)} 
            // onMouseLeave={()=> setIsHovered(false)} 
            className="project">
            
           {/* {isHovered ? (
            <>
           
           {content}
        
            </>
           ): (
            <>
                <h2> {title}</h2>
          <h4>{technologyUsed}</h4>  
            
            </>
           )
           }
            */}
               <>
                <h2> {title}</h2>
          <h4>{technologyUsed}</h4>  
            
            </>
                
            </a>
  
  )
}

export default Card