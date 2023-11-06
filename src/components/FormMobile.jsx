import React from "react";
import "./css/form.css";
import { useTranslation } from 'react-i18next';

const FormMobile = () => {

    const { t } = useTranslation();

    return (
        <div className="form">
            <div className="form-mobile">
                <button>{t('SIGN UP FOR MEMBERSHIP')}</button>
            </div>
        </div>
    )
}

export default FormMobile; 