import { CalendarDays, MessageCircle, PhoneCall, Sparkles, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useChat } from './ChatContext'
import { PriceHistoryChart } from './PriceHistoryChart'

function CalendarMock() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Choose a Visit Slot</p>
      <div className="mt-2 grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((day) => (
          <span key={day} className="font-semibold text-slate-500">
            {day}
          </span>
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <button
            key={i}
            className="rounded-md border border-slate-200 py-1 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-600"
          >
            {i + 10}
          </button>
        ))}
      </div>
    </div>
  )
}

export function ChatWidget() {
  const { isOpen, setIsOpen, activeProperty, showToast, toast } = useChat()
  const [showCalendar, setShowCalendar] = useState(false)

  const messages = useMemo(() => {
    if (!activeProperty) {
      return [
        {
          id: 'welcome',
          type: 'text',
          sender: 'bot',
          text: 'Hi! I am Builder Bot. Ask me to compare projects, estimate negotiation room, or schedule a visit.',
        },
      ]
    }

    return [
      {
        id: 'intro',
        type: 'text',
        sender: 'bot',
        text: `Great choice — ${activeProperty.projectName} in ${activeProperty.location}. I found instant negotiation insights for you.`,
      },
      {
        id: 'analytics',
        type: 'analytics',
      },
      {
        id: 'pitch',
        type: 'text',
        sender: 'bot',
        text: `Launch was at ${activeProperty.analytics.launchPrice} and now it's ${activeProperty.currentPrice}. Demand is rising, but we can still negotiate perks.`,
      },
    ]
  }, [activeProperty])

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {toast ? (
        <div className="mb-3 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-soft">{toast}</div>
      ) : null}

      {isOpen ? (
        <section className="w-[min(92vw,370px)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <header className="flex items-center justify-between bg-slate-900 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={16} />
              <div>
                <p className="text-sm font-semibold">Builder Bot</p>
                <p className="text-xs text-slate-300">Negotiation & Discovery Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-1 transition hover:bg-slate-700">
              <X size={16} />
            </button>
          </header>

          <div className="max-h-[430px] space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message) => {
              if (message.type === 'analytics') {
                return (
                  <div key={message.id} className="space-y-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Builder Performance</p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">{activeProperty.analytics.reviews}</p>
                      <p className="text-xs text-slate-600">{activeProperty.analytics.deliveredProjects} projects delivered</p>
                    </div>
                    <PriceHistoryChart points={activeProperty.analytics.trend} />
                  </div>
                )
              }

              return (
                <div key={message.id} className="max-w-[95%] rounded-2xl bg-white p-3 text-sm text-slate-700 shadow-sm">
                  {message.text}
                </div>
              )
            })}

            {showCalendar ? <CalendarMock /> : null}
          </div>

          <footer className="space-y-2 border-t border-slate-200 bg-white p-3">
            <button
              onClick={() => setShowCalendar((prev) => !prev)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <CalendarDays size={16} />
              Book a Site Visit
            </button>
            <button
              onClick={() => showToast('The builder will contact you shortly')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              <PhoneCall size={16} />
              Request Callback / Consent to Contact
            </button>
          </footer>
        </section>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-indigo-700"
        >
          <MessageCircle size={18} />
          Open Builder Bot
        </button>
      )}
    </div>
  )
}
