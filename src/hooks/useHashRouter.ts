import { useState, useEffect } from 'react'
import { View, Category, Product } from '../types'
import { CATEGORIES } from '../data/categories'
import { PRODUCTS } from '../data/products'

export function useHashRouter() {
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash || '#/')

  useEffect(() => {
    function handleHashChange() {
      setCurrentHash(window.location.hash || '#/')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  let view: View = 'home'
  let selectedCategory: Category | null = null
  let selectedProduct: Product | null = null

  if (currentHash.startsWith('#/categoria/')) {
    const catId = currentHash.replace('#/categoria/', '')
    const foundCat = CATEGORIES.find((c) => c.id === catId)
    if (foundCat) {
      view = 'category'
      selectedCategory = foundCat
    }
  } else if (currentHash.startsWith('#/producto/')) {
    const prodId = currentHash.replace('#/producto/', '')
    const foundProd = PRODUCTS.find((p) => p.id === prodId)
    if (foundProd) {
      view = 'product'
      selectedProduct = foundProd
    }
  }

  function goToCategory(cat: Category) {
    window.location.hash = `#/categoria/${cat.id}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goToProduct(product: Product) {
    window.location.hash = `#/producto/${product.id}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goToHome() {
    window.location.hash = '#/'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goBack() {
    if (view === 'product' && selectedProduct) {
      const cat = CATEGORIES.find((c) => c.id === selectedProduct?.category)
      if (cat) {
        window.location.hash = `#/categoria/${cat.id}`
      } else {
        window.location.hash = '#/'
      }
    } else {
      window.location.hash = '#/'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    view,
    selectedCategory,
    selectedProduct,
    goToCategory,
    goToProduct,
    goToHome,
    goBack,
  }
}
