import { PHONE } from '../data'

export default function StickyContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={`tel:${PHONE}`}
        className="flex-1 rounded-lg bg-emerald-800 py-3 text-center font-semibold text-white"
      >
        📞 Call
      </a>
      <a
        href={`https://wa.me/91${PHONE}`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 rounded-lg bg-emerald-500 py-3 text-center font-semibold text-white"
      >
        💬 WhatsApp
      </a>
    </div>
  )
}
