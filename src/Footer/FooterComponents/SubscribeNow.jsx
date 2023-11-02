import React, { useState } from 'react';

export const SubscribeNow = () => {
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleSubscribe = () => {
        if (!isValidEmail || email.trim() === '') {
            setIsValidEmail(false); // Mark email as invalid
        } else {
            setSubscribed(true);
        }
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValidEmail(true); // Reset email validity

        // Check if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
        if (!emailRegex.test(newEmail)) {
            setIsValidEmail(false);
        }
    };

    return (
        <div className="">
            {subscribed ? (
                <p>Thank you for signing up!</p>
            ) : (
                <div className="">
                    <p>Subscribe to our newsletter</p>
                    <label className="block mt-4 text-white">
                        Email:
                        <input
                            className={`bg-footer-color border-b-2 border-white ${!isValidEmail ? 'border-red-500' : ''}`}
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    {!isValidEmail && (
                        <p className="text-red-500">
                            {email.trim() === '' ? 'Please enter your email' : 'Invalid email'}
                        </p>
                    )}
                    <button
                        className="hover:shadow-yellow-box bg-white text-black w-44 border-solid border-2 border-black p-2 mb-4 mt-4"
                        onClick={handleSubscribe}
                    >
                        Subscribe
                    </button>
                </div>
            )}
        </div>
    );
};
