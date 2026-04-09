import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className="contact">
        <form action="https://formspree.io/f/xreojnwe" method="POST" className='contact-form' >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact