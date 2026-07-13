import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="relative z-50 px-6 py-7">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-white text-3xl font-black cursor-pointer">
          Miggy
          <span className="text-[#06A2C2]">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-[#06A2C2] transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#06A2C2] hover:bg-cyan-500 hover:scale-105 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } p-8 flex flex-col`}
      >
        <button
          className="self-end text-white mb-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <ul className="flex flex-col gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-white text-xl font-semibold hover:text-[#06A2C2] transition-colors duration-300"
              >
                {item.name}
              </button>
            </li>
          ))}

          <li className="pt-6">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-[#06A2C2] hover:bg-cyan-500 text-white py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;