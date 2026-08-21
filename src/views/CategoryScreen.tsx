import { useState } from 'react'
import { Category, Product } from '../types'
import { PRODUCTS, sortProductsByAvailability } from '../data/products'
import { ArrowLeft, SearchIcon } from '../components/icons/Icons'
import { ProductCard } from '../components/features/ProductCard'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function CategoryScreen({
  category,
  onBack,
  onSelectProduct,
  onGoHome,
}: {
  category: Category
  onBack: () => void
  onSelectProduct: (p: Product) => void
  onGoHome: () => void
}) {
  const [search, setSearch] = useState('')

  const products = sortProductsByAvailability(
    PRODUCTS.filter(
      (p) =>
        p.category === category.id &&
        (search === '' || p.name.toLowerCase().includes(search.toLowerCase()))
    )
  )

  return (
    <div className="min-h-screen bg-bone">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-bone/95 backdrop-blur border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-3 mb-3">
            <button onClick={onBack}
              className="w-9 h-9 rounded-xl bg-white border border-border-subtle flex items-center justify-center text-navy hover:bg-bone transition-colors shrink-0 cursor-pointer">
              <ArrowLeft />
            </button>
            <div className="flex items-center gap-2 cursor-pointer" onClick={onGoHome}>
              <span className="text-[13px] text-text-muted font-medium hidden sm:block"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                FAMVAR /
              </span>
            </div>
            <h1 className="text-[18px] sm:text-[20px] font-bold text-navy"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {category.label}
            </h1>
          </div>
          {/* Search */}
          <div className="relative max-w-lg">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder={`Buscar en ${category.label.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-border-subtle rounded-xl pl-9 pr-4 py-2.5 text-[14px] text-navy placeholder:text-text-muted outline-none focus:border-accent transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Phones disclaimer */}
        {category.isPhones && (
          <div className="mb-6 bg-navy rounded-2xl px-5 py-4 flex gap-3 items-start border border-navy-border">
            <span className="text-accent text-xl shrink-0">📱</span>
            <div>
              <p className="text-[13px] sm:text-[14px] text-bone/90 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="font-semibold text-bone">Tenemos usados en stock, listos para entregar</span> — y conseguimos sellados a pedido. Consultanos por el modelo que buscás, lo tengamos en la grilla o no.
              </p>
            </div>
          </div>
        )}

        {/* Product count */}
        <p className="text-[12px] text-text-muted mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          {products.length} producto{products.length !== 1 ? 's' : ''}
          {search && ` para "${search}"`}
        </p>

        {/* Grid: 2 cols mobile → 3 tablet → 4 desktop */}
        {products.length === 0 ? (
          <div className="text-center py-20 text-text-muted" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm">No encontramos productos para "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={onSelectProduct} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            label={category.isPhones ? 'Pedir modelo específico' : `Consultar en ${category.label}`}
            size="lg"
          />
        </div>
      </div>
    </div>
  )
}
