import athletesBagMatt   from '../../assets/productsItems/Krakn Athletes Bag and Matt.jpg'
import athletesCap       from '../../assets/productsItems/Krakn Athletes Cap.jpg'
import beltBag           from '../../assets/productsItems/Krakn Belt Bag.jpg'
import deepFlask         from '../../assets/productsItems/Krakn Deep Flask.jpg'
import eliteApparel      from '../../assets/productsItems/Krakn Elite Apparel.jpg'
import eliteAthletesBags from '../../assets/productsItems/Krakn Elite Athetes Bags.jpg'
import eliteHoodie       from '../../assets/productsItems/Krakn Elite Hoodie.jpg'
import eliteSocks        from '../../assets/productsItems/Krakn Elite Socks.jpg'
import hoodie            from '../../assets/productsItems/Krakn Hoodie.jpg'
import liftingStraps     from '../../assets/productsItems/Krakn Lifting Straps.jpg'
import premiumBlack      from '../../assets/productsItems/Krakn Premium Black Apparel.jpg'
import premiumSocks      from '../../assets/productsItems/Krakn Premium Socks.jpg'
import towel             from '../../assets/productsItems/Krakn Towel.jpg'
import tumblr            from '../../assets/productsItems/Krakn Tumblr.jpg'
import wristWraps        from '../../assets/productsItems/Krakn Wrist Wraps.jpg'

export const products = [
  // Drinks
  { id: 1, name: 'KRĀKN Classic',                  category: 'drink',     price: 120,  type: 'Pre-workout Cola', variant: 'blue',    badge: 'Best Seller', sizes: [],                     colors: [],                              image: null },
  { id: 2, name: 'KRĀKN PURE',              category: 'drink',     price: 120,  type: 'Pre-workout Cola', variant: 'green',   badge: 'New',         sizes: [],                     colors: [],                              image: null },
  { id: 3, name: 'KRĀKN MAX',                 category: 'drink',     price: 120,  type: 'Pre-workout Cola', variant: 'red',     badge: 'Hot',         sizes: [],                     colors: [],                              image: null },
  { id: 4, name: 'KRĀKN 6-Pack',                   category: 'drink',     price: 650,  type: 'Pre-workout Cola', variant: 'blue',    badge: 'Bundle',      sizes: [],                     colors: [],                              image: null },

  // Apparel
  { id: 5,  name: 'Krakn Elite Apparel',           category: 'apparel',   price: 850,  type: 'Apparel',      variant: 'neutral', badge: '',            sizes: ['S','M','L','XL'],     colors: ['#0A1A2F','#ffffff','#38bdf8'], image: eliteApparel },
  { id: 6,  name: 'Krakn Premium Black Apparel',   category: 'apparel',   price: 950,  type: 'Apparel',      variant: 'neutral', badge: '',            sizes: ['S','M','L','XL'],     colors: ['#0A1A2F','#1e293b'],           image: premiumBlack },
  { id: 7,  name: 'Krakn Elite Hoodie',            category: 'apparel',   price: 1800, type: 'Hoodie',       variant: 'neutral', badge: 'New',         sizes: ['S','M','L','XL','XXL'],colors: ['#0A1A2F','#0d2240'],           image: eliteHoodie },
  { id: 8,  name: 'Krakn Hoodie',                  category: 'apparel',   price: 1500, type: 'Hoodie',       variant: 'neutral', badge: '',            sizes: ['S','M','L','XL','XXL'],colors: ['#0A1A2F','#0d2240'],           image: hoodie },
  { id: 9,  name: 'Krakn Elite Socks',             category: 'apparel',   price: 350,  type: 'Socks',        variant: 'neutral', badge: '',            sizes: ['S','M','L'],          colors: ['#0A1A2F','#ffffff'],           image: eliteSocks },
  { id: 10, name: 'Krakn Premium Socks',           category: 'apparel',   price: 299,  type: 'Socks',        variant: 'neutral', badge: '',            sizes: ['S','M','L'],          colors: ['#0A1A2F','#ffffff'],           image: premiumSocks },
  { id: 11, name: 'Krakn Athletes Cap',            category: 'apparel',   price: 650,  type: 'Cap',          variant: 'neutral', badge: '',            sizes: ['One Size'],           colors: ['#0A1A2F','#ffffff'],           image: athletesCap },

  // Accessories
  { id: 12, name: 'Krakn Athletes Bag and Matt',   category: 'accessory', price: 1200, type: 'Bag',          variant: 'blue',    badge: 'New',         sizes: [],                     colors: [],                              image: athletesBagMatt },
  { id: 13, name: 'Krakn Elite Athletes Bags',     category: 'accessory', price: 1500, type: 'Bag',          variant: 'blue',    badge: '',            sizes: [],                     colors: [],                              image: eliteAthletesBags },
  { id: 14, name: 'Krakn Belt Bag',                category: 'accessory', price: 750,  type: 'Bag',          variant: 'blue',    badge: '',            sizes: [],                     colors: [],                              image: beltBag },
  { id: 15, name: 'Krakn Deep Flask',              category: 'accessory', price: 550,  type: 'Flask',        variant: 'blue',    badge: '',            sizes: [],                     colors: [],                              image: deepFlask },
  { id: 16, name: 'Krakn Lifting Straps',          category: 'accessory', price: 450,  type: 'Gym Gear',     variant: 'blue',    badge: '',            sizes: [],                     colors: [],                              image: liftingStraps },
  { id: 17, name: 'Krakn Towel',                   category: 'accessory', price: 399,  type: 'Gym Gear',     variant: 'blue',    badge: '',            sizes: [],                     colors: [],                              image: towel },
  { id: 18, name: 'Krakn Tumblr',                  category: 'accessory', price: 499,  type: 'Flask',        variant: 'blue',    badge: '',            sizes: [],                     colors: [],                              image: tumblr },
  { id: 19, name: 'Krakn Wrist Wraps',             category: 'accessory', price: 450,  type: 'Gym Gear',     variant: 'blue',    badge: '',            sizes: [],                     colors: [],                              image: wristWraps },
]

export const variantStyles = {
  blue:    { glow: 'rgba(56,189,248,0.2)',   border: 'border-sky-500/30',     accent: 'text-sky-400',     bg: 'from-sky-900/40'     },
  green:   { glow: 'rgba(52,211,153,0.2)',   border: 'border-emerald-500/30', accent: 'text-emerald-400', bg: 'from-emerald-900/40' },
  red:     { glow: 'rgba(248,113,113,0.2)',  border: 'border-red-500/30',     accent: 'text-red-400',     bg: 'from-red-900/40'     },
  neutral: { glow: 'rgba(148,163,184,0.15)', border: 'border-slate-600/40',   accent: 'text-slate-300',   bg: 'from-slate-800/40'   },
}
