import { comparisonConcepts, properties } from '../data/properties'

const compareFields = [
  { key: 'expectedAppreciation', label: 'Expected Appreciation' },
  { key: 'maintenanceCosts', label: 'Maintenance Costs' },
  { key: 'carpetArea', label: 'Carpet Area' },
  { key: 'amenities', label: 'Amenities' },
  { key: 'builderRating', label: 'Builder Rating' },
]

const showcased = [properties[0], properties[1], comparisonConcepts[0]]

export function CompareView() {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Comparison Tool</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Compare properties and investment strategies side by side</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Review 2-3 options at once, including direct property picks and conceptual choices like apartment vs plotted land.
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-700">Metric</th>
              {showcased.map((item) => (
                <th key={item.id} className="px-4 py-3 font-semibold text-slate-800">
                  {item.projectName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {compareFields.map((field) => (
              <tr key={field.key} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-600">{field.label}</td>
                {showcased.map((item) => (
                  <td key={`${item.id}-${field.key}`} className="px-4 py-3 text-slate-700">
                    {item[field.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
