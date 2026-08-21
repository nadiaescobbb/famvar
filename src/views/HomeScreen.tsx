import { Category, Product } from '../types'
import { CATEGORIES } from '../data/categories'
import { PRODUCTS, sortProductsByAvailability } from '../data/products'
import { TopBanner } from '../components/layout/TopBanner'
import { Header } from '../components/layout/Header'
import { TrustBadgesBar } from '../components/layout/TrustBadgesBar'
import { ProductCard } from '../components/features/ProductCard'
import { InstagramHighlightSection } from '../components/features/InstagramHighlightSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import { Footer } from '../components/layout/Footer'

export function HomeScreen({
  onSelectCategory,
  onSelectProduct,
  onGoHome,
}: {
  onSelectCategory: (cat: Category) => void
  onSelectProduct: (p: Product) => void
  onGoHome: () => void
}) {
  const featuredProducts = sortProductsByAvailability(PRODUCTS.filter((p) => p.featured))

  return (
    <div className="min-h-screen bg-bone">
      {/* Top Banner Bar */}
      <TopBanner />

      {/* Header */}
      <Header onSelectCategory={onSelectCategory} onGoHome={onGoHome} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="pt-10 pb-8 sm:pt-14 sm:pb-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:pt-16 lg:pb-12">
          <div>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] text-navy mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Celulares,<br />
              accesorios y<br />
              <span className="text-accent">mucha variedad.</span>
            </h1>
            <p className="text-[15px] sm:text-[16px] text-navy/80 leading-relaxed mb-6 max-w-md"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              iPhone, Samsung, termos Stanley, fundas y más — nuevos, usados y a pedido. Todo con envío desde La Escondida, Chaco.
            </p>
            <div className="flex flex-wrap gap-3">
              <WhatsAppButton label="Consultar ahora" size="lg" variant="accent" />
              <button onClick={() => onSelectCategory(CATEGORIES[0])}
                className="flex items-center gap-2 border border-navy text-navy font-semibold px-6 py-4 rounded-xl text-base hover:bg-navy hover:text-bone transition-colors bg-transparent cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                Ver celulares
              </button>
            </div>
          </div>

          {/* Hero image using user custom banner */}
          <div className="hidden lg:block relative rounded-3xl overflow-hidden aspect-[4/3] bg-navy">
            <img
              src="/bannerhome.avif"
              alt="FAMVAR Banner Home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 via-transparent to-transparent" />
          </div>
        </section>

        {/* Mobile Banner Image */}
        <div className="lg:hidden mb-8 rounded-2xl overflow-hidden aspect-[16/9] bg-navy">
          <img
            src="/bannerhome.avif"
            alt="FAMVAR Banner Home"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Trust Badges Bar */}
        <TrustBadgesBar />

        {/* Category grid */}
        <section className="pb-10 sm:pb-12">
          <h2 className="text-[13px] font-bold tracking-widest uppercase text-navy mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Categorías
          </h2>

          {/* Desktop: 5-col grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => onSelectCategory(cat)}
                className="rounded-2xl overflow-hidden relative bg-navy text-left group cursor-pointer"
                style={{ aspectRatio: '3/4' }}>
                <img src={cat.image} alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="block text-[15px] font-bold text-bone leading-tight"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {cat.label}
                  </span>
                  <span className="text-bone/70 text-[10px] mt-0.5 block leading-tight"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {cat.count}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden">
            <button onClick={() => onSelectCategory(CATEGORIES[0])}
              className="w-full mb-3 rounded-2xl overflow-hidden relative h-44 block text-left group bg-navy cursor-pointer">
              <img src={CATEGORIES[0].image} alt={CATEGORIES[0].label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="block text-[22px] font-bold text-bone leading-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {CATEGORIES[0].label}
                </span>
                <span className="text-bone/70 text-xs mt-0.5 block"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {CATEGORIES[0].count}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-navy text-bone text-[10px] font-bold px-2 py-1 rounded-full border border-white/20"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                A pedido
              </div>
            </button>
            <div className="grid grid-cols-2 gap-3">
              {CATEGORIES.slice(1).map((cat) => (
                <button key={cat.id} onClick={() => onSelectCategory(cat)}
                  className="rounded-2xl overflow-hidden relative h-32 text-left bg-navy group cursor-pointer">
                  <img src={cat.image} alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-200" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="block text-[16px] font-bold text-bone leading-tight"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {cat.label}
                    </span>
                    <span className="text-bone/60 text-[10px] mt-0.5 block leading-tight"
                      style={{ fontFamily: 'Inter, sans-serif' }}>
                      {cat.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="pb-10 sm:pb-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] font-semibold tracking-widest uppercase text-text-muted"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Productos Destacados
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={onSelectProduct} />
            ))}
          </div>
        </section>

        {/* Instagram Highlights Section */}
        <InstagramHighlightSection />

        {/* CTA strip */}
        <section className="mb-10 sm:mb-14 bg-navy rounded-3xl px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border border-navy-border shadow-xl">
          <div>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-bone mb-1"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              ¿Buscás algo específico?
            </h3>
            <p className="text-bone/80 text-sm sm:text-base"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Escribinos y te conseguimos lo que necesitás. Respondemos al instante.
            </p>
          </div>
          <div className="shrink-0">
            <WhatsAppButton label="Consultar ahora" size="lg" variant="accent" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onSelectCategory={onSelectCategory} onGoHome={onGoHome} />
    </div>
  )
}
