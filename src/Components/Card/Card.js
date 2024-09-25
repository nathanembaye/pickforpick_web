import './Card.css';
import "@fontsource/caveat"; // Defaults to weight 400
import React, { useState } from 'react';
import headshot from './headshot.jpg';
import { ReactComponent as X } from './x.svg'

function Card() {
   

  return (
    <div className="cardContainer">
        <div className="cardtop">
          <X className='cardCancelButton'/>
        </div>

        <div className="cardMiddle">

            <div className="cardImage">
              <img className="cardImageData" src={headshot} alt="user"/>
            </div>
            <div className="cardUsername">
              <p className="cardUsernameText">OddNathan</p>
            </div>
            <div className="cardDisplayName">
              <p className="cardDisplayNameText">Nathan Embaye</p>
            </div>

        </div>

        <div className="cardBottom">
            <p className="cardSubscribButtonText">Subscribe</p>
        </div>
    </div>
  );
}

export default Card;

