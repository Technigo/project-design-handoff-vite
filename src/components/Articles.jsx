import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./css/articles.css";
import articlesData from "../data/articles.json";
import { useTranslation } from 'react-i18next';

const Articles = () => {

    const { t } = useTranslation();

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(articlesData.articles);
    }, []);

    return (
        <div className="article">
            <Link to="/"><img src="chevron-left.png" alt="go back" className="goback" /></Link>
            <div className="article-top">
                <h1>{t('About Us')}</h1>
            </div>
            <div className="article-container">
                {articles.map((article, index) => (
                    <div key={index} className="article-item">
                        <div className={`article-item-content ${article.isReverse ? "reverse" : ""}`}>
                            <img src={article.image} alt="article picture" />
                            <div className="text-content">
                                <h3>{article.name}</h3>
                                <p>{article.info}</p>
                                <button>{t('read more')}</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Articles;
