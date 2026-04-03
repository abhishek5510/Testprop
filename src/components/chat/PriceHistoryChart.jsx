export function PriceHistoryChart({ points }) {
  const max = Math.max(...points)
  const min = Math.min(...points)

  const normalizedPoints = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * 100
      const y = 100 - ((point - min) / (max - min || 1)) * 90
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Price History</p>
      <svg viewBox="0 0 100 100" className="mt-2 h-20 w-full">
        <polyline fill="none" stroke="#6366f1" strokeWidth="3" points={normalizedPoints} />
      </svg>
      <div className="mt-1 flex justify-between text-[11px] text-slate-500">
        <span>Launch Price</span>
        <span>Current Price</span>
      </div>
    </div>
  )
}
