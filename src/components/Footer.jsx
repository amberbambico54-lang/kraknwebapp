import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/Kraken Lettering Logo.svg'

const navLinks = [
  { label: 'Home',     to: '/'        },
  { label: 'About',    to: '/about'   },
  { label: 'Products', to: '/products'},
  { label: 'Shop',     to: '/shop'    },
]

const productLinks = [
  { label: 'Flavors',     to: '/products#overview'    },
  { label: 'Ingredients', to: '/products#ingredients' },
  
]

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] border-t border-sky-900/30 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="font-bebas text-3xl tracking-widest text-white mb-3">
               <Link
          to="/"
          className="flex items-center "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} className="h-9 w-auto" alt="Kraken Logo" />
        </Link>
            </div>
            <p className="font-montserrat text-gray-500 text-xs tracking-widest uppercase">
              Unleash The Strength from the Depths.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-montserrat text-sm text-gray-500 hover:text-sky-400 transition-colors duration-300"
                  >
                    {label}
                  </Link>
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
              {productLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-montserrat text-sm text-gray-500 hover:text-sky-400 transition-colors duration-300"
                  >
                    {label}
                  </Link>
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
                {
                  icon: <FaInstagram />,
                  label: "Instagram",
                  link: "https://www.instagram.com/",
                },
                {
                  icon: <FaFacebookF />,
                  label: "Facebook",
                  link: "https://www.facebook.com/",
                },
                {
                  icon: <FaTiktok />,
                  label: "TikTok",
                  link: "https://www.tiktok.com/",
                },
              ].map(({ icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-sky-900/50 hover:border-sky-500/50 flex items-center justify-center text-gray-500 hover:text-sky-400 transition-all duration-300 hover:bg-sky-500/10"
                >
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
            Unleash The Strength from the Depths.
          </p>
        </div>
      </div>
    </footer>
  );
}
