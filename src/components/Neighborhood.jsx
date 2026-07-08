import Section from './Section'
import InfoGrid from './InfoGrid'
import { itHub, schools, conveniences } from '../data'

export default function Neighborhood() {
  return (
    <>
      <Section id="it-hub" eyebrow="Live Where You Work" title="💻 IT Hub — Chennai's Largest IT Corridor" tone="light">
        <InfoGrid items={itHub} icon="🖥️" />
      </Section>

      <Section id="schools" eyebrow="For Growing Families" title="🏫 Top Schools & Colleges Nearby" tone="dark">
        <InfoGrid items={schools} />
      </Section>

      <Section id="conveniences" eyebrow="Everyday Life" title="🛒 Daily Conveniences" tone="light">
        <InfoGrid items={conveniences} />
      </Section>
    </>
  )
}
