import Section from './Section'
import { lifeStages } from '../data'

export default function LifeStages() {
  return (
    <Section id="life-stages" eyebrow="A Plot for Every Stage of Life" title="🌅 Build Now. Work. Retire Here." tone="light">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {lifeStages.map((s) => (
          <div key={s.title} className="rounded-2xl bg-sky-50 p-6 ring-1 ring-sky-100">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-lg italic text-slate-600">
        Most people spend their entire careers dreaming of a peaceful retirement. Here,
        you don't have to choose — the same location that supports your career today
        will nurture your retirement tomorrow. Build once. Live forever.
      </p>
    </Section>
  )
}