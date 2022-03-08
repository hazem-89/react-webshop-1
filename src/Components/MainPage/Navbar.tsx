import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import CartMenu from './CartMenu';

function Navbar() {
  return (
    <div>
      <HamburgerMenu />
      <CartMenu />
    </div>
  )
}

export default Navbar