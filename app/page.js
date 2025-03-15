"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col hero">
        {/* Navigation Bar */}
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <img className="w-30" src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/QUFST0hBTg/rocket-rinder.png?r=fs&h=130&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65" alt="AAROHAN"/>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu (Dialog) */}
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <img className="w-30" src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/QUFST0hBTg/rocket-rinder.png?r=fs&h=130&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65" alt="AAROHAN"/>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Dialog>
        </header>

        {/* Hero Section */}
        <div className="mx-auto mt-80 mb-0 max-w-2xl sm:py-48 lg:py-56 text-center w-full">
          {/* Scroll Effect on AAROHAN Heading */}
          <h1
            className="aarohan transition-all duration-300 ease-in-out"
            style={{
              transform: `translateY(${Math.max(-scrollY * 0.5, -100)}px) scale(${Math.min(1.5, 1 + scrollY * 0.002)})`,
            }}
          >
            <img 
              src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/QUFST0hBTg/rocket-rinder.png?r=fs&h=130&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65" 
              alt="AAROHAN"
            />
          </h1>

          {/* Additional Elements */}
          <div className="relative mt-1 flex items-center justify-between gap-x-63">
            <p className="absolute px-4 py-2.5 text-sm font-semibold h-10 w-60 top-0 left-0">
              <img src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/TUFSQ0ggMjAtMjM/rocket-rinder.png?r=fs&h=130&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65" alt="80s fonts"/>
            </p>
            <p className="absolute px-4 py-2.5 text-sm font-semibold h-10 w-60 top-0 right-0">
              <img src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/TE9SRFMgQVJFTkE/rocket-rinder.png?r=fs&h=130&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65" alt="80s fonts"/>
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="flex relative">
        <div className="quote text-gray-900 flex text-center justify-center flex-col">
          <p className="text-center text-2xl font-semibold">
            Tech meets Tradition, and Innovation meets Inspiration
          </p>
          <div className="flex justify-around text-center mt-10">
                <div className="subquote">
                  <h1>5000+</h1>
                  <p>Attendees</p>
                </div>
                <div className="subquote">
                  <h1>50+</h1>
                  <p>Events</p>
                </div>
                <div className="subquote">
                  <h1>4</h1>
                  <p>Days</p>
                </div>
          </div>
        </div>
      </div>

    </>
  );
}
