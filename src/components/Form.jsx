import React from "react";
import "./css/form.css";

const Form = () => {

    return (
        <div className="form">
            <div className="form-info">
                <h1>Sign up for a membership to unlock your full potential</h1>
                <h2>get workout plans tailored to you</h2>
                <h2>unlimited access to library</h2>
                <h2>access to live trainers</h2>
                <button>SIGN UP FOR MEMBERSHIP</button>
            </div>
            <img src="/form.png" alt="form picture" />
        </div>
    )
}

export default Form; 