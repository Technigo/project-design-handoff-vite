import React from "react";
import recentPostsImage from '../assets/image/Rectangle15.png';
import recentPostsImage2 from '../assets/image/Rectangle16.png';
import recentPostsImage3 from '../assets/image/Rectangle17.png';
import '../styles/recentPost.css';

export const RecentPost = () => { 
    return (
        <React.Fragment>
            <div className="recentPost-wrapper">
                <div className="recentPost-title">
                    <h1 className="recentPost-title-head">RECENT POSTS</h1>
                </div>
                <div className="recentPost-image-wrapper">
                    <div className="recentPost-card-wrapper">
                        <div className ="recentPost-card-1">
                            <img className="recentPost-image-1" src={recentPostsImage} alt="recent post" />
                            <p className="recentPost-posting-dates">25 July 2023</p>
                            <h2 className="recentPost-card-title">FALL SCHEDULE</h2>
                            <p className="recentPost-content">We are open throughtout the fall from 25/8 to 20/12 Unlimited yoga during this period - 1490 SEK</p>
                            <div className="recentPost-readmore-button-wrapper">
                            <button className="readmore-button">Read more</button>
                            </div>
                        </div>
                        <div className ="recentPost-card-2">
                            <img className="recentPost-image-2" src={recentPostsImage2} alt="recent post" />
                            <p className="recentPost-posting-dates">5 July 2023</p>
                            <h2 className="recentPost-card-title">YOGA TEACHER TRAININGS</h2>
                            <p className="recentPost-content">Starting in the fall of 2023, Early-bird price 29,000 SEK (including VAT). For more information, email or call +46 73626... </p>
                            <div className="recentPost-readmore-button-wrapper">
                                <button className="readmore-button">Read more</button>
                                </div>
                            </div>
                        <div className ="recentPost-card-3">
                            <img className="recentPost-image-3" src={recentPostsImage3} alt="recent post" />
                            <p className="recentPost-posting-dates">25 July 2023</p>
                            <h2 className="recentPost-card-title">ASHTANGA COURSE FALL&rsquo;23</h2>
                            <p className="recentPost-content">Sign up for an Ashtanga cours, Step 1, 2, or 3 this fall and receive a free 10 class pass! the pass...</p>
                            <div className="recentPost-readmore-button-wrapper">
                                <button className="readmore-button">Read more</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </React.Fragment>
    )
}



