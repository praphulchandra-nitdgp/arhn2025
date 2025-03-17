"use client";
import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// ✅ Define the navigation links array
const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Schedule", href: "/schedule" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <img
                className="w-30"
                src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/QUFST0hBTg/rocket-rinder.png?r=fs&h=130&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65"
                alt="AAROHAN"
              />
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
                <img
                  className="w-30"
                  src="https://see.fontimg.com/api/rf5/yV5d/YjI2MjBlNjJiMWZhNDdjN2I3ZDUxN2RiYmI3MzY1NDMub3Rm/QUFST0hBTg/rocket-rinder.png?r=fs&h=130&w=2000&fg=DC7D00&bg=FFFFFF&tb=1&s=65"
                  alt="AAROHAN"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Dialog>
      </header>
    </>
  );
}
