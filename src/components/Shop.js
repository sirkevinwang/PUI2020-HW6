import { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './Shop.css';
import CoverImage from '../img/cover.png'

function Shop() {
  const flavors = [
    {
      id: 'og',
      alt: 'Original',
      imgSrc: './img/og.png',
      productLink: 'products/original'
    },
    {
      id: 'bb',
      alt: 'Blackberry',
      imgSrc: './img/bb.png',
      productLink: 'products/blackberry'
    },
    {
      id: 'walnut',
      alt: 'Walnut',
      imgSrc: './img/walnut.png',
      productLink: 'products/original'
    },
    {
      id: 'oggf',
      alt: 'Original GF',
      imgSrc: './img/oggf.png',
      productLink: 'products/original'
    },
    {
      id: 'ps',
      alt: 'Pumpkin Spice',
      imgSrc: './img/pumpkin.png',
      productLink: 'products/original'
    },
    {
      id: 'cp',
      alt: 'Caramel Pecan',
      imgSrc: './img/pecan.png',
      productLink: 'products/original'
    },

  ];
  return (
    <>
      <div class="top-cover">
        {/* Cover Image */}
        <div class="intro-section center-parent text-center" style={{
          backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.12), 
        rgba(0, 0, 0, 0.12)
      ), url(${CoverImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'
        }}>
          <div class="center s-center">
            <h3 class="text-center">Cinnamon Rolls</h3>
          </div>
        </div>
      </div>
      { /* Flavor Picker */}
      <div class="flavors-content">
        <div>
          <h4>First, let's pick a flavor...</h4>
        </div>
        <div class="flavor-grid">
          {flavors.map((flavor, index) =>
            <div>
              <Link to={flavor.productLink}>
                <div id={flavor.id} class="flavor-item center-parent text-center">
                  <img class="center flavor-icon" alt={flavor.alt} src={flavor.imgSrc} />
                </div>
              </Link>
              <h5>{flavor.alt}</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
