import { useState } from 'react';
import { RiHome2Line } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);


  return (
    <nav className="relative bg-gray-600 py-4 md:h-16 md:px-10">
        <button onClick={() => setShowLinks(!showLinks)} className="text-3xl text-white opacity-60 border-[1px] py-1 px-2 rounded-lg ml-6 md:hidden"><HiBars3 /></button>
        <div className={`${showLinks ? "max-h-[10rem]" : "max-h-0"} absolute top-[4.5rem] bg-gray-600 w-full duration-300 md:static md:overflow-visible`}>
          <button>
            <RiHome2Line className="text-4xl text-white inline ml-6 mb-2 opacity-60 md:text-2xl" />
            <span className="text-white ml-3 text-xl opacity-80 md:text-lg">Home</span>
          </button>
        </div>
    </nav>
  )
}

export default Navbar