import './Cart.css';
import CoverImage from '../img/cover.png'
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import OriginalImage from '../img/item-images/the-og.png';
import BlackberryImage from '../img/item-images/bb.png';

const Cart = (props) => {
  return (
    <div>
      <div className="top-cover">
        {/* Cover Image */}
        <div className="intro-section center-parent text-center" style={{
          backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.12), 
        rgba(0, 0, 0, 0.12)
      ), url(${CoverImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'
        }}>
          <div className="center s-center">
            <h3 className="text-center cover-h">Shopping Cart</h3>
          </div>
        </div>
      </div>
      <div id="cart-container">
        <div id="items-wrapper">
          <div className="cart-item">
            <div className="column cart-item-image fill">
              <img src={OriginalImage}></img>
            </div>
            <div className="column cart-item-info">
              <h3 className="item-name">The Original</h3>
              <div className="item-price"><span>$3.99 / pc</span></div>
              <div className="item-config"><span>Vanilla Milk Glazing</span></div>
            </div>
            <div className="column cart-item-actions">
              <div>
                <select name="quantity" id="quantity">
                  <option value="1" defaultChecked>1</option>
                  <option value="3">3</option>
                  <option value="6">6</option>
                  <option value="12">12</option>
                </select>
                <span style={{ paddingLeft: '10px' }}>Rolls</span>
              </div>
              <div><a>Remove</a></div>
              <div><a>Edit</a></div>
            </div>
          </div>
        </div>
        <hr className="divider"></hr>
        <div id="receipt">
          <div className="total-placeholder"></div>
          <div className="total-display">
            <table className="full-width">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className="total-second-col">$3.99</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td className="total-second-col">FREE</td>
                </tr>
                <tr>
                  <td>Estimated tax for 15232</td>
                  <td className="total-second-col">$0.28</td>
                </tr>
              </tbody>
            </table>
            <hr className="divider-2"></hr>
            <table className="full-width">
              <tbody>
                <tr>
                  <td className="total-row">Total</td>
                  <td className="total-second-col total-row">$4.27</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="checkout-btns my-4">
          <span className="round-btn mr-1">Check Out</span>
          <span className="round-btn">Buy with &#xF8FF;Pay</span>
        </div>
      </div>
    </div>

  );
}

export default Cart;