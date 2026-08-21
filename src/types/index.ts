export type View = 'home' | 'category' | 'product'

export interface ProductSpec {
  label: string
  value: string
}

export interface SpecGroup {
  category: string
  items: string[]
}

export interface StorageOption {
  size: string
  price: string
}

export interface ProductFeature {
  title: string
  text: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Product {
  id: string
  name: string
  price: string
  image: string
  images?: string[]
  description: string
  features?: ProductFeature[]
  status: 'new' | 'used' | 'out' | null
  availability?: 'stock' | 'order' | null
  category: string
  featured?: boolean
  specs?: ProductSpec[]
  specGroups?: SpecGroup[]
  storageOptions?: StorageOption[]
  faqs?: FAQItem[]
}

export interface Category {
  id: string
  label: string
  image: string
  count: string
  isPhones?: boolean
}
