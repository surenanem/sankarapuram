import Section from './Section'
import { advantages } from '../data'

export default function Advantages() {
  return (
    <Section id="highlights" eyebrow="Why This Plot Stands Out" title="Plot Advantages" tone="dark">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {advantages.map((a) => (
          <li
            key={a}
            className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
          >
            <span className="mt-0.5 text-sky-600">✅</span>
            <span className="text-slate-700">{a}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
