import Section from './Section'
import { plotDetails } from '../data'

export default function Overview() {
  return (
    <Section id="overview" eyebrow="Property Overview" title="A Rare Corner Plot in Chennai South">
      <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
        Rare opportunity to own a premium corner plot in the heart of Shankarapuram,
        Sithalapakkam — one of Chennai South's fastest appreciating residential pockets.
        This east-facing corner plot offers exceptional frontage, dual road access, and
        the unique advantage of parks on both sides, making it one of the most sought-after
        plots in the locality.
      </p>

      <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {plotDetails.map((d) => (
          <div key={d.label} className="border-b border-slate-200 pb-3">
            <dt className="text-sm font-medium text-slate-500">{d.label}</dt>
            <dd className="mt-1 text-base font-semibold text-slate-900">{d.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
