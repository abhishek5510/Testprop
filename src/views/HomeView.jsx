import { DeveloperBanner } from '../components/DeveloperBanner'
import { FilterBar } from '../components/FilterBar'
import { PropertyCard } from '../components/PropertyCard'
import { properties } from '../data/properties'
import { useChat } from '../components/chat/ChatContext'

export function HomeView() {
  const { openWithProperty } = useChat()

  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-6 text-white shadow-soft sm:p-10">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-200">Real Estate Marketplace</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
          Find, compare, and negotiate your next property with data-backed confidence.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
          Explore apartments and plotted land with live negotiation context, builder analytics, and personalized assistance.
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
