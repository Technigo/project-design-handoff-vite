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
        <div>
            {subscribed ? (
                <p>Thank you for signing up!</p>
            ) : (
                <div className='mx-16'>
                    <p>Subscribe to our newsletter</p>
                    <label className="block mt-4">
                        Email:
                        <input
                            className={`bg-slate-500 border-b-2 border-black ${!isValidEmail && clickedSubscribe ? 'border-red-500' : ''}`}
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    {clickedSubscribe && !isValidEmail && <p className="text-red-500">Invalid email</p>}
                    <button className="bg-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4" onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </div>
            )}
        </div>
    );
};
