import { PRICE, PHONE, PHONE_DISPLAY } from '../data'

const badges = [
  '2540 Sq.ft',
  'East-Facing',
  'Dual 40-ft Roads',
  '63-ft Frontage',
  'Parks on Both Sides',
  'MMDA Approved',
  'Clear Title',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Shankarapuram, Sithalapakkam · Chennai South
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Prime Corner Plot with Dual Road Frontage &amp; Parks on Both Sides
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-emerald-100">
          A rare 2540 sq.ft east-facing corner plot in one of Chennai South's fastest
          appreciating residential pockets — 63-ft frontage, dual 40-ft roads, and
          permanent open views guaranteed by parks on both sides.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium ring-1 ring-inset ring-white/20"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <span className="text-3xl font-bold">{PRICE}</span>
          <span className="text-emerald-200">Negotiable for serious buyers</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`tel:${PHONE}`}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-emerald-900 shadow-lg transition hover:bg-emerald-50"
          >
            📞 Call {PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/91${PHONE}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-400"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  )
}
