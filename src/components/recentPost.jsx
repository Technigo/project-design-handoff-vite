import React from "react";
import recentPostsImage from '../assets/image/Rectangle15.png';
import recentPostsImage2 from '../assets/image/Rectangle16.png';
import recentPostsImage3 from '../assets/image/Rectangle17.png';
import '../styles/recentPost.css';

export const RecentPost = () => { 
    return (
        <React.Fragment>
            <div className="recentPost-wrapper">
                
                    <h1 className="recentPost-title-head">RECENT POSTS</h1>
                
                <div className="recentPost-image-wrapper">
                    <div className="recentPost-image">
                        <img className="recentPost-image-1" src={recentPostsImage} alt="recent post" />
                        <img className="recentPost-image-2" src={recentPostsImage2} alt="recent post" />
                        <img className="recentPost-image-3" src={recentPostsImage3} alt="recent post" />
                    </div>    
                </div>
            </div>
        </React.Fragment>
    )
}



