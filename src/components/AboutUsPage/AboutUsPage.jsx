import './AboutUsPage.css';
import VisionImg from '../../../public/images/Image18.png';
import StoryImg from '../../../public/images/Rectangle19.png';
import FormImg from '../../../public/images/Image22.png';
import { Link } from 'react-router-dom';

export const AboutUsPage = () => {
  return (
    <div className='aboutUsPage-wrapper'>
<div className='vision-wrapper'>
<img className='vision-img' src={VisionImg} alt='picture of a young girl playing parkour' />
<div className='vision-text'>
<h1>Our Vision & Goal</h1>
<p>Our vision is to create a world where everyone has the opportunity to experience the joy of parkour. We believe that parkour is more than just a sport; it's a way of life. </p>
<p>Our goal is to inspire people to push their limits, overcome obstacles, and acheive their full potential through the practice of parkour.</p>
</div>
</div>
<div className='story-wrapper'>
<img className='story-img' src={StoryImg} alt='picture of a young boy playing parkour' />
<div className='story-text'>
<h1>Our Story</h1>
<p>Our story It started with grandma and 9-year-old Nestor being bored on their way home from school, then came Aunt Parkour, and today Play Parkour offers parkour programs and classes for all ages. The instructors are experienced and help students develop their strength, agility, balance, and coordination. We also have an online platform where students can learn parkour at their own pace and in the comfort of their own home.</p>
</div>
<img className='form-img' src={FormImg} alt='picture of a middle age couple playing parkour' />
</div>
<div className="contact-form">
        <h2>Contact Us</h2>
        <p>We would love to hear from you!</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <div className="checkbox-wrapper">
          <input className='checkbox' type="checkbox" id="privacy" />
          <label htmlFor="privacy">I agree to the <span className="grey-text">Privacy terms</span></label>
        </div>
          <Link to="/">
        <button type="submit">Submit</button>
      </Link>
      </div>
    </div>
  )
}
