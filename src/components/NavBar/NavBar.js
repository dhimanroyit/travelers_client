import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';

function NavBar() {
  return (
    <header className="h-20 flex items-center">
      <Link to="/">
        <h2 className="text-4xl font-black uppercase tracking-wider text-gray-50 ">
          Travelers
        </h2>
      </Link>
      <nav className="mx-auto space-x-8">
        <Link 
          className="px-4 py-3 inline-block text-gray-50 text-sm" 
          to="/">
          Home
        </Link>
        <Link 
          className="px-4 py-3 inline-block text-gray-50 text-sm" 
          to="/about">
          About Us
        </Link>
        <Link 
          className="px-4 py-3 inline-block text-gray-50 text-sm" 
          to="/tours">
          Tours
        </Link>
        <Link 
          className="px-4 py-3 inline-block text-gray-50 text-sm" 
          to="/contact">
          Contact
        </Link>
        <Link 
          className="px-4 py-3 inline-block text-gray-50 text-sm" 
          to="/admin">
          Admin
        </Link>
      </nav>
      <Link to="/login"><Button>Login</Button></Link>
    </header>
  )
}

export default NavBar
