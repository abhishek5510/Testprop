import { DeveloperBanner } from '../components/DeveloperBanner'
import { FilterBar } from '../components/FilterBar'
import { PropertyCard } from '../components/PropertyCard'
import { properties } from '../data/properties'
import { useChat } from '../components/chat/ChatContext'
import buildBotLogo from '../assets/buildbot-logo.svg'

export function HomeView() {
  const { openWithProperty } = useChat()

  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 p-6 text-white shadow-soft sm:p-10">
        <div className="inline-flex items-center gap-3 rounded-full border border-indigo-300/40 bg-white/10 px-3 py-2">
          <img src={buildBotLogo} alt="BuildBot logo" className="h-7 rounded-md bg-white p-1" />
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-100">AI-Powered Property Discovery</p>
        </div>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
          Find Your Perfect <span className="text-violet-300">Property Match</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
          Discover, compare, and negotiate real estate deals with BuildBot assistance, transparent pricing, and real-time analytics.
        </p>
        <div className="mt-7">
          <FilterBar />
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Discover Properties</h2>
          <span className="text-sm text-slate-500">{properties.length} handpicked listings</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} onChat={openWithProperty} />
          ))}
        </div>
      </section>

      <DeveloperBanner />
    </div>
  )
}
