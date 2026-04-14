import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaTrash } from 'react-icons/fa'

export default function CartDrawer({ open, onClose, items, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#0d2240] border-l border-sky-900/40 z-50 flex flex-col"
            style={{ boxShadow: '-20px 0 60px rgba(0,0,0,0.5)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-sky-900/30">
              <h2 className="font-bebas text-2xl text-white tracking-wider">Your Cart</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="font-bebas text-4xl text-sky-900/60 tracking-wider mb-2">Empty</p>
                  <p className="font-montserrat text-gray-500 text-sm">Your cart is waiting to be filled.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl bg-[#0A1A2F]/60 border border-sky-900/20">
                      <div className="w-12 h-12 rounded-lg bg-sky-900/40 border border-sky-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="font-bebas text-xs text-sky-400">KN</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-montserrat text-sm font-semibold text-white truncate">{item.name}</p>
                        <p className="font-montserrat text-xs text-gray-400">Qty: {item.qty}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="font-bebas text-lg text-sky-400">₱{(item.price * item.qty).toLocaleString()}</span>
                        <button onClick={() => onRemove(item.id)} className="text-gray-600 hover:text-red-400 transition-colors">
                          <FaTrash className="text-xs" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-sky-900/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-montserrat text-sm text-gray-400 uppercase tracking-widest">Total</span>
                  <span className="font-bebas text-3xl text-white tracking-wider">₱{total.toLocaleString()}</span>
                </div>
                <button
                  className="w-full font-montserrat font-semibold text-sm tracking-widest uppercase py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-full transition-all duration-300"
                  style={{ boxShadow: '0 0 30px rgba(56,189,248,0.4)' }}
                >
                  Checkout Now
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
