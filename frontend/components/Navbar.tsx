export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-bold text-white">
          CareBridge
        </h1>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#" className="hover:text-emerald-300 transition">
            About
          </a>

          <a href="#" className="hover:text-emerald-300 transition">
            Features
          </a>

          <a href="#" className="hover:text-emerald-300 transition">
            Contact
          </a>

          <button className="bg-emerald-600 px-5 py-2 rounded-lg hover:bg-emerald-700 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}