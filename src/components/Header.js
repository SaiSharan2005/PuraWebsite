import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <img src="https://havepura.com/wp-content/uploads/2023/07/Logo.webp" alt="Logo" width="400" height="200" />
        <nav className="space-x-4">
          <a href="#products" className="hover:text-gray-300">Product</a>
          <a href="#contact" className="hover:text-gray-300">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
