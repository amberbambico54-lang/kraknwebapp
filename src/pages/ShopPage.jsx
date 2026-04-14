import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaShoppingCart } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShopHero from '../components/shop/ShopHero'
import ShopSection from '../components/shop/ShopSection'
import FeaturedSection from '../components/shop/FeaturedSection'
import CartDrawer from '../components/shop/CartDrawer'

export default function ShopPage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0)

  return (
    <>
      <Navbar />

      {/* Floating cart button */}
      <motion.button
        onClick={() => setCartOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-sky-500 hover:bg-sky-400 rounded-full flex items-center justify-center transition-colors duration-300"
        style={{ boxShadow: '0 0 30px rgba(56,189,248,0.5)' }}
      >
        <FaShoppingCart className="text-white text-lg" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-sky-600 rounded-full text-xs font-bold flex items-center justify-center font-montserrat">
            {totalItems}
          </span>
        )}
      </motion.button>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
      />

      <ShopHero />
      <ShopSection onAddToCart={addToCart} />
      <FeaturedSection onAddToCart={addToCart} />
      <Footer />
    </>
  )
}
