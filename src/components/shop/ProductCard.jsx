import { motion } from 'framer-motion'
import { variantStyles } from './shopData'

export default function ProductCard({ product, onAddToCart }) {
  const s = variantStyles[product.variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl bg-gradient-to-b ${s.bg} to-[#0A1A2F] border ${s.border} overflow-hidden transition-all duration-300 cursor-pointer flex flex-col`}
      style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${s.glow}, transparent 70%)` }}
      />

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`font-montserrat text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${s.border} ${s.accent} bg-black/30`}>
            {product.badge}
          </span>
        </div>
      )}

      {/* Image area */}
      <div className="h-[200px] sm:h-[220px] flex items-center justify-center relative overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-16 h-32 sm:w-20 sm:h-40 rounded-2xl bg-gradient-to-b ${s.bg} to-[#060f1e] border ${s.border} flex items-center justify-center`}
            style={{ boxShadow: `0 0 30px ${s.glow}`, willChange: 'transform' }}
          >
            <span className={`font-bebas text-sm tracking-widest text-center px-1 ${s.accent}`}>
              KR<span className="text-white">Ā</span>KN
            </span>
          </motion.div>
        )}
        <div className="absolute bottom-3 w-14 h-3 rounded-full blur-lg" style={{ background: s.glow }} />
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <p className={`font-montserrat text-xs tracking-widest uppercase mb-1 ${s.accent}`}>{product.type}</p>
        <h3 className="font-bebas uppercase text-xl sm:text-2xl text-white tracking-wider mb-1">{product.name}</h3>

        {/* Size options */}
        {product.sizes.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {product.sizes.map((size) => (
              <span key={size} className="font-montserrat text-xs text-gray-400 border border-sky-900/40 rounded px-1.5 py-0.5 hover:border-sky-500/40 hover:text-sky-300 transition-colors cursor-pointer">
                {size}
              </span>
            ))}
          </div>
        )}

        {/* Color swatches */}
        {product.colors.length > 0 && (
          <div className="flex gap-1.5 mb-2">
            {product.colors.map((color) => (
              <button
                key={color}
                className="w-4 h-4 rounded-full border border-white/20 hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-3">
          <span className="font-bebas text-2xl text-white tracking-wider">₱{product.price.toLocaleString()}</span>
          <button
            onClick={() => onAddToCart(product)}
            className={`font-montserrat text-xs font-semibold tracking-widest uppercase px-4 py-2 border ${s.border} ${s.accent} hover:bg-white/5 rounded-full transition-all duration-300`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}
