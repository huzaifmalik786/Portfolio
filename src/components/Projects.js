import React from 'react'
import '../styles/Projects.css';
import weather from '../assets/weather.jpg';
import pizza from '../assets/pizza.jpg';
import resume from '../assets/resume.jpg';


function Projects() {
  return (
    <div className='projects'>
        <section className='section2'>
            <div className='p-body'>
                <a href='https://huzaifmalik786.netlify.app/' target='_blank' rel="noreferrer">
                    <div className='p-card reveal'>
                    <div className='p-image' style={{backgroundImage: `url(${weather})`}}></div>
                        <div className='p-info'>
                            <h3>Weather Forecast</h3>
                            <p>A web app to find the real time weather of any city. Along with the weather, it provides some other basic weather related information.</p>
                        </div>
                    </div>
                </a>
                <a href='https://resume-builder1.netlify.app/' target='_blank' rel="noreferrer">
                    <div className='p-card reveal'>
                        <div className='p-image' style={{backgroundImage: `url(${resume})`}}></div>
                        <div className='p-info'>
                        <h3>Resume Builder</h3>
                        <p>A web app where one can build a beautiful resume for themselves. Also includes the functionality of changing colors and downloading the resume.</p>
                        </div>
                    </div>
                </a>
                <a href='https://pizzaparlour.netlify.app/' target='_blank' rel="noreferrer">
                    <div className='p-card reveal'>
                        <div className='p-image' style={{backgroundImage: `url(${pizza})`}}></div>
                        <div className='p-info'>
                        <h3>Pizza Parlour</h3>
                        <p>A web appication for ordering pizza onine. Completely responsive containing 4 different pages.</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </div>
  )
}

export default Projects