import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./css/articlesmobile.css";
import articlesMobileData from "../data/articlesMobile.json";

const ArticlesMobile = () => {
    const [articlesMobile, setArticlesMobile] = useState([]);

    useEffect(() => {
        setArticlesMobile(articlesMobileData.articlesMobile);
    }, []);

    return (
        <div className="article-mobile">
            <Link to="/"><img src="chevron-left.png" alt="go back" className="goback" /></Link>
            <div className="article-mobile-top">
                <h1>About Us</h1>
            </div>
            <div className="article-mobile-container">
                {articlesMobile.map((article, index) => (
                    <div key={index} className="article-item">
                        <div className="article-mobile-content">
                            <h3>{article.name}</h3>
                            <div className="image-container">
                                <img src={article.image} alt="article picture" />
                                <button className="read-more">read more</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArticlesMobile;
