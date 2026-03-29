import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between h-16">

        {/* Logo */}
        <h1 className="text-white font-semibold text-lg">
          Sagar Sharma
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
  className="md:hidden text-white z-50 relative"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-4 text-gray-300 text-sm">

          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
            About
          </a>

          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
            Services
          </a>

          <a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
            Projects
          </a>

          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}