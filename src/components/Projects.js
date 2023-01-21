import React from 'react'
import '../styles/Projects.css';
import weather from '../assets/weather.jpg';
import pizza from '../assets/pizza.jpg';
import resume from '../assets/resume.jpg';
import Atropos from "atropos/react";


function Projects() {
    const project=[
        {
            name: "Weather Forecast",
            link: "https://huzaifmalik786.netlify.app/",
            image: weather,
            description: "A web app to find the real time weather of any city. Along with the weather, it provides some other basic weather related information."
        },
        {
            name: "Resume Builder",
            link: "https://resume-builder1.netlify.app/",
            image: resume,
            description: "A web app where one can build a beautiful resume for themselves. Also includes the functionality of changing colors and downloading the resume."
        },
        {
            name: "Pizza Parlour",
            link: "https://pizzaparlour.netlify.app/",
            image: pizza,
            description: "A web appication for ordering pizza onine. Completely responsive containing 4 different pages."
        }
    ]
  return (
    <div className='projects'>
        <section className='section2'>
            <div className='p-body'>
                {project.map((value)=>(
                    <a href={value.link} target='_blank' rel="noreferrer">
                        <Atropos className='my-atropos' rotateTouch="scroll-y">
                        <div className='p-card reveal'>
                            <div className='p-image' style={{backgroundImage: `url(${value.image})`}}></div>
                            <div className='p-info'>
                                <h3>{value.name}</h3>
                                <p>{value.description}</p>
                            </div>
                        </div>
                        </Atropos>
                    </a>
                ))}
            </div>
            <div className="d-flex justify-content-center align-items-center pb-2">
                <a href="https://github.com/huzaifmalik786?tab=repositories" target="_blank" rel="noreferrer">
                    <button type="button" class="btn btn-dark">Show More...</button>
                    </a>
            </div>
        </section>
    </div>
  )
}

export default Projects