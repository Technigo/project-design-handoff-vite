import React from 'react';
import Post1 from '../assets/Images/Rectangle 15.png';
import Post2 from '../assets/Images/Rectangle 16.png';
import Post3 from '../assets/Images/Rectangle 17.png';
import './RecentPosts.css';


const RecentPosts = () => {
  return (
    <div>
    <section className="recent-posts">
        <h1>RECENT POSTS</h1>
        <div className="post-boxes">
          <div className="post-box">
            <img src={Post1} alt="Post 1" />
            <p>Text for Post 1</p>
            <button className="read-more-button">Read more</button>
          </div>
          <div className="post-box">
            <img src={Post2} alt="Post 2" />
            <p>Text for Post 2</p>
            <button className="read-more-button">Read more</button>
          </div>
          <div className="post-box">
            <img src={Post3} alt="Post 3" />
            <p>Text for Post 3</p>
            <button className="read-more-button">Read more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentPosts;