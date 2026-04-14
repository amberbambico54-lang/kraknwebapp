import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'

const nav = ['Home', 'About', 'Products', 'Shop']
const product = ['Flavors', 'Ingredients', 'FAQs']

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] border-t border-sky-900/30 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="font-bebas text-3xl tracking-widest text-white mb-3">
              KR<span className="text-sky-400">Ā</span>KN
            </div>
            <p className="font-montserrat text-gray-500 text-xs tracking-widest uppercase">
              Power Born Beneath
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-montserrat text-sm text-gray-500 hover:text-sky-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-montserrat text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {product.map((item) => (
                <li key={item}>
                  <a href="#" className="font-montserrat text-sm text-gray-500 hover:text-sky-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-montserrat text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { icon: <FaInstagram />, label: 'Instagram' },
                { icon: <FaFacebookF />, label: 'Facebook' },
                { icon: <FaTiktok />, label: 'TikTok' },
              ].map(({ icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-full border border-sky-900/50 hover:border-sky-500/50 flex items-center justify-center text-gray-500 hover:text-sky-400 transition-all duration-300 hover:bg-sky-500/10">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-sky-900/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-xs text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} KRĀKN. All rights reserved.
          </p>
          <p className="font-montserrat text-xs text-gray-600 tracking-widest uppercase">
            Power Born Beneath
          </p>
        </div>
      </div>
    </footer>
  )
}
