import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { ChatWidget } from './chat/ChatWidget'

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <ChatWidget />
    </div>
  )
}
