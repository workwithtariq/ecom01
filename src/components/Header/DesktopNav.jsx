import React from "react";
import NavItem from "./NavItem";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const DesktopNav = () => {
  return (
    <ul className="hidden md:flex md:space-x-8 m-0 p-0 list-none">
      {/* Products NavItem with Submenu */}
      <NavItem
        href="#"
        submenu={[
          { href: "/products/laptops", label: "Laptops" },
          { href: "/products/phones", label: "Phones" },
          { href: "/products/gadgets", label: "Gadgets" },
        ]}
      >
        <span className="flex items-end gap-1">
          <span>Products</span>
          <ChevronDownIcon className="w-6" />
        </span>
      </NavItem>

      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </ul>
  );
};

export default DesktopNav;
