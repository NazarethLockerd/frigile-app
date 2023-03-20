import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './ContactStyles.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-container'>
            <div className='contact-col-1'>
                <div className='contact-content'>
                <div><h2>Get in touch</h2>
                <p>What you need assistance with, we are happy to help, and if you have any further questions, consider contacting
                    below. Thank you for your patiencee and understanding.</p>
                </div>
                <div className='address'>
                    <p>567 Johnson Terrace</p>
                    <p>New Orleans, LA 89012</p>
                </div>
                <div className='icons'>
                    <FaPhone style={{marginRight: 'lrem'}}/>
                    <p>+1 (555) 356-7890-0123</p>
                </div>
                <div className='icons'>
                    <FaEnvelope style={{marginRight: 'lrem'}}/>
                    <p>customersupport@frigile.com</p>
                </div>
                <div className='careers'>
                    <p>Looking for careeers?<span> View all job openings.</span></p>
                </div>
            </div>     
            </div>
            <div className='contact-col-2'>
                <form action=''>
                    <input typeof='text' placeholder='Full name'/>
                    <input typeof='email' placeholder='Email'/>
                    <input typeof='phone' placeholder='Phone'/>
                    <textarea name='Message' placeholder='Message' cols='30' rows='10'></textarea>
                    <div className='checkbox'>
                        <input type='checkbox' />
                        <p>By checking this box, you agree to the <span>Privacy Policy</span> and
                        <span> Cookie Policy</span>.</p>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact