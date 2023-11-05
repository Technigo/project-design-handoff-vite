import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./css/contactform.css";

const ContactForm = () => {


    return (
        <div className="contact">
            <Link to="/"><img src="chevron-left.png" alt="go back" /></Link>
            <div className="form-parent">
                <div className="form-container"> {/* Container to align to the left */}
                    <h2>Contact Us</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="name" />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" rows="8" placeholder="message" />
                        </div>
                        <div className="form-group">
                            <button type="button">Send</button>
                        </div>
                    </form>
                </div>
                <img src="contactform.png" alt="picture of a laptop" className="contact-img" />
            </div>

            <h2>Social Media</h2>
            <div className="contacts">
                <div className="contacts-child">
                    <img src="phone.png" alt="whatsapp" className="small-img" />
                    <p>Whatsapp</p>
                </div>
                <div className="contacts-child">
                    <img src="insta.png" alt="instagram" className="small-img" />
                    <p>Instagram</p>
                </div>
                <div className="contacts-child">
                    <img src="fb.png" alt="facebook" className="small-img" />
                    <p>Facebook</p>
                </div>
                <div className="contacts-child">
                    <img src="x.png" alt="twitter" className="small-img" />
                    <p>Twitter</p>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;
