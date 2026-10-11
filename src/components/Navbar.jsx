import { ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4">
      <nav className="max-w-7xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-5 md:px-7 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#f5c518] text-black flex items-center justify-center font-black">
            18
          </div>

          <div>
            <h1 className="text-white font-black tracking-tight leading-none">
              18NIGHT
            </h1>

            <span className="text-[8px] tracking-[3px] text-gray-500">
              CAFE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a
            href="#home"
            className="hover:text-[#f5c518] transition"
          >
            Home
          </a>

          <a
            href="#partners"
            className="hover:text-[#f5c518] transition"
          >
            Partners
          </a>

          <a
            href="#menu"
            className="hover:text-[#f5c518] transition"
          >
            Menu
          </a>

          <a
            href="#about"
            className="hover:text-[#f5c518] transition"
          >
            About
          </a>
        </div>

        {/* Cart */}
        <button className="hidden md:flex items-center gap-2 bg-[#f5c518] text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#ffd83d] transition">
          <ShoppingBag size={17} />
          Cart
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-[#111] border border-white/10 rounded-2xl p-5">

          <div className="flex flex-col gap-5 text-gray-300">

            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>

            <a href="#partners" onClick={() => setOpen(false)}>
              Partners
            </a>

            <a href="#menu" onClick={() => setOpen(false)}>
              Menu
            </a>

            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>

            <button className="flex items-center justify-center gap-2 bg-[#f5c518] text-black py-3 rounded-full font-semibold">
              <ShoppingBag size={17} />
              Cart
            </button>

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar