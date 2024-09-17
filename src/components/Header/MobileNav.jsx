import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import NavItem from './NavItem';

const MobileNav = ({ isOpen }) => {
  return (
    <ul
      className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } bg-white absolute top-16 left-0 right-0 z-10 pl-4 pr-10 text-right pb-2`}
    >
     

      {/* Products NavItem with Submenu */}
      <NavItem
        href="#"
        submenu={[
          { href: "/products/laptops", label: "Laptops" },
          { href: "/products/phones", label: "Phones" },
          { href: "/products/gadgets", label: "Gadgets" }
        ]}
      >
        <span className="flex items-end gap-1 justify-end">
          <span>Products</span>
          <ChevronDownIcon className="w-6" />
        </span>
      </NavItem>

      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </ul>
  );
};

export default MobileNav;
