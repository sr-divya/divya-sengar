import React from 'react'
import {Link,useLocation} from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <>
    
   <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/' className={`mr-5 hover:text-gray-900 ${location.pathname === '/' ? 'bg-slate-900 px-9 py-3 text-white rounded-md' : ''} hover:bg-slate-300 px-9 py-3 hover:text-white rounded-md`}>Home</Link>
      <Link to='/about' className={`mr-5 hover:text-gray-900 ${location.pathname === '/about' ? 'bg-slate-900 px-9 py-3 text-white rounded-md' : ''} hover:bg-slate-300 px-9 py-3 hover:text-white rounded-md `}>About</Link>
      <Link to='/contact' className={`mr-5 hover:text-gray-900 ${location.pathname === '/contact' ? 'bg-slate-900 px-9 py-3 text-white rounded-md' : ''} hover:bg-slate-300 px-9 py-3 hover:text-white rounded-md`}>Contact</Link>
      <Link to='/error' className={`mr-5 hover:text-gray-900 ${location.pathname === '/error' ? 'bg-slate-900 px-9 py-3 text-white rounded-md' : ''} hover:bg-slate-300 px-9 py-3 hover:text-white rounded-md`}>Error</Link>
    </nav>

  </div>
</header>

    </>
  )
}

export default Navbar