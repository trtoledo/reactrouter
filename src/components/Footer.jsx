import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="navbar">
    <Link to="/home">HOME</Link>
    <Link to="/blue">BLUE</Link>
    <Link to="/red">RED</Link>
    &copy;2025
    </footer>
  )
}

export default Footer