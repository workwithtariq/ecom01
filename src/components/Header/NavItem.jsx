import React, { useState } from "react";

const NavItem = ({ href, children, submenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <li className="mt-4 md:mt-0 relative group">
      <a
        href={href || "#"}
        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
        className="relative text-2xl transition-colors duration-300 hover:text-gray-500 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px] after:bg-gray-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
      >
        {children}
      </a>
      {/* Submenu */}
      {submenu && (
        <ul
          className={`z-50 absolute top-full right-0 bg-white shadow-lg rounded-lg mt-2 py-2 transition-all duration-300 ${
            isSubmenuOpen ? "block" : "hidden"
          } `}
        >
          {submenu.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
