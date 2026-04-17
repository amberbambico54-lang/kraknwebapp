import { motion } from 'framer-motion'

const colorMap = {
  blue: {
    accent: 'text-sky-400',
    border: 'border-sky-500/30',
    glow: 'rgba(56,189,248,0.15)',
    glowStrong: 'rgba(56,189,248,0.3)',
    canFrom: 'from-sky-900/60',
    bullet: 'bg-sky-400',
    sectionGlow: 'rgba(56,189,248,0.05)',
  },
  green: {
    accent: 'text-emerald-400',
    border: 'border-emerald-500/30',
    glow: 'rgba(52,211,153,0.15)',
    glowStrong: 'rgba(52,211,153,0.3)',
    canFrom: 'from-emerald-900/60',
    bullet: 'bg-emerald-400',
    sectionGlow: 'rgba(52,211,153,0.04)',
  },
  red: {
    accent: 'text-red-400',
    border: 'border-red-500/30',
    glow: 'rgba(248,113,113,0.15)',
    glowStrong: 'rgba(248,113,113,0.3)',
    canFrom: 'from-red-900/60',
    bullet: 'bg-red-400',
    sectionGlow: 'rgba(248,113,113,0.04)',
  },
}

export default function VariantSection({ id, title, tagline, description, benefits, color = 'blue', reverse = false }) {
  const c = colorMap[color]

  const CanCol = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center w-full max-w-xs sm:max-w-sm mx-auto aspect-square">
        <div className="absolute inset-0 rounded-full blur-3xl opacity-20" style={{ background: c.glowStrong }} />
        <div
          className={`absolute inset-8 rounded-full border ${c.border} opacity-30 animate-spin`}
          style={{ animationDuration: '20s', willChange: 'transform' }}
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className={`relative w-28 sm:w-36 h-56 sm:h-72 rounded-3xl bg-gradient-to-b ${c.canFrom} to-[#0A1A2F] border ${c.border} flex items-center justify-center z-10`}
          style={{ boxShadow: `0 0 60px ${c.glow}, 0 0 120px ${c.glow}`, willChange: 'transform' }}
        >
          <span className={`font-bebas text-2xl tracking-widest text-center px-3 ${c.accent}`}>
            KR<span className="text-white">Ā</span>KN
          </span>
          <div className="absolute top-4 left-3 w-1.5 h-16 bg-white/10 rounded-full blur-sm" />
        </motion.div>
        <div className="absolute bottom-8 w-24 h-4 rounded-full blur-xl" style={{ background: c.glowStrong }} />
      </div>
    </motion.div>
  )

  const TextCol = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <p className={`font-montserrat text-xs tracking-[0.4em] uppercase mb-4 ${c.accent}`}>
        KRĀKN Variant
      </p>
      <h2
        className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-wider leading-none mb-3"
        style={{ textShadow: `0 0 40px ${c.glow}` }}
      >
        {title}
      </h2>
      <p className={`font-montserrat text-base sm:text-lg font-medium mb-6 ${c.accent}`}>
        {tagline}
      </p>
      <p className="font-montserrat text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
        {description}
      </p>
      <ul className="space-y-3 mb-8">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-3">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bullet}`} />
            <span className="font-montserrat text-gray-300 text-sm">{b}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`inline-block font-montserrat font-semibold text-sm tracking-widest uppercase px-8 py-3.5 border ${c.border} ${c.accent} hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-105`}
        style={{ boxShadow: `0 0 20px ${c.glow}` }}
      >
        View Details
      </a>
    </motion.div>
  )

  return (
    <section
      id={id}
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden"
      style={{ background: `radial-gradient(ellipse at ${reverse ? 'left' : 'right'} center, ${c.sectionGlow} 0%, #060f1e 60%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center justify-items-center">
          {reverse ? TextCol : CanCol}
          {reverse ? CanCol : TextCol}
        </div>
      </div>
    </section>
  )
}
