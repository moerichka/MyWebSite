import React, { useRef } from 'react';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_54keu3j', 'template_mz375bq', form.current, 'r_TZplNcMmuE3zec1')
          
        e.target.reset()
      };
    

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdEmail />
                        <h4>Email</h4>
                        <h5>mishika1221@mail.ru</h5>
                        <a href="mailto:mishika1221@mail.ru" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerFill />
                        <h4>Messanger</h4>
                        <h5>Misha Isakov</h5>
                        <a href="https://m.me/misha.isakov.165" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <IoLogoWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+7 (932) 303 39 89</h5>
                        <a href="https://api.whatsapp.com/send?phone=89323033989" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                </div>
                {/* EMD OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail} autocomplete="off">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="You Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact 