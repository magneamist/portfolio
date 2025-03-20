import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import MenuModal from "./MenuModal";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 right-4 z-40 sm:hidden">
      <HamburgerIcon onClick={toggleModal} />
      <MenuModal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
}
