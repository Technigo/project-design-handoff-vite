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
            <img src={Post1} alt="Yoga mats" />
            <p>25 July 2023<br/><strong>FALL SCHEDULE</strong><br/>We are open throughout the fall from 25/8 to 20/12. Unlimited yoga during this period - 1490 SEK.</p>
            <button className="read-more-button">Read more</button>
          </div>
          <div className="post-box">
            <img src={Post2} alt="Yoga teacher training" />
            <p>5 July 2023<br/><strong>YOGA TEACHER TRAININGS</strong><br/>Starting in the fall of 2023. Early-bird price, 29,900 SEK (including VAT). For more information, email or call, +46 736 26...</p>
            <button className="read-more-button">Read more</button>
          </div>
          <div className="post-box">
            <img src={Post3} alt="Ashtanga course" />
            <p>5 June 2023<br/><strong>ASHTANGA COURSE FALL '23</strong><br/>Sign up for an Ashtanga course, Step 1, 2, or 3 this fall and receive a free 10-class pass! The pass...</p>
            <button className="read-more-button">Read more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentPosts;