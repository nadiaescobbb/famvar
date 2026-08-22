import { useState } from 'react'
import { Product, StorageOption } from '../types'
import { ArrowLeft, HardDriveIcon, TruckIcon, SparklesIcon, CpuIcon, ChevronDownIcon } from '../components/icons/Icons'
import { ProductBadges } from '../components/ui/ProductBadges'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function ProductDetailScreen({
  product,
  onBack,
  onGoHome,
}: {
  product: Product
  onBack: () => void
  onGoHome: () => void
}) {
  const gallery = product.images && product.images.length > 0 ? product.images : [product.image]
  const [selectedImg, setSelectedImg] = useState<string>(gallery[0])
  const [selectedStorage, setSelectedStorage] = useState<StorageOption | null>(
    product.storageOptions && product.storageOptions.length > 0 ? product.storageOptions[0] : null
  )
  const [openAccordion, setOpenAccordion] = useState<Record<string, boolean>>({
    'Generales y Procesador': true,
    'Dimensiones y peso': true,
    'Pantalla': true,
    'Chip': true,
  })

  const activePrice = selectedStorage ? selectedStorage.price : product.price

  function toggleAccordion(catName: string) {
    setOpenAccordion((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }))
  }

  return (
    <div className="min-h-screen bg-bone">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-bone/95 backdrop-blur border-b border-border-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
          <button onClick={onBack}
            className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl bg-white border border-border-subtle flex items-center justify-center text-navy hover:bg-bone transition-colors shrink-0 cursor-pointer">
            <ArrowLeft />
          </button>
          <span className="text-[15px] font-semibold text-navy truncate cursor-pointer"
            onClick={onGoHome}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {product.name}
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Two-column on desktop */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start mb-10">

          {/* Gallery Container */}
          <div className="flex flex-col gap-3 mb-6 lg:mb-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-border-subtle aspect-square shadow-sm">
              <img src={selectedImg} alt={product.name}
                className="w-full h-full object-cover transition-all duration-300" />
              {product.status && (
                <ProductBadges product={product} />
              )}
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(imgUrl)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 bg-white shrink-0 transition-all cursor-pointer ${selectedImg === imgUrl ? 'border-accent scale-95 shadow-sm' : 'border-border-subtle opacity-70 hover:opacity-100'
                      }`}
                  >
                    <img src={imgUrl} alt={`${product.name} - ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:pt-2">
            {product.status && (
              <div className="mb-3">
                <ProductBadges product={product} inline />
              </div>
            )}
            <h1 className="text-[26px] sm:text-[34px] font-bold leading-tight text-navy mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {product.name} {selectedStorage ? `(${selectedStorage.size})` : ''}
            </h1>
            <p className="text-[32px] sm:text-[38px] font-bold text-navy mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              {activePrice}
            </p>

            {/* Storage Capacity Selector */}
            {product.storageOptions && product.storageOptions.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-border-subtle mb-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <HardDriveIcon size={16} />
                  <h2 className="text-[12px] font-bold tracking-widest uppercase text-navy"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Almacenamiento
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {product.storageOptions.map((opt) => (
                    <button
                      key={opt.size}
                      onClick={() => setSelectedStorage(opt)}
                      className={`py-3 px-3 rounded-xl border text-center transition-all cursor-pointer ${selectedStorage?.size === opt.size
                          ? 'bg-navy text-bone border-navy shadow-sm scale-[1.02]'
                          : 'bg-bone/50 text-navy border-border-subtle hover:border-accent'
                        }`}
                    >
                      <span className="block text-[14px] font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {opt.size}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Información del producto (resumen principal) */}
            <div className="bg-white rounded-2xl p-5 border border-border-subtle mb-6 shadow-sm">
              <h2 className="text-[12px] font-bold tracking-widest uppercase text-accent mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Resumen del Producto
              </h2>
              <p className="text-[14px] sm:text-[15px] text-navy leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-2 mb-6 text-text-muted">
              <TruckIcon size={16} />
              <span className="text-[13px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Envío a todo el país · La Escondida, Chaco
              </span>
            </div>

            <WhatsAppButton
              customText={selectedStorage ? `Me interesa: *${product.name} ${selectedStorage.size}* (${selectedStorage.price}). ¿Tienen disponibilidad?` : undefined}
              product={product}
              label="Consultar por WhatsApp"
              full
              size="lg"
            />

            <p className="text-center text-[11px] text-text-muted mt-3"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Te respondemos al instante por WhatsApp
            </p>
          </div>
        </div>

        {/* Pilares destacados de Información del Producto */}
        {product.features && product.features.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-sm mb-8">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-border-subtle">
              <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center shrink-0">
                <SparklesIcon size={18} />
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-navy"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Información del Producto
                </h2>
                <p className="text-[12px] text-text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Aspectos destacados de diseño, cámaras y potencia
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feat, idx) => (
                <div key={idx} className="bg-bone/50 p-5 rounded-2xl border border-border-subtle flex flex-col gap-2">
                  <h3 className="text-[15px] font-bold text-navy flex items-center gap-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {feat.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-text-muted leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {feat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Especificaciones técnicas (Formato Acordeón) */}
        {product.specGroups && product.specGroups.length > 0 ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-sm">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-border-subtle">
              <div className="w-9 h-9 rounded-xl bg-navy text-bone flex items-center justify-center shrink-0">
                <CpuIcon size={18} />
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-navy"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Especificaciones técnicas
                </h2>
                <p className="text-[12px] text-text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ficha técnica oficial y componentes de {product.name}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {product.specGroups.map((group) => {
                const isOpen = openAccordion[group.category] ?? false
                return (
                  <div key={group.category} className="border border-border-subtle rounded-2xl overflow-hidden bg-bone/30 transition-all">
                    <button
                      onClick={() => toggleAccordion(group.category)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-bone/70 transition-colors cursor-pointer"
                    >
                      <span className="text-[15px] font-bold text-navy"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {group.category}
                      </span>
                      <span className={`transform transition-transform duration-200 text-accent ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon size={20} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-border-subtle/60 bg-white">
                        <ul className="space-y-2.5">
                          {group.items.map((item, i) => (
                            <li key={i} className="text-[13px] sm:text-[14px] text-navy leading-relaxed flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <span style={{ fontFamily: 'Inter, sans-serif' }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ) : product.specs && product.specs.length > 0 ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-sm">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-border-subtle">
              <div className="w-9 h-9 rounded-xl bg-navy text-bone flex items-center justify-center shrink-0">
                <CpuIcon size={18} />
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-navy"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Especificaciones técnicas
                </h2>
                <p className="text-[12px] text-text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Detalles y componentes oficiales de {product.name}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="flex flex-col py-2.5 border-b border-bone last:border-b-0">
                  <span className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-0.5"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {spec.label}
                  </span>
                  <span className="text-[14px] font-bold text-navy"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Preguntas frecuentes */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-sm mt-8">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-border-subtle">
              <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 font-bold text-base">
                ?
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-navy"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Preguntas frecuentes
                </h2>
                <p className="text-[12px] text-text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Respuestas a las dudas más comunes sobre {product.name}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {product.faqs.map((faq, idx) => {
                const faqKey = `faq-${idx}`
                const isOpen = openAccordion[faqKey] ?? false
                return (
                  <div key={idx} className="border border-border-subtle rounded-2xl overflow-hidden bg-bone/30 transition-all">
                    <button
                      onClick={() => toggleAccordion(faqKey)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-bone/70 transition-colors cursor-pointer"
                    >
                      <span className="text-[14px] sm:text-[15px] font-bold text-navy pr-4"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {faq.question}
                      </span>
                      <span className={`transform transition-transform duration-200 text-accent shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon size={20} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 border-t border-border-subtle/60 bg-white">
                        <p className="text-[13px] sm:text-[14px] text-text-muted leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
