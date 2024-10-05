import React from 'react'
import { Link } from 'react-router-dom'
import magazine1 from '../Static/magazine1.pdf'
import habit from '../Static/habitale_zone.pdf'
import life from '../Static/life_outside_planet.pdf'

function Magazines() {
    return (
        <>
            <div className="container d-flex nb-ebook-card mt-5">
               <Link to={magazine1} target="_blank" rel="noopener noreferrer">
                 <img 
                   src={require('../Static/Magazine/mag_img.jpeg')} alt="" className="mx-4"
                 />
               </Link>
                <Link to={habit} target="_blank" rel="noopener noreferrer">
                   <img 
                     src={require('../Static/Magazine/mag_img.jpeg')} alt="" className="mx-4"
                   />
                 </Link>
              <Link to={life} target="_blank" rel="noopener noreferrer">
                 <img 
                   src={require('../Static/Magazine/mag_img.jpeg')} className="mx-4"
                 />
               </Link>
            </div>
        </>
    )
}

export default Magazines