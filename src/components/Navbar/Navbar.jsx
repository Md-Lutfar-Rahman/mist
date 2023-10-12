// import React from 'react';

const Navbar = () => {
    return (
        <div className="mt-2 sticky top-0 w-full shadow-md">
     <nav className="bg-green-400 p-4">
      <div className="container mx-auto gap-6 flex justify-start items-center">
        {/* Logo and Brand Name */}
        <div className="text-white font-bold text-lg">
          <span>MIST Ltd.</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:underline">About Us</a>
          </li>
          <li>
            <a href="/administration" className="hover:underline">Administration</a>
          </li>
          <li>
            <a href="/admissions" className="hover:underline">Admissions</a>
          </li>
          <li>
            <a href="/academic" className="hover:underline">Academic</a>
          </li>
          <li>
            <a href="/department" className="hover:underline">Department</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;