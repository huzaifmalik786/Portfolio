import React,{useRef} from 'react'
import '../styles/Contact.css'
import contact from '../assets/contact.jpg';
import emailjs from '@emailjs/browser';

function Contact() {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7llcrcb', 'template_iksz3wo', form.current, '70V-X24mg6LjA089r')
          .then(() => {
              window.alert('Email sent successfully.');
          }, (error) => {
              console.log(error.text);
          });
      };
    window.addEventListener('scroll',()=>{
        let scroll=window.pageYOffset;
        const contact=document.querySelector('.contact');
        const opacity1= document.querySelectorAll('.opacity1');
        let contactY= contact.getBoundingClientRect().top;
        console.log(scroll);
        opacity1.forEach(element=>{
            element.style.opacity=Math.abs((scroll-2000)/(contactY+550));
        })

    })
    return (
        <div className="contact">
            <div className='contactimage' style={{ backgroundImage: `url(${contact})` }}>
                <div className="overlay1"></div>
                <div className="s-shadow"></div>
                <div className='s-shadowbottom'></div>
            </div>
            <div className="heading1 opacity1">
                <hr />
                <h1>Contact</h1>
                <hr />
            </div>
            <div className='c-content'>
                <div className='c-body opacity1'>
                    <h1>Get In Touch!</h1>
                    <hr />
                    <div className='form'>
                        <form ref={form} onSubmit={sendEmail} >
                            <div class="form-group">
                                <label for="exampleInputName1">Name</label>
                                <input type="text" placeholder="Name" name="user_name" required autoComplete="off" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" placeholder="Email" name='user_email' required/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Subject</label>
                                <input type="text" placeholder="Subject" name='user_subject' />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Message</label>
                                <textarea rows='3' placeholder="Enter Your Message" name='message' />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact