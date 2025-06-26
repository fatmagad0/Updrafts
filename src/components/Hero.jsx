function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-6 md:py-10 min-h-screen bg-[#0369a1] text-white">
      <div className="w-full md:w-1/2 md:pr-10 md:text-left">
        <h1 className="text-7xl md:text-6xl font-bold mb-4 ">
          Design & Prototype with Tailwind CSS
        </h1>
        <p className="text-lg mb-8 pt-5">
          Thousands of developers — working as freelance, for startups, or
          enterprises — use Updrafts.app Tailwind Studio to create their designs
          and prototypes, and share them with their clients.
        </p>
        <button className="bg-white px-6 py-2 rounded-full font-medium hover:opacity-90">
          Start now -- it's free &gt;
        </button>
        <div>
          <p className="pt-15 pb-8 text-lg font-bold">USED BY</p>
          <ul  className="flex flex-wrap gap-9 md:gap-6 md:pl-2 items-center justify-center md:justify-start ">
            <li><img src="Src/assets/genx-small.png" alt="genx" className="w-13 md:w-7 h-auto "/></li>
            <li><img src="Src/assets/gibbon-small.png" alt="genx" className="w-10 md:w-6 h-auto"/></li>
            <li><img src="Src/assets/ingewikkeld-small.png" alt="genx" className="w-10 md:w-6 h-auto"/></li>
            <li><img src="Src/assets/sighup-small.png" alt="genx" className="w-10 md:w-6 h-auto"/></li>
            <li><img src="Src/assets/techreactive-small.png" alt="genx" className="w-7 md:w-4 h-auto"/></li>
          </ul>
        </div>

      </div>

      <div className=" md:w-1/2 flex justify-center pt-15 md:pt-0">
        <img src="Src/assets/heading-image.png" alt="heading img" className="max-w-full h-auto"/>
      </div>

    </div>
  );
}
export default Hero;
