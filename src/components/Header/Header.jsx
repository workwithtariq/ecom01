import React, { useState } from "react";
import MenuToggle from "./MenuToggle"; // Import MenuToggle
import DesktopNav from "./DesktopNav"; // Import DesktopNav
import MobileNav from "./MobileNav"; // Import MobileNav

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center px-4 py-6 bg-white text-black max-w-[1280px] mx-auto">
      <div className="text-4xl font-Poppins">
        <a href="/">E-com</a></div>
      <nav>
        {/* Mobile Menu Toggle */}
        <MenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
        
        {/* Desktop Navigation */}
        <DesktopNav />
        
        {/* Mobile Navigation */}
        <MobileNav isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Header;
