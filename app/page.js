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
        <div className="hero-container mx-auto mt-80 mb-0 max-w-2xl sm:py-48 lg:py-56 text-center w-full">
          {/* Scroll Effect on AAROHAN Heading */}
          <h1
            className="aarohan flex items-center justify-center">
            <img 
              src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/QUFST0hBTg/rocket-rinder.png?r=fs&h=200&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65" 
              alt="AAROHAN"
            />
          </h1>

          {/* Additional Elements */}
          <div className="details relative mt-1 flex items-center justify-around">
            <h2 className="absolute px-4 py-2.5 text-sm font-semibold h-10 top-0 left-0 flex justify-center">
              <img src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/TUFSQ0ggMjAtMjM/rocket-rinder.png?r=fs&h=130&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65" alt="date"/>
            </h2>
            <h2 className="absolute px-4 py-2.5 text-sm font-semibold h-10 top-0 right-0 flex justify-center">
              <img src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/TE9SRFMgQVJFTkE/rocket-rinder.png?r=fs&h=130&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65" alt="venue"/>
            </h2>
            <div className="absolute hero-typography flex justify-center items-center mx-auto"> 
              <div className="imagine flex justify-center items-center">
                <span><p>/imagine:</p></span>
              </div>
              <div className="typewriter">
                <h1>Technology meets Tradition, Innovation meets Inspiration.</h1>
                <h1 className="type21">Technology meets Tradition,</h1>
                <h1 className="type22">                Innovation meets Inspiration.</h1>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
}
