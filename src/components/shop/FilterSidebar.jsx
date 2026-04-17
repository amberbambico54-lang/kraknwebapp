const categories = ['All', 'Drinks', 'Apparel', 'Accessories']
const types = ['All Types', 'Pre-workout Cola', 'Apparel', 'Hoodie', 'Socks', 'Cap', 'Bag', 'Flask', 'Gym Gear']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₱500', min: 0, max: 499 },
  { label: '₱500 – ₱1,000', min: 500, max: 1000 },
  { label: 'Over ₱1,000', min: 1001, max: Infinity },
]

export default function FilterSidebar({ filters, onChange }) {
  return (
    <aside className="w-full lg:w-[260px] flex-shrink-0">
      <div className="bg-[#0d2240]/50 border border-sky-900/30 rounded-2xl p-5 sm:p-6 sticky top-24">
        <h3 className="font-bebas text-xl text-white tracking-wider mb-6">Filters</h3>

        {/* Category */}
        <div className="mb-6">
          <p className="font-montserrat text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Category</p>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onChange({ ...filters, category: cat })}
                className={`text-left font-montserrat text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                  filters.category === cat
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    : 'text-gray-400 hover:text-sky-300 hover:bg-sky-500/10 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <p className="font-montserrat text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Price Range</p>
          <div className="flex flex-col gap-2">
            {priceRanges.map((range) => (
              <button
                key={range.label}
                onClick={() => onChange({ ...filters, priceMin: range.min, priceMax: range.max })}
                className={`text-left font-montserrat text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                  filters.priceMin === range.min && filters.priceMax === range.max
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    : 'text-gray-400 hover:text-sky-300 hover:bg-sky-500/10 border border-transparent'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Type */}
        <div className="mb-6">
          <p className="font-montserrat text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Product Type</p>
          <div className="flex flex-col gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => onChange({ ...filters, type })}
                className={`text-left font-montserrat text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                  filters.type === type
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    : 'text-gray-400 hover:text-sky-300 hover:bg-sky-500/10 border border-transparent'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Reset */}
        <button
          onClick={() => onChange({ category: 'All', priceMin: 0, priceMax: Infinity, type: 'All Types' })}
          className="w-full font-montserrat text-xs font-semibold tracking-widest uppercase py-2.5 border border-sky-900/40 text-gray-500 hover:text-sky-400 hover:border-sky-500/40 rounded-full transition-all duration-300"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  )
}
