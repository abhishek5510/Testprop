import { MapPin, MessageCircle } from 'lucide-react'

export function PropertyCard({ property, onChat }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <img src={property.image} alt={property.projectName} className="h-48 w-full object-cover" />
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">{property.builderName}</p>
        <h3 className="text-xl font-semibold text-slate-900">{property.projectName}</h3>
        <p className="flex items-center gap-1 text-sm text-slate-600">
          <MapPin size={15} />
          {property.location}
        </p>
        <p className="text-lg font-semibold text-emerald-700">{property.currentPrice}</p>
        <button
          onClick={() => onChat(property)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          <MessageCircle size={16} />
          Chat to Learn More
        </button>
      </div>
    </article>
  )
}
