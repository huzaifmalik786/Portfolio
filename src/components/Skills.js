import React,{useState} from 'react'
import '../styles/Skills.css';
import slide2 from '../assets/slide2.jpg';


function Skills() {
  const [start,setstart]= useState(false);
  const [circlestart, setcirclestart]=useState(false);
  window.addEventListener('scroll', ()=>{
    const windowheight= window.innerHeight;
    const reveal= document.querySelectorAll('.reveal');
    const container= document.querySelector('.s-container');
    const circle= document.querySelector('#circle-container');

    var containertop= container.getBoundingClientRect().top;
    var circletop= circle.getBoundingClientRect().top;

    var containerreveal= 400;
    if(containertop< windowheight - containerreveal){
    setstart(true);
    }
    else{
      setstart(false);
    }

    if(circletop < windowheight - containerreveal){
      setcirclestart(true);
    }
    else{
      setcirclestart(false);
    }
    reveal.forEach(element => {
      var revealtop= element.getBoundingClientRect().top;
      var revealpoint= 250;
      if(revealtop< windowheight - revealpoint){
        element.classList.add('active');
      }
      else{
        element.classList.remove('active');
      }
    })

    })

  return (
      <div className='skills' style= {{backgroundImage: `url(${slide2})`}}>
        <div className="s-shadow"></div>
      <div className='s-shadowbottom'></div>
      <div className="overlay"></div>
        <div className="heading1 reveal">
          <hr />
          <h1 >Skills</h1>
          <hr />
        </div>
        <div className='s-wrap reveal'>
          <div className='s-container'>
            <div className='s-title'>Technical Skills</div>
              <div className='s-bar'>
                <div className='s-name'>
                  <span>Front End Development</span>
                  <span>85%</span>
                </div> 
                <div className='progress'><span style={start? {width: "85%"}: {width: "0%"}}></span></div>
              </div>
              <div className='s-bar'>
                <div className='s-name'>
                  <span>Backend Development</span>
                  <span>65%</span>
                </div>
                <div className='progress'><span style={start? {width: "65%"}: {width: "0%"}}></span></div>
              </div>
              <div className='s-bar'>
                <div className='s-name'>
                  <span>ReactJS</span>
                  <span>70%</span>
                </div>
                <div className='progress'><span style={start? {width: "70%"}: {width: "0%"}}></span></div>
              </div>
              <div className='s-bar'>
                <div className='s-name'>
                  <span>C++</span>
                  <span>80%</span>
                </div>
                <div className='progress'><span style={start? {width: "80%"}: {width: "0%"}}></span></div>
              </div>
              <div className='s-bar'>
                <div className='s-name'>
                  <span>DSA</span>
                  <span>76%</span>
                </div>
                <div className='progress'><span style={start? {width: "76%"}: {width: "0%"}}></span></div>
              </div>
              <div className='s-bar'>
                <div className='s-name'>
                  <span>Python</span>
                  <span>59%</span>
                </div>
                <div className='progress'><span style={start? {width: "59%"}: {width: "0%"}}></span></div>
              </div>
          </div>
          <div className='s-container' id='circle-container'>
            <div className='s-title'>Professional Skills</div>
            <div className='circle-wrap'>
            <div className='box'>
              <div className='percent'>
                <svg>
                  <circle className='circle'cx='40' cy='40' r='40'></circle>
                  <circle className='circle'cx='40' cy='40' r='40' style={circlestart?{strokeDashoffset: "78"}:{strokeDashoffset: "255"} }></circle>
                </svg>
                <div className='number'>
                  <h2>70%</h2>
                </div>
              </div>
              <h2 className='s-text'>Creativity</h2>
            </div>
            <div className='box'>
              <div className='percent'>
                <svg>
                  <circle className='circle'cx='40' cy='40' r='40'></circle>
                  <circle className='circle'cx='40' cy='40' r='40' style={circlestart?{strokeDashoffset: "55"}:{strokeDashoffset: "255"} }></circle>
                </svg>
                <div className='number'>
                  <h2>83%</h2>
                </div>
              </div>
              <h2 className='s-text'>Team Work</h2>
            </div>
            <div className='box'>
              <div className='percent'>
                <svg>
                  <circle className='circle'cx='40' cy='40' r='40'></circle>
                  <circle className='circle'cx='40' cy='40' r='40' style={circlestart?{strokeDashoffset: "45"}:{strokeDashoffset: "255"} }></circle>
                </svg>
                <div className='number'>
                  <h2>87%</h2>
                </div>
              </div>
              <h2 className='s-text'>Project Management</h2>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills
