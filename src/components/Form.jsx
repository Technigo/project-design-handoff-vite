import React from "react";
import "./css/form.css";
import { useTranslation } from 'react-i18next';

const Form = () => {

    const { t } = useTranslation();

    return (
        <div className="form">
            <div className="form-info">
                <h1>{t('Sign up for a membership to unlock your full potential')}</h1>
                <h2>{t('get workout plans tailored to you')}</h2>
                <h2>{t('unlimited access to library')}</h2>
                <h2>{t('access to live trainers')}</h2>
                <button>{t('SIGN UP FOR MEMBERSHIP')}</button>
            </div>
            <img src="/form.png" alt="form picture" />
        </div>
    )
}

export default Form; 