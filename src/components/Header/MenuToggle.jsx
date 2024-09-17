import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const MenuToggle = ({ isOpen, toggleMenu }) => {
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <XMarkIcon className="h-8 w-8 text-black" /> : <Bars3Icon className="h-8 w-8 text-black" />}
      </button>
    </div>
  );
};

export default MenuToggle;
