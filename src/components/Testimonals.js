import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import "./TestimonalsStyles.css"

const Testimonals = () => {
  return (
    <div className='testimonal'>
        <div className='container'>
            <div className='outline'>
            <div className='content'>
                <i><FaDatabase/> Xno</i>
                <p className='body'>
                    Ease of use is extradionary. Makes the user feel the sky is the limit with the responsiveness, 
                    and user-friendly commerce. 
                </p>
                <div className='name'>
                    <p>Robert Holden</p>
                    <p>CEO, Xno</p>
                </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Testimonals