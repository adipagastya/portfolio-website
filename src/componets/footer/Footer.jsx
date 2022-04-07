import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Adipa Agastya</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/adipagastya"><FaFacebook /></a>
        <a href="https://instagram.com/adipagastya"><FiInstagram /></a>
        <a href="https://twitter.com/adipagastya"><IoLogoTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Adipa Agastya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer