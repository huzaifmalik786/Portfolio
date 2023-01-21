import React,{useState} from 'react'
import '../styles/Skills.css';
import slide2 from '../assets/slide2.jpg';


function Skills() {
  const [start,setstart]= useState(false);
  const [circlestart, setcirclestart]=useState(false);

  const techskills= [
    {
      skill: "Front End Development",
      perct: "90%"
    },
    {
      skill: "Backend Development",
      perct: "72%"
    },
    {
      skill: "MERN Stack",
      perct: "79%",
    },
    {
      skill: "C++",
      perct: "86%",
    },
    {
      skill: "DSA",
      perct: "76%"
    },
    {
      skill: "Python",
      perct: "69%"
    }
  ]
  const profskills= [
    {
      skill: "Creativity",
      perct: "70",
      width: "78"
    },
    {
      skill: "Designing",
      perct:"65",
      width: "100"
    },
    {
      skill: "Project Management",
      perct: "87",
      width: "45"
    },
    {
      skill: "Team Work",
      perct: "83",
      width: "55"
    }
  ]

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
      var revealpoint= 300;
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
              {techskills.map((value)=>(
                <div className="s-bar">
                  <div className="s-name">
                    <span>{value.skill}</span>
                    <span>{value.perct}</span>
                  </div>
                  <div className='progress'><span style={start? {width: `${value.perct}`}: {width: "0%"}}></span></div>
                </div>
              ))}
              
          </div>
          <div className='s-container' id='circle-container'>
            <div className='s-title'>Professional Skills</div>
            <div className='circle-wrap'>
              {profskills.map((value)=>(
                <div className="box">
                  <div className='percent'>
                    <svg>
                      <circle className='circle'cx='40' cy='40' r='40'></circle>
                      <circle className='circle'cx='40' cy='40' r='40' style={circlestart?{strokeDashoffset: `${value.width}`}:{strokeDashoffset: "255"} }></circle>
                    </svg>
                    <div className='number'>
                      <h2>{value.perct}%</h2>
                    </div>
                  </div>
                  <h2 className='s-text'>{value.skill}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills
