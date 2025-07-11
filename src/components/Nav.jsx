import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

function Nav() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <nav className='bg-cyan-800'>
      <div className='h-16 flex items-center justify-between'>
        {/* logo */}
        <div className='text-3xl text-white font-bold px-4'>MyBank</div>

        {/* desktop menu */}
        <div className='hidden sm:block'>
          <a href='' className='text-gray-100 text-lg px-4'>Home</a>
          <a href='' className='text-gray-100 text-lg px-4'>About us</a>
          <a href='' className='text-gray-100 text-lg px-4'>Features</a>
          <a href='' className='text-gray-100 text-lg px-4'>Solution</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className=" block sm:hidden px-5 text-3xl text-white"> 
            <CiMenuBurger />
        </button>
      </div>

      {/* mobile menu */}
    <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-cyan-100 space-y-2 pb-3`}>
         <a href='' className='text-gray-600 text-lg px-4 block'>Home</a>
        <a href='' className='text-gray-600 text-lg px-4 block'>About us</a>
        <a href='' className='text-gray-600 text-lg px-4 block'>Features</a>
        <a href='' className='text-gray-600 text-lg px-4 block'>Solution</a>
      </div>
    </nav>
  );
}

export default Nav;
