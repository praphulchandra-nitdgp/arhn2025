"use client";

import Navbar from "./components/Navbar";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Home() {

  return (
    <>

      <div className="bg-white min-h-screen flex flex-col hero">
        <Navbar/> 
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
