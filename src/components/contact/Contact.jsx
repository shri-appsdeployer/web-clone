import React from 'react';
import './Contact.scss';
import messages  from '../../images/Messages.png'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <div className="contact">
            <div className="contact-left">
                <form >
                <h1>Contact</h1>
                    <div>
                      <label htmlFor="name">Name</label>
                     <input type="text" id='name' autoComplete='off' />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                     <input type="email" id='email' autoComplete='off'/>
                    </div>
                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button>Sumbit</button>
                    </div>
                </form>
            </div>
            <div className="contact-right">
                <img src={messages} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact