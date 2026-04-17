import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import videoMp4  from '../assets/video/KRAKEN VIDEO AD_2_1.mp4'
import videoWebm from '../assets/video/KRAKEN VIDEO AD_2_1.webm'

export default function VideoSection() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setMuted(videoRef.current.muted)
    }
  }

  return (
    <section className="relative py-16 sm:py-24 bg-[#060f1e] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            The Experience
          </p>
          <h2 className="font-bebas uppercase text-5xl sm:text-6xl md:text-7xl text-white tracking-wider">
            Power Born <span className="text-sky-400">Beneath</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden aspect-video border border-sky-900/40"
          style={{ boxShadow: '0 0 60px rgba(56,189,248,0.15)' }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoWebm} type="video/webm" />
            <source src={videoMp4} type="video/mp4" />
          </video>

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-sky-500/40 flex items-center justify-center text-sky-400 hover:bg-black/70 hover:border-sky-400 transition-all duration-300 backdrop-blur-sm"
            style={{ boxShadow: '0 0 16px rgba(56,189,248,0.3)' }}
          >
            {muted ? <FaVolumeMute className="text-sm" /> : <FaVolumeUp className="text-sm" />}
          </button>

          <div className="absolute top-0 left-0 w-32 h-32 bg-sky-500/10 blur-2xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/10 blur-2xl rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
