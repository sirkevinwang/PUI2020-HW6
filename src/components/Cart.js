import './Home.css';
import CoverImage from '../img/cover.png'
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Cart = (props) => {
  return (
    <div className="cover center-parent text-center" style={{
      backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.12), 
        rgba(0, 0, 0, 0.12)
      ), url(${CoverImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'
    }}>
    </div>
  );
}

export default Cart;