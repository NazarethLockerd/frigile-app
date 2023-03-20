import React from 'react'
import './FAQStyles.css'

const FAQ = () => {
  return (
    <div className='faq-section'>
        <div className='faq-container'>
            <div className='faq-col-1'>
            <h3>Frequently asked questions</h3>
            <p>Cant' find the answer you're looking for?</p>
            <p>Reach out to our <span>customer support</span> team.</p>
            </div>
            <div className='faq-col-2'>
                <div className='faq'>
                    <h5>How do you access the membership?</h5>
                    <p>You go into the account and click/tap member access.</p>
                </div>
                <div className='faq'>
                    <h5>How do you access the membership?</h5>
                    <p>You go into the account and check/tap member access.</p>
                </div>
                <div className='faq'>
                    <h5>How do you access the membership?</h5>
                    <p>You go into the account and check/tap member access.</p>
                </div>
                <div className='faq'>
                    <h5>How do you access the membership?</h5>
                    <p>You go into the account and check/tap member access.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ