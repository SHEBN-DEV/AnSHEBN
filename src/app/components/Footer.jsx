import Image from "next/image";
import { FaInstagram, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#ff33cc] flex flex-col sm:flex-row items-center justify-between px-8 py-8">
      <div className="mb-6 sm:mb-0">
        <Image src="/images/shared/logo_black.png" alt="Logo COHEX" width={160} height={80} />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto justify-between">
        <ul className="flex flex-col gap-2 text-white font-bold text-lg items-center sm:items-start">
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact us</a></li>
        </ul>
        <div className="flex gap-6 text-white text-2xl mt-4 sm:mt-0">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="X"><FaXTwitter /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 