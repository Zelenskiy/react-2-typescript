import React  from 'react';
import {Link} from 'react-router-dom';




function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/about'>About</Link>
      <Link to='/posts'>Posts</Link>
    </div>
  )
}

export default Navbar;
