import './Home.css';
import CoverImage from '../img/cover.png'
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/shop'), [history]);
  return (
    <div className="cover center-parent text-center" style={{
      backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.12), 
        rgba(0, 0, 0, 0.12)
      ), url(${CoverImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'
    }}>
      <div className="center">
        <h2 className="text-center">Cinnamon Rolls</h2>
        <h3 className="mb-4 text-center">Freshly Baked.</h3>
        <span className="round-btn" onClick={handleOnClick}>Shop Now</span>
      </div>
    </div>
  );
}
