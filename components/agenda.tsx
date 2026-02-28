"use client"
import { useRef, useState } from "react"
import { useScroll, motion, useMotionValueEvent } from "framer-motion"

const lines = [
  { text: '$ python3.11 main.py https://yoursite.com', type: 'command' },
  { text: '', type: 'empty' },
  { text: 'PathVo Accessibility Scanner', type: 'header' },
  { text: 'Scanning: https://yoursite.com...', type: 'info' },
  { text: 'Found 8 violations', type: 'info' },
  { text: 'Running AI analysis...', type: 'info' },
  { text: 'Generating report...', type: 'info' },
  { text: '', type: 'empty' },
  { text: 'Done!', type: 'success' },
  { text: 'Total violations found: 8', type: 'result' },
]

const descriptions: Record<number, string> = {
  0: 'We start by visiting your website, just like a real user would',
  2: 'The PathVo scanner is live and running',
  3: 'Every page on your site is being checked',
  4: 'We found issues that could make your site a target for ADA lawsuits',
  5: 'AI reviews each issue and writes explanations that are easy to understand',
  6: 'Your report is being put together',
  8: 'Your audit is done',
  9: 'Every issue comes with a fix your dev can copy and paste',
}

export default function Agenda() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })
  const [count, setCount] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Each line gets an equal zone of the 0-0.9 scroll range
    const totalLines = lines.length
    const zone = 0.9 / totalLines
    const newCount = Math.min(
      totalLines,
      Math.floor(progress / zone)
    )
    setCount(newCount)
  })

  const status = count === 0 ? 'READY'
    : count < 4 ? 'SCANNING...'
    : count < 7 ? 'ANALYZING...'
    : count < 9 ? 'GENERATING...'
    : 'COMPLETE'

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative border-t border-border/30"
      style={{ height: '800vh' }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Teal glow bloom behind terminal */}
        <div
          className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(45,212,191,0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground mb-3 text-center"
        >
          How It Works
        </motion.h2>

        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
            status === 'COMPLETE' ? 'bg-emerald-400' : 'bg-white/30 animate-pulse'
          }`} />
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40">
            {status}
          </p>
        </div>

        {/* Terminal panel */}
        <div
          className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(10,10,10,0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 24px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {/* Terminal header bar */}
          <div
            className="flex items-center gap-1.5 px-4 py-3"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
            <span className="ml-3 text-[10px] font-mono tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
              pathvo-scanner
            </span>
          </div>

          {/* Terminal body */}
          <div className="px-6 py-5 min-h-[260px] font-mono text-sm space-y-1.5">
            {lines.slice(0, count).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`leading-relaxed ${
                  line.type === 'empty' ? 'h-2' : ''
                }`}
                style={{
                  color:
                    line.type === 'command' ? 'rgba(255,255,255,0.9)' :
                    line.type === 'header' ? 'rgba(255,255,255,0.75)' :
                    line.type === 'success' ? '#34d399' :
                    line.type === 'result' ? 'rgba(255,255,255,0.9)' :
                    'rgba(255,255,255,0.35)',
                  fontWeight: line.type === 'header' || line.type === 'result' ? '600' : '400',
                }}
              >
                {line.type !== 'empty' && line.text}
              </motion.div>
            ))}
            {count < lines.length && (
              <span
                className="inline-block w-[2px] h-[13px] animate-pulse align-middle"
                style={{ background: 'rgba(255,255,255,0.5)', marginLeft: '1px' }}
              />
            )}
            {count >= lines.length && (
              <div style={{ color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>
                <span>$ </span>
                <span
                  className="inline-block w-[2px] h-[13px] animate-pulse align-middle"
                  style={{ background: 'rgba(255,255,255,0.5)' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Descriptions below terminal */}
        <div className="w-full max-w-2xl mt-6 h-10 relative">
          {Object.entries(descriptions).map(([lineIndex, desc]) => (
            <motion.p
              key={lineIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{
                opacity: count === parseInt(lineIndex) + 1 ? 1 : 0,
                y: count === parseInt(lineIndex) + 1 ? 0 : 6
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 text-sm text-white/50 leading-relaxed font-sans text-center"
            >
              {desc}
            </motion.p>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: count > 0 ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 pointer-events-none"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Scroll to run
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ color: 'rgba(255,255,255,0.15)' }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
