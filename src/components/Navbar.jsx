function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#0369a1] text-white">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <img src="src/assets/logo.png" alt="logo" className="w-6 h-6"/>
        <p className="hidden sm:block">updrafts</p>
      </div>

      <ul className="flex gap-8 items-center">
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">Features</li>
        <li className="cursor-pointer hover:underline">Pricing</li>
        <li className="cursor-pointer hover:underline">Faq</li>
        <li>
          <button className="bg-white px-4 py-1 rounded-full font-medium hover:opacity-90">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
