import { useEffect, useState } from 'react'
import Section from './Section'
import { galleryImages } from '../data'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
  const showNext = () => setActiveIndex((i) => (i + 1) % galleryImages.length)
  const close = () => setActiveIndex(null)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') showPrev()
      else if (e.key === 'ArrowRight') showNext()
      else if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <Section id="gallery" eyebrow="See It For Yourself" title="📸 Plot Photos & Location Map" tone="light">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {galleryImages.map((file, index) => (
          <button
            key={file}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group aspect-square overflow-hidden rounded-lg border border-slate-200"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${file}`}
              alt="Shankarapuram corner plot"
              loading="lazy"
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 text-3xl leading-none text-white/80 transition hover:text-white"
          >
            &times;
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-2xl text-white transition hover:bg-black/60 sm:left-6"
          >
            ‹
          </button>

          <img
            src={`${import.meta.env.BASE_URL}images/${galleryImages[activeIndex]}`}
            alt="Shankarapuram corner plot"
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-lg object-contain"
          />

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-2xl text-white transition hover:bg-black/60 sm:right-6"
          >
            ›
          </button>

          <p className="absolute bottom-4 text-sm text-white/70">
            {activeIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </Section>
  )
}
