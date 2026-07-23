"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-white hover:text-emerald-300 transition"
        >
          CareBridge
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="#about" className="hover:text-emerald-300 transition">
            About
          </a>

          <a href="#features" className="hover:text-emerald-300 transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-emerald-300 transition">
            How It Works
          </a>

          <a href="#founder" className="hover:text-emerald-300 transition">
            Founder
          </a>

          <button className="rounded-lg bg-emerald-600 px-5 py-2 hover:bg-emerald-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-black/90 backdrop-blur-md transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 text-white">

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="py-3 hover:text-emerald-300 transition"
          >
            About
          </a>

          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="py-3 hover:text-emerald-300 transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="py-3 hover:text-emerald-300 transition"
          >
            How It Works
          </a>

          <a
            href="#founder"
            onClick={() => setIsOpen(false)}
            className="py-3 hover:text-emerald-300 transition"
          >
            Founder
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-lg bg-emerald-600 px-5 py-3 hover:bg-emerald-700 transition"
          >
            Login
          </button>

        </div>
      </div>
    </nav>
  );
}