import React, { useState } from 'react';

export const SubscribeNow = () => {
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [clickedSubscribe, setClickedSubscribe] = useState(false);

    const handleSubscribe = () => {
        if (isValidEmail) {
            setSubscribed(true);
        } else {
            // Show the error message when the user clicks the Subscribe button
            setClickedSubscribe(true);
        }
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);

        // Check if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(newEmail));
    };

    return (
        <div className=''>
            {subscribed ? (
                <p>Thank you for signing up!</p>
            ) : (
                <div className=''>
                    <p>Subscribe to our newsletter</p>
                    <label className="block mt-4 text-white">
                        Email:
                        <input
                            className={`bg-footer-color border-b-2 border-white ${!isValidEmail && clickedSubscribe ? 'border-red-500' : ''}`}
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    {clickedSubscribe && !isValidEmail && <p className="text-red-500">Invalid email</p>}
                    <button className="hover:shadow-yellow-box bg-white text-black w-44 border-solid border-2 border-black p-2 mb-4 mt-4" onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </div>
            )}
        </div>
    );
};
