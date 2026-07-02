export default function Section({ id, eyebrow, title, children, tone = 'light' }) {
  const bg = tone === 'light' ? 'bg-white' : 'bg-slate-50'
  return (
    <section id={id} className={`${bg} scroll-mt-20`}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{title}</h2>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
