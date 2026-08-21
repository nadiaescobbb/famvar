import { Product } from '../../types'
import { getEffectiveAvailability } from '../../data/products'

export function ProductBadges({ product, inline = false }: { product: Product; inline?: boolean }) {
  if (!product.status) return null

  const isCelulares = product.category === 'celulares'
  const availability = getEffectiveAvailability(product)

  const containerClasses = inline
    ? 'flex flex-wrap gap-1.5 items-center'
    : 'absolute top-2 left-2 flex flex-col items-start gap-1 z-10'

  if (product.status === 'out') {
    return (
      <div className={containerClasses}>
        <span
          className="bg-badge-order-bg text-badge-order-text font-medium text-xs px-2 py-0.5 rounded-full border border-badge-order-text/15 tracking-wide shadow-sm"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          A pedido
        </span>
      </div>
    )
  }

  const statusStyles: Record<string, string> = {
    new: 'bg-badge-new-bg text-badge-new-text border border-badge-new-text/15',
    used: 'bg-badge-used-bg text-badge-used-text border border-badge-used-text/15',
  }

  const statusLabels: Record<string, string> = {
    new: isCelulares ? 'Sellado' : 'Nuevo',
    used: 'Usado',
  }

  const availStyles: Record<string, string> = {
    stock: 'bg-badge-stock-bg text-badge-stock-text border border-badge-stock-text/15',
    order: 'bg-badge-order-bg text-badge-order-text border border-badge-order-text/15',
  }
  const availLabels: Record<string, string> = {
    stock: 'En stock',
    order: 'A pedido',
  }

  const showStatusBadge = isCelulares || !product.availability || product.status === 'used'
  const showAvailBadge = isCelulares ? !!availability : product.availability === 'stock'

  return (
    <div className={containerClasses}>
      {showStatusBadge && (
        <span
          className={`font-medium text-xs px-2 py-0.5 rounded-full tracking-wide shadow-sm ${statusStyles[product.status]}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {statusLabels[product.status]}
        </span>
      )}
      {showAvailBadge && availability && (
        <span
          className={`font-medium text-xs px-2 py-0.5 rounded-full tracking-wide shadow-sm ${availStyles[availability]}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {availLabels[availability]}
        </span>
      )}
    </div>
  )
}
