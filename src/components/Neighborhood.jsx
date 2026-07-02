import Section from './Section'
import InfoGrid from './InfoGrid'
import { itHub, hospitals, schools, conveniences } from '../data'

export default function Neighborhood() {
  return (
    <>
      <Section id="it-hub" eyebrow="Live Where You Work" title="💻 IT Hub — Chennai's Largest IT Corridor" tone="light">
        <InfoGrid items={itHub} icon="🖥️" />
      </Section>

      <Section id="healthcare" eyebrow="Peace of Mind at Every Stage" title="🏥 World-Class Healthcare" tone="dark">
        <InfoGrid items={hospitals} icon="🏥" />
      </Section>

      <Section id="schools" eyebrow="For Growing Families" title="🏫 Top Schools & Colleges Nearby" tone="light">
        <InfoGrid items={schools} />
      </Section>

      <Section id="conveniences" eyebrow="Everyday Life" title="🛒 Daily Conveniences" tone="dark">
        <InfoGrid items={conveniences} />
      </Section>
    </>
  )
}
