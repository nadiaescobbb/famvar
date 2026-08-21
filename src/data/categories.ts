import { Category } from '../types'

export const CATEGORIES: Category[] = [
  {
    id: 'celulares',
    label: 'Celulares',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop&auto=format',
    count: 'iPhone · Samsung · a pedido',
    isPhones: true,
  },
  {
    id: 'fundas',
    label: 'Fundas',
    image: '/fundas-portadas.avif',
    count: 'Para todos los modelos',
  },
  {
    id: 'cargadores',
    label: 'Cargadores',
    image: '/portada-cargadores.avif',
    count: 'USB-C · Lightning · Inalámbrico',
  },
  {
    id: 'termos',
    label: 'Termos y vasos',
    image: '/termosbanner.avif',
    count: 'Stanley · Tazas automáticas',
  },
  {
    id: 'variedad',
    label: 'Variedad',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop&auto=format',
    count: 'Productos importados',
  },
]
