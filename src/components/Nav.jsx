
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { NAV_LINKS } from '../constants/Nav_Links';  

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-800">
      <div className="h-16 flex items-center justify-between">
        {/* logo */}
        <div className="text-3xl text-white font-bold px-4">MyBank</div>

        {/* desktop menu */}
        <div className="hidden sm:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-100 text-lg px-4 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

    
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden px-5 text-3xl text-white"
        >
          <CiMenuBurger />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-cyan-100 space-y-2 pb-3`}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-gray-600 text-lg px-4 block hover:text-cyan-800"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
