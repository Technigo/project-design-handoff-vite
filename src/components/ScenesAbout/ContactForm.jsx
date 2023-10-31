import React from 'react'

export const ContactForm = () => {
  return (
    <section className='contact-section'>
        <h2>Contact</h2>
        <form>
            <label htmlFor="name">Name</label>
            <input  type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Type your name here..." 
                    required />
            
            <label htmlFor="email">Email</label>
            <input  type="email"
                    name="email"
                    id="email" 
                    placeholder="Type your email here..." 
                    required />

            <label  className="checkbox-container" 
                    htmlFor="terms">Terms and conditions
            <input  type="checkbox" 
                    name="terms" 
                    id="terms" 
                    value="false" 
                    required />
            </label>
            
            <button type="submit">Contact me</button>
        </form>
    </section>
  )
}
