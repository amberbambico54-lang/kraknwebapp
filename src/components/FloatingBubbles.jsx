import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function FloatingBubbles({ count = 18 }) {
  const bubbles = useMemo(
    () =>
      [...Array(count)].map(() => ({
        width: Math.round(Math.random() * 18 + 8),
        height: Math.round(Math.random() * 18 + 8),
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 4 + 5,
        delay: Math.random() * 4,
      })),
    [count]
  )

  return (
    <>
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-sky-400/35 bg-sky-400/8"
          style={{
            width: b.width,
            height: b.height,
            left: b.left,
            top: b.top,
            willChange: 'transform, opacity',
            boxShadow: '0 0 4px rgba(56,189,248,0.15)',
          }}
          animate={{ y: [0, -65, 0], opacity: [0, 0.65, 0] }}
          transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
        />
      ))}
    </>
  )
}
