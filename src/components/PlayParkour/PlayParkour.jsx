import './PlayParkour.css';
import { Link } from 'react-router-dom';

export const PlayParkour = () => {
  return (
    <div className='playparkour-wrapper'>
      <h2>Play Parkour</h2>
      <p>Treat your life as an adventure<br></br>- all your life</p>
      <Link to="/about">
      <button className="playParkourButton">Play Parkour</button>
      </Link>
    </div>
  )
}
