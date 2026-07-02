import { PRICE, PHONE, PHONE_DISPLAY } from '../data'

export default function Pricing() {
  return (
    <section id="contact" className="scroll-mt-20 bg-sky-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
          Pricing
        </p>
        <p className="mt-3 text-5xl font-bold">{PRICE}</p>
        <p className="mt-2 text-sky-200">Negotiable for serious buyers and genuine developers</p>

        <ul className="mx-auto mt-6 max-w-md space-y-1 text-sky-100">
          <li>Direct owner listing — no brokerage</li>
          <li>All documents ready for immediate verification</li>
          <li>Bank loan assistance available for eligible buyers</li>
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="rounded-lg bg-white px-8 py-3 font-semibold text-sky-900 shadow-lg transition hover:bg-sky-50"
          >
            📞 Call {PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/91${PHONE}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-sky-400"
          >
            💬 WhatsApp Now
          </a>
        </div>
        <p className="mt-6 text-sm text-sky-300">
          Serious inquiries only · Mon–Sat, 9 AM–7 PM
        </p>
      </div>
    </section>
  )
}
