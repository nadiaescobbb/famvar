import { TruckIcon } from '../icons/Icons'

export function TopBanner() {
  return (
    <div className="bg-navy text-bone text-xs py-2.5 px-4 text-center font-medium flex items-center justify-center gap-2">
      <TruckIcon size={14} />
      <span>Envíos a todo el país desde La Escondida, Chaco</span>
      <span className="hidden sm:inline text-white/30">|</span>
      <span className="hidden sm:inline text-bone/80">Atención inmediata por WhatsApp</span>
    </div>
  )
}
