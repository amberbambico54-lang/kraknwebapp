export const products = [
  // Drinks
  { id: 1, name: 'KRĀKN Classic',      category: 'drink',     price: 120, type: 'Energy Drink', variant: 'blue',    badge: 'Best Seller', sizes: [],                    colors: [] },
  { id: 2, name: 'KRĀKN Green Surge',  category: 'drink',     price: 120, type: 'Energy Drink', variant: 'green',   badge: 'New',         sizes: [],                    colors: [] },
  { id: 3, name: 'KRĀKN Red Rush',     category: 'drink',     price: 120, type: 'Energy Drink', variant: 'red',     badge: 'Hot',         sizes: [],                    colors: [] },
  { id: 4, name: 'KRĀKN 6-Pack',       category: 'drink',     price: 650, type: 'Energy Drink', variant: 'blue',    badge: 'Bundle',      sizes: [],                    colors: [] },

  // Apparel
  { id: 5, name: 'KRĀKN Tee',          category: 'apparel',   price: 850, type: 'Shirt',        variant: 'neutral', badge: '',            sizes: ['S','M','L','XL'],    colors: ['#0A1A2F','#ffffff','#38bdf8'] },
  { id: 6, name: 'KRĀKN Shorts',       category: 'apparel',   price: 950, type: 'Shorts',       variant: 'neutral', badge: 'New',         sizes: ['S','M','L','XL'],    colors: ['#0A1A2F','#1e293b'] },
  { id: 7, name: 'KRĀKN Hoodie',       category: 'apparel',   price: 1800,type: 'Shirt',        variant: 'neutral', badge: '',            sizes: ['S','M','L','XL','XXL'],colors: ['#0A1A2F','#0d2240'] },
  { id: 8, name: 'KRĀKN Cap',          category: 'apparel',   price: 650, type: 'Accessories',  variant: 'neutral', badge: '',            sizes: ['One Size'],          colors: ['#0A1A2F','#ffffff'] },

  // Accessories
  { id: 9,  name: 'KRĀKN Shaker',      category: 'accessory', price: 550, type: 'Shaker',       variant: 'blue',    badge: '',            sizes: [],                    colors: [] },
  { id: 10, name: 'Wrist Wraps',       category: 'accessory', price: 450, type: 'Wrist Wraps',  variant: 'blue',    badge: '',            sizes: [],                    colors: [] },
  { id: 11, name: 'Gym Bag',           category: 'accessory', price: 1200,type: 'Accessories',  variant: 'neutral', badge: 'New',         sizes: [],                    colors: [] },
  { id: 12, name: 'Sticker Pack',      category: 'accessory', price: 150, type: 'Accessories',  variant: 'blue',    badge: '',            sizes: [],                    colors: [] },
]

export const variantStyles = {
  blue:    { glow: 'rgba(56,189,248,0.2)',   border: 'border-sky-500/30',     accent: 'text-sky-400',     bg: 'from-sky-900/40'     },
  green:   { glow: 'rgba(52,211,153,0.2)',   border: 'border-emerald-500/30', accent: 'text-emerald-400', bg: 'from-emerald-900/40' },
  red:     { glow: 'rgba(248,113,113,0.2)',  border: 'border-red-500/30',     accent: 'text-red-400',     bg: 'from-red-900/40'     },
  neutral: { glow: 'rgba(148,163,184,0.15)', border: 'border-slate-600/40',   accent: 'text-slate-300',   bg: 'from-slate-800/40'   },
}
