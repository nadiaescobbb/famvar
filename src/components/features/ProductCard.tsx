import { Product } from '../../types'
import { ProductBadges } from '../ui/ProductBadges'
import { WhatsAppButton } from '../ui/WhatsAppButton'

export function ProductCard({ product, onSelect }: { product: Product; onSelect: (p: Product) => void }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle flex flex-col cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
      onClick={() => onSelect(product)}
    >
      <div className="relative w-full aspect-square bg-gradient-to-b from-[#FAF8F3] to-[#F2EDE2] overflow-hidden flex items-center justify-center p-3 border-b border-border-subtle group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <ProductBadges product={product} />
      </div>
      <div className="p-3.5 flex flex-col gap-2 flex-1">
        <p className="text-subtle font-medium leading-snug text-navy line-clamp-2"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {product.name}
        </p>
        <div className="mt-auto">
          {product.storageOptions ? (
            <p className="text-micro text-text-muted mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
              Desde <span className="text-navy font-bold text-body-lg">{product.price}</span>
            </p>
          ) : (
            <p className="text-navy font-bold text-body-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              {product.price}
            </p>
          )}
          <div onClick={(e) => e.stopPropagation()}>
            <WhatsAppButton product={product} label="Consultar" full size="sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
