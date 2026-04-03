import { ArrowLeft, GitCompareArrows, Plus, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { comparisonConcepts, properties } from '../data/properties'

const compareFields = [
  { key: 'expectedAppreciation', label: 'Expected Appreciation' },
  { key: 'maintenanceCosts', label: 'Maintenance Costs' },
  { key: 'carpetArea', label: 'Carpet Area' },
  { key: 'amenities', label: 'Amenities' },
  { key: 'builderRating', label: 'Builder Rating' },
]

export function CompareView() {
  const compareOptions = useMemo(
    () => [
      ...properties.map((property) => ({
        ...property,
        optionLabel: `${property.projectName} · ${property.propertyType} · ${property.location}`,
      })),
      ...comparisonConcepts.map((concept) => ({
        ...concept,
        optionLabel: `${concept.projectName} · Concept`,
      })),
    ],
    [],
  )

  const [selectedIds, setSelectedIds] = useState([compareOptions[0]?.id, compareOptions[1]?.id].filter(Boolean))

  const selectedItems = selectedIds
    .map((selectedId) => compareOptions.find((option) => option.id === selectedId))
    .filter(Boolean)

  const addComparisonSlot = () => {
    const nextOption = compareOptions.find((option) => !selectedIds.includes(option.id))
    if (!nextOption) return
    setSelectedIds((current) => [...current, nextOption.id])
  }

  const updateComparisonSlot = (index, value) => {
    setSelectedIds((current) => current.map((currentValue, currentIndex) => (currentIndex === index ? value : currentValue)))
  }

  const removeComparisonSlot = (index) => {
    setSelectedIds((current) => current.filter((_, currentIndex) => currentIndex !== index))
  }

  return (
    <section className="space-y-5">
      <div>
        <Link
          to="/"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          <GitCompareArrows size={16} />
          Comparison Tool
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Compare properties and investment strategies side by side</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Pick two or more options from the dropdowns to compare apartment vs plot, apartment vs apartment, or any concept mix.
        </p>
      </div>

      <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-wrap gap-3">
          {selectedIds.map((selectedId, index) => (
            <div key={`${selectedId}-${index}`} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
              <select
                value={selectedId}
                onChange={(event) => updateComparisonSlot(index, event.target.value)}
                className="min-w-72 bg-transparent px-2 text-sm font-medium text-slate-700 outline-none"
              >
                {compareOptions.map((option) => (
                  <option key={option.id} value={option.id} disabled={selectedIds.includes(option.id) && option.id !== selectedId}>
                    {option.optionLabel}
                  </option>
                ))}
              </select>
              {selectedIds.length > 2 ? (
                <button
                  onClick={() => removeComparisonSlot(index)}
                  className="rounded-full p-1 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
                  aria-label="Remove comparison item"
                >
                  <X size={16} />
                </button>
              ) : null}
            </div>
          ))}

          <button
            onClick={addComparisonSlot}
            disabled={selectedIds.length >= compareOptions.length}
            className="inline-flex items-center gap-2 rounded-2xl border border-dashed border-indigo-300 px-3 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Plus size={16} />
            Add property to compare
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-700">Metric</th>
              {selectedItems.map((item) => (
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
                {selectedItems.map((item) => (
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
