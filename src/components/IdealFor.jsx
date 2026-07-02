import Section from './Section'
import { idealFor } from '../data'

export default function IdealFor() {
  return (
    <Section id="ideal-for" eyebrow="Who This Plot Is For" title="🏗️ Ideal For" tone="light">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {idealFor.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold text-emerald-800">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
