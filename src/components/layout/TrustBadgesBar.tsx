import { ShieldCheckIcon, TruckIcon, CreditCardIcon } from '../icons/Icons'

export function TrustBadgesBar() {
  return (
    <section className="mb-10 p-4 sm:p-5 bg-white rounded-2xl border border-border-subtle shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-navy/10 text-navy flex items-center justify-center shrink-0">
          <ShieldCheckIcon size={20} />
        </div>
        <div>
          <h4 className="text-[13px] font-bold text-navy" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Equipos Garantizados
          </h4>
          <p className="text-[11px] text-text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
            Garantía oficial y propia
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-border-subtle pt-3 sm:pt-0 sm:pl-4">
        <div className="w-10 h-10 rounded-xl bg-navy text-bone flex items-center justify-center shrink-0">
          <TruckIcon size={20} />
        </div>
        <div>
          <h4 className="text-[13px] font-bold text-navy" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Despachos Rápidos
          </h4>
          <p className="text-[11px] text-text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
            Correo Argentino / Andreani
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-border-subtle pt-3 sm:pt-0 sm:pl-4">
        <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shrink-0">
          <CreditCardIcon size={20} />
        </div>
        <div>
          <h4 className="text-[13px] font-bold text-navy" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Medios de Pago
          </h4>
          <p className="text-[11px] text-text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
            Efectivo / Transferencia
          </p>
        </div>
      </div>
    </section>
  )
}
