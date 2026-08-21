import { Category } from '../../types'
import { CATEGORIES } from '../../data/categories'
import { WhatsAppIcon } from '../icons/Icons'

export function Header({
  onSelectCategory,
  onGoHome,
}: {
  onSelectCategory: (cat: Category) => void
  onGoHome: () => void
}) {
  return (
    <header className="sticky top-0 z-30 bg-bone/95 backdrop-blur border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={onGoHome}>
          <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-navy"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            FAMVAR
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden md:flex items-center gap-6 mr-4">
            {CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => onSelectCategory(cat)}
                className="text-sm text-navy/80 hover:text-navy font-medium transition-colors cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                {cat.label}
              </button>
            ))}
          </nav>
          <a href="https://wa.me/5493624076857" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-navy hover:bg-navy-hover text-bone text-sm font-semibold px-3.5 py-2 rounded-xl transition-all shadow-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            <WhatsAppIcon size={16} />
            <span className="hidden sm:inline">Escribinos</span>
          </a>
        </div>
      </div>
    </header>
  )
}
