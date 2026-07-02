import Section from './Section'
import { legal } from '../data'

export default function Legal() {
  return (
    <Section id="legal" eyebrow="100% Clean" title="📋 Legal & Documentation" tone="dark">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {legal.map((l) => (
          <div key={l.label} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              ✅ {l.label}
            </p>
            <p className="mt-1 text-slate-700">{l.value}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
