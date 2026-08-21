import { useHashRouter } from './hooks/useHashRouter'
import { HomeScreen } from './views/HomeScreen'
import { CategoryScreen } from './views/CategoryScreen'
import { ProductDetailScreen } from './views/ProductDetailScreen'

export default function App() {
  const {
    view,
    selectedCategory,
    selectedProduct,
    goToCategory,
    goToProduct,
    goToHome,
    goBack,
  } = useHashRouter()

  return (
    <>
      {view === 'home' && (
        <HomeScreen
          onSelectCategory={goToCategory}
          onSelectProduct={goToProduct}
          onGoHome={goToHome}
        />
      )}
      {view === 'category' && selectedCategory && (
        <CategoryScreen
          category={selectedCategory}
          onBack={goBack}
          onSelectProduct={goToProduct}
          onGoHome={goToHome}
        />
      )}
      {view === 'product' && selectedProduct && (
        <ProductDetailScreen
          product={selectedProduct}
          onBack={goBack}
          onGoHome={goToHome}
        />
      )}
    </>
  )
}
