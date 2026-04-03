import { Search } from 'lucide-react'

const filters = [
  { label: 'Location', options: ['Bengaluru', 'Mumbai', 'Pune', 'Hyderabad'] },
  { label: 'Property Type', options: ['Apartment', 'Plotted Land'] },
  { label: 'Budget Range', options: ['₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr - ₹3Cr'] },
  { label: 'Move-in Timeline', options: ['Ready to Move', 'Within 6 Months', 'Within 12 Months'] },
]

export function FilterBar() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
      <div className="grid gap-3 md:grid-cols-5">
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
