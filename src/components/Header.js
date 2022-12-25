import React from 'react'
import Axios from 'axios';
import FileDownload from "js-file-download";
import '../styles/Navbar.css';
import person from "../assets/person.png";
import mountain1 from "../assets/mountain1.png";
import mountain2 from "../assets/mountain2.png";
import mountain3 from "../assets/mountain3.png";
import sky from "../assets/sky.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import resume from "../assets/Resume.pdf";
function Header() {
  // const download=(e)=>{
  //   e.preventDefault();
  //   Axios({
  //     url: 'https://visionary-cobbler-c8e403.netlify.app/.netlify/functions/api',
  //     method: 'GET',
  //     responseType:'blob'
  //   }).then((res)=>{
  //     FileDownload(res.data,"resume.pdf");
  //   })
  // }
  const download=(e)=>{
    e.preventDefault();
    FileDownload(resume,"resume.pdf");
  }
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
  return (
    <div className='header'>
      <nav>
      <div className="navbar">
      <div className="n-left">
          <div className="n-name">Huzaif</div>
      </div>
      <div className="n-right">
        <div className="n-menu">
          <button onClick={(e)=>download(e)}>Get Resume</button>
        </div>
      </div>
    </div>
    </nav>
      <div className="big-title translate" data-speed="0.1">
        <span>Hey! I Am</span>
        <span>Huzaif Malik</span>
        <span>Skilled and expert in MERN Stack Development and Data Structure and Algorithms.</span>
        <div className='l-icon'>
          <a href='https://www.instagram.com/huzaifmalik7860/' target='_blank' rel="noreferrer"><InstagramIcon/></a>
          <a href='https://github.com/huzaifmalik786' target='_blank' rel="noreferrer"><GitHubIcon/></a>
          <a href='https://www.linkedin.com/in/huzaif-malik-8ab2b5232/' target='_blank' rel="noreferrer"><LinkedInIcon/></a>
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
