import { Landmark } from 'lucide-react'

export function DeveloperBanner() {
  return (
    <section id="developers" className="mt-14 rounded-3xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
      <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-700">
        <Landmark size={16} />
        Developer Registration
      </p>
      <div className="mt-3 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="max-w-2xl text-2xl font-semibold text-slate-900">
          Are you a developer? List your properties manually and reach high-intent home buyers.
        </h2>
        <button className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
          Contact Us
        </button>
      </div>
    </section>
  )
}
