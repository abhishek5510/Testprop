import { Link, NavLink } from 'react-router-dom'
import { Building2, GitCompareArrows, Landmark } from 'lucide-react'

const navLinkStyles = ({ isActive }) =>
  `rounded-full px-3 py-1.5 text-sm font-medium transition ${
    isActive ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-slate-900">
          <span className="rounded-xl bg-indigo-600 p-2 text-white shadow-soft">
            <Building2 size={18} />
          </span>
          <span className="text-lg font-semibold tracking-tight">EstateFlow</span>
        </Link>

        <nav className="hidden items-center gap-2 sm:flex">
          <NavLink to="/compare" className={navLinkStyles}>
            <span className="inline-flex items-center gap-1.5">
              <GitCompareArrows size={14} />
              Compare
            </span>
          </NavLink>
          <Link
            to="/#developers"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <span className="inline-flex items-center gap-1.5">
              <Landmark size={14} />
              For Developers
            </span>
          </Link>
        </nav>

        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
          Login / Signup
        </button>
      </div>
    </header>
  )
}
