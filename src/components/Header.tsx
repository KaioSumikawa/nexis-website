import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* LOGO */}
        <div className="-ml-2 flex items-center">
          <img
            src={logo}
            alt="Nexis Logo"
            className="h-[82px] w-[82px] object-contain"
          />

          <div className="-ml-3 text-[36px] font-semibold italic tracking-[-0.03em] text-white">
            Nexis
          </div>
        </div>

        {/* NAV */}
        <nav className="hidden gap-8 text-sm uppercase tracking-[0.2em] text-slate-300 md:flex">
          <Link to="/learning" className="transition hover:text-white">
            Learning
          </Link>

          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}