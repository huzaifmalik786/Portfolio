import React, { useState } from 'react'
import '../styles/Navbar.css';
import person from "../assets/person.png";
import mountain1 from "../assets/mountain1.png";
import mountain2 from "../assets/mountain2.png";
import mountain3 from "../assets/mountain3.png";
import sky from "../assets/sky.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SegmentIcon from '@mui/icons-material/Segment';
import CancelIcon from '@mui/icons-material/Cancel';
import resume from "../assets/Resume.pdf";
function Header(props) {

  const scrolltosection= (elementref)=>{
    console.log(elementref);
    elementref.current?.scrollIntoView({behavior: "smooth"});
  }

  const icons=[
    {
      icon: <InstagramIcon/>,
      link: "https://www.instagram.com/huzaifmalik7860/"
    },
    {
      icon: <GitHubIcon/>,
      link: "https://github.com/huzaifmalik786"
    },
    {
      icon: <LinkedInIcon/>,
      link: "https://www.linkedin.com/in/huzaif-malik-8ab2b5232/"
    }
  ]
  window.addEventListener('scroll', ()=>{
    let scroll=window.pageYOffset;
    const translate= document.querySelectorAll('.translate');
    const bigtitle= document.querySelector('.big-title');
    const header=document.querySelector('.header');
    const shadow= document.querySelector('.shadow');
    let header_height= header.offsetHeight;
    translate.forEach(element=>{
      let speed=element.dataset.speed;
      element.style.transform=`translateY(${scroll * speed}px)`;
    })
    bigtitle.style.opacity= -scroll/(header_height/2)+1;
    shadow.style.height=`${scroll*0.5 + 300}px`;
  });

  const [active,setactive]= useState(false);
  return (
    <div className='header'>
      <nav>
      <div className="navbar">
      <div className="n-left">
          <div className="n-name">Huzaif</div>
      </div>
      <div className="n-right">
        <div className='bignavbar'>
          <li onClick={()=>{scrolltosection(props.aboutref)}}>About</li>
          <li onClick={()=>{scrolltosection(props.skillref)}}>Skills</li>
          <li onClick={()=>{scrolltosection(props.projectref)}}>Projects</li>
          <li onClick={()=>{scrolltosection(props.contactref)}}>Contact</li>
          <li><a href={resume} target="_blank" rel="noreferrer">Get Resume</a></li>
        </div>
        <div className='smallnavbar'>
          <button onClick={()=>setactive(!active)}><SegmentIcon/></button>
          <div className='navigations' style={!active?{display:"none"}:{}}>
            <button onClick={()=>setactive(!active)}><CancelIcon/></button>
            <li onClick={()=>{scrolltosection(props.aboutref)}}>About</li>
            <li onClick={()=>{scrolltosection(props.skillref)}}>Skills</li>
            <li onClick={()=>{scrolltosection(props.projectref)}}>Projects</li>
            <li onClick={()=>{scrolltosection(props.contactref)}}>Contact</li>
            <li><a href={resume} target="_blank" rel="noreferrer">Get Resume</a></li>

          </div>
        </div>
      </div>
      
    </div>
    </nav>
      <div className="big-title translate" data-speed="0.1">
        <span>Hey! I Am</span>
        <span>Huzaif Malik</span>
        <span>Skilled and expert in MERN Stack Development and Data Structure and Algorithms.</span>
        <div className='l-icon'>
          {icons.map((value)=>(
            <a href={value.link} target='_blank' rel="noreferrer" className="iconlink">{value.icon}</a>
          ))}
        </div>
      </div>
      <img src={person} className="person translate" data-speed="-0.25" alt=""/>
      <img src={mountain1} className="mountain1 translate" data-speed="-0.2" alt=""/>
      <img src={mountain2} className="mountain2 translate" data-speed="0.4" alt=""/>
      <img src={mountain3} className="mountain3 translate" data-speed="0.3" alt=""/>
      <img src={sky} className="sky translate" data-speed="0.5" alt=""/>
      <div className="shadow"></div>
   </div>   
  )
}
export default Header
