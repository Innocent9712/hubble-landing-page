import React from 'react';
import facebook from "../images/facebook 1.svg";
import twitter from "../images/twitter 1.svg";
import instagram from "../images/instagram 1.svg";


const Footer = () => {
    return (
      <div>
        <footer className="footer">
          <div className='social-icons'>
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
          </div>
          <p class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Chukwuemeka Innocent</a>.
          </p>
        </footer>
      </div>
    );
}

export default Footer;