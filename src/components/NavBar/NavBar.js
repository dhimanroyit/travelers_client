import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <header className="container mx-auto h-20 relative z-30 flex items-center">
      <Link to="/"><h2 className="text-4xl font-black uppercase tracking-wider text-gray-50 ">Travelers</h2></Link>
      <nav className="mx-auto space-x-10">
        <Link className="px-4 py-3 inline-block text-gray-50 text-sm" to="/">Home</Link>
        <Link className="px-4 py-3 inline-block text-gray-50 text-sm" to="/">About Us</Link>
        <Link className="px-4 py-3 inline-block text-gray-50 text-sm" to="/">Tours</Link>
        <Link className="px-4 py-3 inline-block text-gray-50 text-sm" to="/">Contact</Link>
        <Link className="px-4 py-3 inline-block text-gray-50 text-sm" to="/">Admin</Link>
      </nav>
      <button>Login</button>
    </header>
  )
}

export default NavBar
