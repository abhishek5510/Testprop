import { Link, NavLink } from 'react-router-dom'
import buildBotLogo from '../assets/buildbot-logo.svg'

const navLinkStyles = ({ isActive }) =>
  `rounded-full px-3 py-1.5 text-sm font-medium transition ${
    isActive ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`

function NavLabelWithLogo({ label }) {
  return (
    <span className="inline-flex items-center gap-2">
      <img src={buildBotLogo} alt="BuildBot logo" className="h-4 w-4 rounded-sm object-cover" />
      {label}
    </span>
  )
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-slate-900">
          <img src={buildBotLogo} alt="BuildBot" className="h-9 rounded-lg border border-slate-200 bg-white object-cover p-1 shadow-soft" />
          <span className="text-lg font-semibold tracking-tight">BuildBot</span>
        </Link>

        <nav className="hidden items-center gap-2 sm:flex">
          <NavLink to="/compare" className={navLinkStyles}>
            <NavLabelWithLogo label="Compare" />
          </NavLink>
          <button className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
            <NavLabelWithLogo label="For Developers" />
          </button>
        </nav>

        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
          Login / Signup
        </button>
      </div>
    </header>
  )
}
