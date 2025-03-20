import React from "react";
import Link from "next/link";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2"
        aria-label="Close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <nav className="text-center">
        <ul className="flex flex-col gap-8">
          <li>
            <Link
              href="/"
              className="text-white text-3xl font-bold hover:text-pink transition-colors duration-300"
              onClick={onClose}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-white text-3xl font-bold hover:text-pink transition-colors duration-300"
              onClick={onClose}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white text-3xl font-bold hover:text-pink transition-colors duration-300"
              onClick={onClose}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuModal;
