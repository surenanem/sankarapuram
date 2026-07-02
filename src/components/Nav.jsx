import { PRICE, PHONE } from '../data'

const links = [
  { href: '#overview', label: 'Overview' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#legal', label: 'Legal' },
  { href: '#ideal-for', label: 'Ideal For' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-bold text-sky-800">
          Shankarapuram Corner Plot
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-sky-700">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE}`}
          className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          {PRICE} · Call Now
        </a>
      </div>
    </header>
  )
}
