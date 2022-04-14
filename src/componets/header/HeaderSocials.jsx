import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/adipagastya" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/adipagastya" target="_blank"><BsGithub /></a>
        <a href="https://facebook.com/adipagastya" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials