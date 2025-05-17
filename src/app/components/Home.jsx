import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#191617] text-white flex flex-col items-center pt-12">
      {/* Hero Section */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-[#ff33cc]">SHEBN</span><br />
            The Global Community<br />
            of Women in Blockchain<br />
            and Web3
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Empowering women through collaboration, innovation and ecosystem opportunities. Promoting innovation and the development of technological solutions that address challenges in the industry.
          </p>
          <button className="mt-4 bg-white text-black font-extrabold text-xl px-8 py-4 rounded-[18px] border border-white hover:bg-[#ff33cc] hover:text-white transition w-fit">
            ¡GET START NOW!
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src="/images/home/world-map.png" alt="World Map" width={420} height={320} className="drop-shadow-2xl" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#ff33cc] mt-16 py-8 px-6 md:px-12 flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-5xl font-extrabold">7573</span>
          <span className="text-lg font-bold">New professionals<br /><span className="font-normal">Actived</span></span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-4xl font-extrabold">121</span>
          <span className="text-lg font-bold">New projects<br /><span className="font-normal">Completed</span></span>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-[#ff33cc] py-12 px-6 md:px-12 flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Testimonial 1 */}
        <div className="bg-black rounded-[32px] p-6 max-w-xs flex flex-col items-center shadow-lg">
          <span className="text-2xl font-bold mb-2">User</span>
          <p className="text-white text-center mb-4">The information presented here helped me understand and adapt to this new trend.</p>
          <div className="flex mb-4">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <Image src="/images/shared/avatar1.png" alt="Karina Gómez" width={40} height={40} className="rounded-full" />
            <div className="text-left">
              <div className="font-bold text-sm">Karina Gómez</div>
              <div className="text-xs text-gray-300">Founder of AVALANCHE</div>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-black rounded-[32px] p-6 max-w-xs flex flex-col items-center shadow-lg">
          <span className="text-2xl font-bold mb-2">User</span>
          <p className="text-white text-center mb-4">Thanks to this platform I was able to meet my current colleagues.</p>
          <div className="flex mb-4">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <Image src="/images/shared/avatar2.png" alt="Camila Soto" width={40} height={40} className="rounded-full" />
            <div className="text-left">
              <div className="font-bold text-sm">Camila Soto</div>
              <div className="text-xs text-gray-300">Marketing Director</div>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-black rounded-[32px] p-6 max-w-xs flex flex-col items-center shadow-lg">
          <span className="text-2xl font-bold mb-2">User</span>
          <p className="text-white text-center mb-4">Could you elaborate on examples of companies that already use blockchain?</p>
          <div className="flex mb-4">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <Image src="/images/shared/avatar3.png" alt="Silvia Mercado" width={40} height={40} className="rounded-full" />
            <div className="text-left">
              <div className="font-bold text-sm">Silvia Mercado</div>
              <div className="text-xs text-gray-300">Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 