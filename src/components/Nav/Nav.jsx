import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navbar">
        <Link to="/home">HOME</Link>
        <Link to="/blue">BLUE</Link>
        <Link to="/red">RED</Link>
    </div>
  )
}

export default Nav