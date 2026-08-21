import { Category } from '../../types'
import { CATEGORIES } from '../../data/categories'
import { MapPinIcon, TruckIcon, WhatsAppIcon, InstagramIcon } from '../icons/Icons'

export function Footer({
  onSelectCategory,
  onGoHome,
}: {
  onSelectCategory: (cat: Category) => void
  onGoHome: () => void
}) {
  return (
    <footer className="border-t border-border-subtle bg-bone">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3 cursor-pointer" onClick={onGoHome}>
              <span className="font-bold text-[20px] text-navy"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>FAMVAR</span>
            </div>
            <p className="text-subtle text-text-muted leading-relaxed max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Celulares nuevos y usados, accesorios y productos 100% importados, con envío a todo el país.
            </p>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-tag font-bold tracking-widest uppercase text-navy mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Contacto
            </h4>
            <ul className="space-y-2.5 text-subtle text-text-muted"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-center gap-2 text-text-muted">
                <MapPinIcon size={16} />
                <span>La Escondida, Chaco</span>
              </li>
              <li className="flex items-center gap-2 text-text-muted">
                <TruckIcon size={16} />
                <span>Envíos a todo el país</span>
              </li>
              <li className="pt-0.5 pb-0.5">
                <a
                  href="https://wa.me/5493624076857?text=Hola%20FAMVAR!%20Quiero%20hacer%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy text-bone text-tag font-semibold px-3.5 py-2 rounded-xl hover:bg-navy-hover transition-colors shadow-sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Escribinos por WhatsApp</span>
                </a>
              </li>
              <li className="flex flex-col gap-1.5 pt-0.5">
                <a
                  href="https://instagram.com/famvar.importados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-navy transition-colors text-subtle"
                >
                  <InstagramIcon size={16} />
                  <span>@famvar.importados</span>
                </a>
                <a
                  href="https://instagram.com/luca.escobar.9250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-navy transition-colors text-subtle"
                >
                  <InstagramIcon size={16} />
                  <span>@luca.escobar.9250</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-tag font-bold tracking-widest uppercase text-navy mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Categorías
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button onClick={() => onSelectCategory(cat)} className="text-subtle text-text-muted hover:text-navy transition-colors cursor-pointer">
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-tag text-text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 FAMVAR — Todos los derechos reservados. Diseñado por{' '}
            <a
              href="https://heytrama.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              heytrama
            </a>
          </p>
          <div className="flex items-center gap-2 text-accent">
            <TruckIcon size={14} />
            <span className="text-tag font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              Envíos a todo el país
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
