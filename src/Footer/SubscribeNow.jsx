import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import "../Translation";

export const SubscribeNow = () => {
    const { t } = useTranslation();
    //function to check if the email is valid
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
                <p>{t("thankYou")}</p>
            ) : (
                <div className="">
                    <p>{t("subscribeNews")}</p>
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
                        {t("subscribeButton")}
                    </button>
                </div>
            )}
        </div>
    );
};
