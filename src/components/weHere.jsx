import React from 'react';
import '../styles/weHere.css';

export const WeHere = () => {
    return (
        <React.Fragment>
            <div className ="weHere-page-wrapper">
                <div className='weHere-dsc-holder'>
                <h1 className="weHere-page-title">We are Here for you</h1>
                <p className="weHere-page-subtitle">Thank you for your interest in our yoga services. We welcome any questions, feedback, or inquiries you may have. Please fill out the form, and we&rsquo;ll get back to you as soon as possible. Your journey to wellness and inner balance starts here.</p>
                </div>
                <div className="text-input-holder">
                <label className="weHere-page-label">Name</label>
                <input type="text" placeholder="Anna Marietta" className="weHere-page-name" />
                <label className="weHere-page-label">Email</label>
                <input type="text" placeholder="Anna Marietta@gmail.com" className="weHere-page-email" />
                <label className="weHere-page-label">Message</label>
                <textarea type="text" placeholder="Message" className="weHere-page-message" />
                <div className="weHere-page-checkbox-holder">
                <input type="checkbox" className="weHere-page-checkbox"/><label className='weHere-checkbox'> I agree to the Privacy Policy</label>
                </div>
                <button className="weHere-Submit-button">Submit</button>
                </div>
            </div>
        </React.Fragment>
    )
}

