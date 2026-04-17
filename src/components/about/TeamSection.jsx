import { motion } from 'framer-motion'
import imgMarkAnthony     from '../../assets/team/Mark Anthony.png'
import imgBlaineBautista  from '../../assets/team/Blaine Bautista.png'
import imgFernanBambico   from '../../assets/team/Fernan Bambico.png'
import imgChristineShanePe from '../../assets/team/Christine Shane Pe.png'
import imgMarcLaril       from '../../assets/team/Marc Laril.png'
import imgAldrinCabrera   from '../../assets/team/Aldrin Cabrera.png'
import imgJocehlJardinico from '../../assets/team/Jocehl Jardinico.png'

const team = [
  { name: 'Mark Anthony',     role: 'Founder & CEO',       image: imgMarkAnthony },
  { name: 'Blaine Bautista',  role: 'Head of Formula',     image: imgBlaineBautista },
  { name: 'Fernan Bambico',   role: 'Creative Director',   image: imgFernanBambico },
  { name: 'Christine Shane Pe', role: 'Brand Strategist',  image: imgChristineShanePe },
  { name: 'Marc Laril',       role: 'Performance Lead',    image: imgMarcLaril },
  { name: 'Aldrin Cabrera',   role: 'Operations',          image: imgAldrinCabrera },
  { name: 'Jocehl Jardinico', role: 'Community Manager',   image: imgJocehlJardinico },
]

function Tentacle({ className }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 110 C25 85, 55 90, 65 65 C75 40, 58 25, 72 8" stroke="rgba(56,189,248,0.75)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 108 C27 84, 56 88, 66 64 C76 40, 60 26, 73 9" stroke="rgba(180,230,255,0.2)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 95 C20 72, 46 80, 55 58 C64 36, 50 22, 62 8" stroke="rgba(56,189,248,0.35)" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 112 C32 90, 60 95, 70 70 C80 46, 65 30, 78 12" stroke="rgba(56,189,248,0.15)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="96" r="4.5" stroke="rgba(56,189,248,0.6)" strokeWidth="1.5" fill="rgba(56,189,248,0.08)" />
      <circle cx="30" cy="96" r="2" fill="rgba(56,189,248,0.25)" />
      <circle cx="46" cy="80" r="4" stroke="rgba(56,189,248,0.55)" strokeWidth="1.5" fill="rgba(56,189,248,0.08)" />
      <circle cx="46" cy="80" r="1.8" fill="rgba(56,189,248,0.22)" />
      <circle cx="58" cy="63" r="3.5" stroke="rgba(56,189,248,0.5)" strokeWidth="1.2" fill="rgba(56,189,248,0.07)" />
      <circle cx="58" cy="63" r="1.5" fill="rgba(56,189,248,0.2)" />
      <circle cx="66" cy="46" r="3" stroke="rgba(56,189,248,0.45)" strokeWidth="1.2" fill="rgba(56,189,248,0.06)" />
      <circle cx="66" cy="46" r="1.2" fill="rgba(56,189,248,0.18)" />
      <circle cx="70" cy="30" r="2.2" stroke="rgba(56,189,248,0.35)" strokeWidth="1" fill="rgba(56,189,248,0.05)" />
      <circle cx="70" cy="30" r="0.9" fill="rgba(56,189,248,0.15)" />
      <circle cx="72" cy="16" r="1.5" stroke="rgba(56,189,248,0.25)" strokeWidth="0.8" fill="rgba(56,189,248,0.04)" />
      <circle cx="72" cy="8" r="2.5" fill="rgba(56,189,248,0.4)" />
      <circle cx="72" cy="8" r="1.2" fill="rgba(180,230,255,0.6)" />
    </svg>
  )
}

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="team-card group relative rounded-[20px] bg-gradient-to-b from-[#0d2240] to-[#0A1A2F] border border-sky-900/30 cursor-pointer overflow-visible"
      style={{ padding: '24px', width: '100%', transition: 'all 0.4s ease' }}
    >
      <div className="absolute -top-5 -left-5 w-28 h-28 pointer-events-none z-10" style={{ opacity: 0.25, transform: 'scale(0.85)', transition: 'all 0.5s ease' }} data-tentacle="tl">
        <Tentacle className="w-full h-full" />
      </div>
      <div className="absolute -bottom-5 -right-5 w-28 h-28 pointer-events-none z-10" style={{ opacity: 0.25, transform: 'scale(0.85) rotate(180deg)', transition: 'all 0.5s ease' }} data-tentacle="br">
        <Tentacle className="w-full h-full" />
      </div>

      <div className="relative z-20">
        <div className="w-full aspect-square rounded-2xl border border-sky-900/30 mb-5 overflow-hidden bg-[#0d2240]">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bebas text-4xl text-sky-400/30 tracking-widest">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
        <h3 className="font-bebas uppercase text-2xl text-white tracking-wider leading-tight">{member.name}</h3>
        <p className="font-montserrat text-sky-400 text-xs tracking-widest uppercase mt-1">{member.role}</p>
      </div>
    </motion.div>
  )
}

export default function TeamSection() {
  const ceo     = team[0]
  const row1    = team.slice(1, 4)
  const row2    = team.slice(4)

  return (
    <section className="bg-[#0A1A2F] overflow-visible py-16 sm:py-24 lg:py-32">
      <style>{`
        .team-card:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(56,189,248,0.2), 0 0 0 1px rgba(56,189,248,0.2); border-color: rgba(56,189,248,0.3); }
        .team-card:hover [data-tentacle] { opacity: 0.65 !important; transform: scale(0.95) rotate(3deg) !important; }
        .team-card:hover [data-tentacle="br"] { transform: scale(0.95) rotate(183deg) !important; }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">The People</p>
          <h2 className="font-bebas uppercase text-5xl sm:text-6xl md:text-7xl text-white tracking-wider">
            Meet the <span className="text-sky-400">Crew</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr]" style={{ gap: '32px', alignItems: 'stretch' }}>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-6">Founder</p>
            <TeamCard member={ceo} index={0} />
          </div>

          <div>
            <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-6">The Team</p>
            <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: '16px', marginBottom: '16px' }}>
              {row1.map((member, i) => <TeamCard key={member.name} member={member} index={i + 1} />)}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: '16px' }}>
              {row2.map((member, i) => <TeamCard key={member.name} member={member} index={i + 4} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
