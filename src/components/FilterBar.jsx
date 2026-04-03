import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { properties } from '../data/properties'

const filters = [
  { label: 'Property Type', options: ['Apartment', 'Plotted Land'] },
  { label: 'Budget Range', options: ['₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr - ₹3Cr'] },
  { label: 'Move-in Timeline', options: ['Ready to Move', 'Within 6 Months', 'Within 12 Months'] },
]

export function FilterBar() {
  const [selectedCity, setSelectedCity] = useState('')

  const locationsByCity = useMemo(() => {
    const groupedLocations = {}

    properties.forEach((property) => {
      const [area, city] = property.location.split(',').map((part) => part.trim())
      if (!city || !area) return
      groupedLocations[city] ??= new Set()
      groupedLocations[city].add(area)
    })

    return Object.fromEntries(
      Object.entries(groupedLocations).map(([city, areas]) => [city, Array.from(areas).sort()]),
    )
  }, [])

  const cityOptions = Object.keys(locationsByCity).sort()
  const areaOptions = selectedCity ? locationsByCity[selectedCity] ?? [] : []

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
      <div className="grid gap-3 md:grid-cols-6">
        <label className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">City</span>
          <select
            value={selectedCity}
            onChange={(event) => setSelectedCity(event.target.value)}
            className="bg-transparent text-sm font-medium text-slate-700 outline-none"
          >
            <option value="">Select city</option>
            {cityOptions.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Area</span>
          <select
            className="bg-transparent text-sm font-medium text-slate-700 outline-none disabled:cursor-not-allowed disabled:text-slate-400"
            disabled={!selectedCity}
          >
            <option value="">{selectedCity ? 'Select area' : 'Select city first'}</option>
            {areaOptions.map((area) => (
              <option key={area}>{area}</option>
            ))}
          </select>
        </label>

        {filters.map((filter) => (
          <label key={filter.label} className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{filter.label}</span>
            <select className="bg-transparent text-sm font-medium text-slate-700 outline-none">
              {filter.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
          <Search size={16} />
          Search
        </button>
      </div>
    </div>
  )
}
