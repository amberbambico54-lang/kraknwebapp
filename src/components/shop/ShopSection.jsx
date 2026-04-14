import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFilter, FaTimes } from 'react-icons/fa'
import { products } from './shopData'
import FilterSidebar from './FilterSidebar'
import ProductCard from './ProductCard'

const categoryTabs = ['All', 'Drinks', 'Apparel', 'Accessories']

const defaultFilters = { category: 'All', priceMin: 0, priceMax: Infinity, type: 'All Types' }

const categoryMap = { Drinks: 'drink', Apparel: 'apparel', Accessories: 'accessory' }

export default function ShopSection({ onAddToCart }) {
  const [filters, setFilters] = useState(defaultFilters)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = filters.category === 'All' || p.category === categoryMap[filters.category]
      const priceMatch = p.price >= filters.priceMin && p.price <= filters.priceMax
      const typeMatch = filters.type === 'All Types' || p.type === filters.type
      return catMatch && priceMatch && typeMatch
    })
  }, [filters])

  const handleTabClick = (tab) => {
    setFilters((prev) => ({ ...prev, category: tab }))
  }

  return (
    <section className="py-16 sm:py-24 bg-[#060f1e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Tabs */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 gap-4 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`font-montserrat text-sm font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${
                  filters.category === tab
                    ? 'bg-sky-500 text-white shadow-lg'
                    : 'border border-sky-900/40 text-gray-400 hover:border-sky-500/40 hover:text-sky-300'
                }`}
                style={filters.category === tab ? { boxShadow: '0 0 20px rgba(56,189,248,0.4)' } : {}}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex items-center gap-2 font-montserrat text-sm text-gray-400 border border-sky-900/40 px-4 py-2.5 rounded-full hover:border-sky-500/40 hover:text-sky-300 transition-all"
          >
            <FaFilter className="text-xs" /> Filters
          </button>
        </div>

        <div className="flex gap-8 items-start">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </div>

          {/* Mobile sidebar drawer */}
          <AnimatePresence>
            {sidebarOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setSidebarOpen(false)}
                  className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                />
                <motion.div
                  initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                  className="fixed top-0 left-0 h-full w-[280px] bg-[#0d2240] border-r border-sky-900/40 z-50 overflow-y-auto p-5"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bebas text-xl text-white tracking-wider">Filters</h3>
                    <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
                      <FaTimes />
                    </button>
                  </div>
                  <FilterSidebar filters={filters} onChange={(f) => { setFilters(f); setSidebarOpen(false) }} />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-bebas text-4xl text-sky-900/50 tracking-wider mb-2">No Products Found</p>
                <p className="font-montserrat text-gray-500 text-sm">Try adjusting your filters.</p>
              </div>
            ) : (
              <>
                <p className="font-montserrat text-xs text-gray-500 tracking-widest uppercase mb-6">
                  {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((product) => (
                      <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
