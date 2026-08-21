import { Product } from '../../types'
import { WhatsAppIcon } from '../icons/Icons'

export function WhatsAppButton({
  label = 'Consultar por WhatsApp',
  product,
  customText,
  full = false,
  size = 'md',
  variant = 'primary',
}: {
  label?: string
  product?: Product
  customText?: string
  full?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'accent'
}) {
  const msg = customText
    ? `Hola FAMVAR! ${customText}`
    : product
      ? `Hola FAMVAR! Me interesa: *${product.name}* (${product.price}). ¿Tienen disponibilidad?`
      : 'Hola FAMVAR! Quiero hacer una consulta.'
  const href = `https://wa.me/5493624076857?text=${encodeURIComponent(msg)}`
  const sizeClasses = {
    sm: 'py-2 px-3 text-xs gap-1.5',
    md: 'py-2.5 px-3 text-sm gap-2',
    lg: 'py-4 px-6 text-base gap-2.5',
  }
  const bgClasses = variant === 'accent'
    ? 'bg-accent hover:bg-accent-hover text-bone'
    : 'bg-navy hover:bg-navy-hover text-bone'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center font-semibold rounded-xl transition-all shadow-sm active:scale-[0.98] ${bgClasses} ${full ? 'w-full' : ''} ${sizeClasses[size]}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <WhatsAppIcon size={size === 'lg' ? 22 : size === 'sm' ? 15 : 18} />
      {label}
    </a>
  )
}
