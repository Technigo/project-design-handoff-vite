import React from 'react';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="navbar">
        <img src="Logotype.png" alt="Logo" className="logo" />
        <ul className="nav-list">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Prices</a></li>
        </ul>
      </div>
      <div className="content">
        <div className="text">
          <h1>Your journey to inner balance begins here.</h1>
          <h2>With us, yoga is for everyone, whether you are a beginner or an experienced yogini. Welcome to a place where you belong!</h2>
          <div className="buttons">
            <button className="discover-button">Discover our studio</button>
            <button className="login-button">Log in</button>
          </div>
        </div>
        <div className="image">
          <img src="Hero image.png" alt="Hero Image" />
        </div>
      </div>
      <section className="our-yoga">
        <div className="our-yoga-content">
          <h2>Welcome to our community of experienced teachers, where you'll find classes for all levels. Join us for our heartwarming events, including workshops, teacher training, and retreats.</h2>
          <div className="buttons">
            <button className="offerrings-button">View our offerings</button>
          </div>
        </div>
        <div className="offerings">
          <img src="Image section 2.png" alt="Image Section 2" />
          <div className="offerings-text">
            <h1>OUR YOGA</h1>
            <h2>No matter which class you choose, we stress breath, muscle support, and focus to ensure a safe yoga practice. We tailor our classes to your individual needs, whether you require modifications due to injuries or want to challenge yourself. We love sharing our passion for yoga and are always available to answer your questions after the class. We are here for you!</h2>
            <div className="buttons">
            <button className="discoverclasses-button">Discover Our Classes</button>
            </div>  
          </div>
        </div>
      </section>
      <section className="boxes">
        <div className="overlay">
          <div className="box">CLASSES</div>
          <div className="box">STUDIO</div>
          <div className="box">SCHEDULE</div>
        </div>
      </section>  
      <section className="new-yoga">
        <div className="new-yoga-content">
          <h1>NEW TO YOGA?</h1>
          <h2>Start with a free trial session, and we´ll help you begin your journey with confidence.</h2>
          <div className="buttons">
            <button className="book-button">Book Now</button>
          </div>
          </div>
          <div className="about">
            <img src="Image section 5.png" alt="Image Section 5" />
            <div className="about-text">
              <h1>ABOUT US</h1>
              <h2>Serenity Yoga embarked on its journey at Mariatorget, Södermalm in Stockholm in the summer of 2022. In the autumn of 2023, we expanded our presence with a second studio at Hornstull´s strand. </h2>
              <div className="buttons">
              <button className="discoverstory-button">Discover Our Story</button>
            </div>
          </div>        
        </div>  
      </section>
      <section className="recent-posts">
        <h1>RECENT POSTS</h1>
        <div className="post-boxes">
          <div className="post-box">
            <img src="Rectangle 15.png" alt="Post 1" />
            <p>Text for Post 1</p>
          </div>
          <div className="post-box">
            <img src="Rectangle 16.png" alt="Post 2" />
            <p>Text for Post 2</p>
          </div>
          <div className="post-box">
            <img src="Rectangle 17.png" alt="Post 3" />
            <p>Text for Post 3</p>
          </div>
        </div>
      </section>
      <section className="in-touch">
        <h1>Stay in touch with us</h1>
        <h2>Register your email address for news and updates from Serenity Yoga.</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Email address" />
          <button className="subscribe-button">Subscribe</button>
        </div>
        <h2>By signing up for our email list, you consent to the handling of your personal information in accordance with our terms and conditions.</h2>
      </section>
    </div>
  );
};

export default WelcomePage;



