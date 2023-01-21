import React from 'react'
import image from "../assets/image.jpg";
import "../styles/About.css";
import Atropos from 'atropos/react';

function About() {
  window.addEventListener('scroll', ()=>{
    let scroll=window.pageYOffset;
    const content= document.querySelector('.content');
    const section= document.querySelector('section');
    const image= document.querySelector('.imgContainer');
    const opacity= document.querySelectorAll('.opacity');
    const border=document.querySelector('.border');

    let section_height= section.offsetHeight;
    let sectionY= section.getBoundingClientRect();
    var x=Math.min(scroll/(section_height+sectionY.top)* 50 - 50, 0);
    var y= Math.max(scroll/(section_height+sectionY.top)* -50 + 50,0);
    content.style.transform=`translateY(${x}px)`;
    image.style.transform=`translateY(${y}px)`;
    opacity.forEach(element=>{
      element.style.opacity= Math.abs(scroll/(sectionY.top + 500));
    })
    border.style.width= `${scroll / (sectionY.top + section_height-100)* 30}%`;

  });
  return (
    <div className='about' >
       <section className='section1'>
         
        <div class="container1">
            <div className="content opacity">
                <h3 className="title">
                    About
                    <div className="border"></div>
                </h3>
                <p>MERN Stack Web Developer with background knowledge of Figma, SCSS, Bootstrap, etc. along with a knack of building applications with atmost efficiency. I'm a student of Jamia Milia Islamia persuing B.Tech in Electronics and Communication. I'm also a core team member of Web Development Team at GDSC JMI and DSA Team at IEEE JMI.</p>
                <h2> Here Are A Few Highlights</h2>
                <ul>
                  <li>MERN Stack Web Developer</li>
                  <li>Interactive Front End as per the design</li>
                  <li>Managing Database</li>
                  <li>ReactJS</li>
                  <li>Leetcode and Codechef Coder</li>
                </ul>
            </div>

            <div className="imgContainer opacity">
              <Atropos className="my-atropos">
                <img src={image} alt=""/>
              </Atropos>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About;