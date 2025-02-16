import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Link to="/">
        <img src={logoSpotify} alt="logo do Spotify" />
      </Link>
      <Link to="/">
        <h1>Spotify</h1>
      </Link>
    </header>
  )
}

export default Header