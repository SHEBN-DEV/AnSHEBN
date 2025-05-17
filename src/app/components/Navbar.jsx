import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#191617] text-white py-4 px-8 flex items-center justify-between font-[var(--font-montserrat)]">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <Image src="/images/shared/logo.png" alt="Logo shebn" width={40} height={40} />
          <span className="text-pink-500 font-bold text-lg tracking-widest"></span>
        </div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#" className="hover:text-pink-400">Home</a></li>
          <li><a href="#" className="hover:text-pink-400">Profiles</a></li>
          <li><a href="#" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#" className="hover:text-pink-400">Forum</a></li>
          <li><a href="#" className="bg-pink-700 text-white px-3 py-1 rounded hover:bg-pink-800 transition">Contact us</a></li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <button className="border border-white px-6 py-2 rounded-[25px] hover:bg-white hover:text-black transition font-bold font-[var(--font-montserrat)]">LOG IN</button>
        <button className="border border-white px-6 py-2 rounded-[25px] hover:bg-pink-700 hover:text-white transition font-bold font-[var(--font-montserrat)]">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar; 