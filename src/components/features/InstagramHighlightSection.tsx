import { useState } from 'react'
import { InstagramIcon, UserIcon } from '../icons/Icons'

export function InstagramHighlightSection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null)
  const highlightUrl = 'https://www.instagram.com/stories/highlights/18357666898190700/'

  const stories = [
    {
      id: 1,
      title: 'Galaxy S24 FE',
      category: 'Reseña de Cliente',
      user: '@larisaromer0',
      time: 'Hace 1 día',
      bgImage: '/larisaresena.avif',
      avatarBg: 'from-[#833AB4] via-[#FD1D1D] to-[#FCB045]',
      chat: 'Muy buena atención, chicos. Un placer ser bien atendida',
      rating: '⭐⭐⭐⭐⭐ 5/5',
    },
    {
      id: 2,
      title: 'iPhone 12 Pro',
      category: 'Reseña de Cliente',
      user: '@patricioagg01',
      time: 'Hace 2 días',
      bgImage: '/patricioreseña.avif',
      avatarBg: 'from-[#833AB4] via-[#FD1D1D] to-[#FCB045]',
      chat: 'Lugar perfecto para comprar cualquier cosa que tenga que ver con tecnología',
      rating: '⭐⭐⭐⭐⭐ 5/5',
    },
    {
      id: 3,
      title: 'iPhone 15 Pro Max',
      category: 'Reseña de Cliente',
      user: '@belypaulon_',
      time: 'Hace 3 días',
      bgImage: '/belyreseña.avif',
      avatarBg: 'from-[#833AB4] via-[#FD1D1D] to-[#FCB045]',
      chat: 'Siempre una gran experiencia, gran calidad y excelente atención personalizada',
      rating: '⭐⭐⭐⭐⭐ 5/5',
    },
    {
      id: 4,
      title: 'Galaxy S26 Ultra',
      category: 'Reseña de Cliente',
      user: '@edu_benitez118',
      time: 'Hace 4 días',
      bgImage: '/samsung-s26-ultra.avif',
      avatarBg: 'from-[#833AB4] via-[#FD1D1D] to-[#FCB045]',
      chat: 'Excelente atención, política de devolución y garantía en todos sus productos!',
      rating: '⭐⭐⭐⭐⭐ 5/5',
    },
  ]

  return (
    <section className="pb-12 sm:pb-16">
      <div className="bg-navy rounded-3xl p-6 sm:p-10 text-bone shadow-2xl relative overflow-hidden border border-navy-border">
        {/* Background ambient glows */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-navy-border/50 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-accent text-xs font-semibold mb-3">
              <InstagramIcon size={14} />
              <span>Clientes & Experiencias Reales</span>
            </div>
            <h2
              className="text-[24px] sm:text-[32px] font-bold text-bone leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Historias Destacadas de la Comunidad FAMVAR 📸
            </h2>
            <p
              className="text-[14px] text-bone/70 mt-2 max-w-xl leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Mirá los despachos reales, fotos de productos entregados y opiniones directo desde el perfil de Instagram.
            </p>
          </div>

          <a
            href={highlightUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-semibold text-sm px-6 py-3.5 rounded-2xl hover:opacity-95 transition-all shadow-lg active:scale-[0.98] shrink-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <InstagramIcon size={18} />
            <span>Ver Destacadas en Instagram ↗</span>
          </a>
        </div>

        {/* Story Cards Grid (9:16 Aspect Ratio Visual Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {stories.map((story, idx) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryIndex(idx)}
              className="relative aspect-[9/14] rounded-2xl overflow-hidden border border-white/15 cursor-pointer group shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-4"
            >
              {/* Background Image */}
              <img
                src={story.bgImage}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/70 to-black/40" />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]">
                    <div className="w-full h-full rounded-full bg-navy flex items-center justify-center text-white/90">
                      <UserIcon size={14} />
                    </div>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-white leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {story.user}
                    </span>
                    <span className="text-[9px] text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {story.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content & Chat Overlay */}
              <div className="relative z-10 flex flex-col gap-2">
                {/* Chat Bubble overlay with High-Contrast Dark Backdrop */}
                <div className="bg-navy/90 backdrop-blur-xl border border-white/20 rounded-xl p-3.5 shadow-2xl h-[135px] flex flex-col justify-between">
                  <p className="text-[12px] text-bone font-medium leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {story.chat}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-bone/90 border-t border-white/10 pt-2 shrink-0">
                    <span className="text-accent font-bold">{story.rating}</span>
                    <a
                      href={highlightUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-accent font-bold hover:underline"
                    >
                      <span>Ver en IG ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Story Lightbox Modal */}
      {activeStoryIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveStoryIndex(null)}
        >
          <div
            className="relative w-full max-w-sm aspect-[9/16] bg-[#111111] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col justify-between p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Image */}
            <img
              src={stories[activeStoryIndex].bgImage}
              alt={stories[activeStoryIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/70" />

            {/* Modal Story Header & Progress Bars */}
            <div className="relative z-10">
              {/* Segmented progress bar */}
              <div className="flex gap-1.5 mb-4">
                {stories.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${i === activeStoryIndex ? 'bg-white' : i < activeStoryIndex ? 'bg-white/70' : 'bg-white/30'}`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white/90">
                      <UserIcon size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {stories[activeStoryIndex].user}
                    </h4>
                    <span className="text-xs text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {stories[activeStoryIndex].category} · {stories[activeStoryIndex].time}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveStoryIndex(null)}
                  className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Story Footer & Chat Overlay */}
            <div className="relative z-10 flex flex-col gap-4">
              <div className="bg-white/20 backdrop-blur-xl border border-white/25 rounded-2xl p-4 text-white shadow-xl">
                <p className="text-sm font-medium leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stories[activeStoryIndex].chat}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs border-t border-white/15 pt-2">
                  <span>{stories[activeStoryIndex].rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStoryIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : stories.length - 1))}
                  className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur transition-colors text-center"
                >
                  ← Anterior
                </button>
                <button
                  onClick={() => setActiveStoryIndex((prev) => (prev !== null && prev < stories.length - 1 ? prev + 1 : 0))}
                  className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur transition-colors text-center"
                >
                  Siguiente →
                </button>
              </div>

              <a
                href={highlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white text-xs font-bold tracking-wide text-center uppercase shadow-lg hover:opacity-95 transition-opacity"
              >
                Ver historia original en Instagram ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
