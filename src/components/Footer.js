import React from 'react'
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className="footer">
        <div className='f-icon'>
          <a href='https://www.instagram.com/huzaifmalik7860/' target='_blank' rel="noreferrer"><InstagramIcon/></a>
          <a href='https://github.com/huzaifmalik786' target='_blank' rel="noreferrer"><GitHubIcon/></a>
          <a href='https://www.linkedin.com/in/huzaif-malik-8ab2b5232/' target='_blank' rel="noreferrer"><LinkedInIcon/></a>
        </div>
        <div className='f-content'>
            <p>Created By</p>
            <p>Huzaif Malik</p>
            <CopyrightIcon/>
            <p>2022</p>
        </div>
    </div>
  )
}

export default Footer
