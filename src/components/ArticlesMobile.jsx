import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./css/articlesmobile.css";
import articlesMobileData from "../data/articlesMobile.json";
import { useTranslation } from 'react-i18next';

const ArticlesMobile = () => {

    const { t } = useTranslation();

    const [articlesMobile, setArticlesMobile] = useState([]);

    useEffect(() => {
        setArticlesMobile(articlesMobileData.articlesMobile);
    }, []);

    return (
        <div className="article-mobile">
            <Link to="/"><img src="chevron-left.png" alt="go back" className="goback-articles" /></Link>
            <div className="article-mobile-top">
                <h1>{t('About Us')}</h1>
            </div>
            <div className="article-mobile-container">
                {articlesMobile.map((article, index) => (
                    <div key={index} className="article-item">
                        <div className="article-mobile-content">
                            <h3>{t(article.name)}</h3>
                            <div className="image-container">
                                <img src={article.image} alt="article picture" />
                                <button className="read-more">{t('read more')}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArticlesMobile;
