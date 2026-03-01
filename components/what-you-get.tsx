"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon, CopyIcon, CheckIcon } from "lucide-react"

const violations = [
  {
    id: 1,
    severity: "CRITICAL",
    rule: "WCAG 2.2 § 1.1.1",
    location: "Hero.tsx:42",
    title: "Missing alt text on hero image",
    explanation: "Your hero image has no alt text. Screen readers will skip it entirely, leaving visually impaired users with no context for your most important visual. This is one of the most common reasons sites get flagged in ADA complaints.",
    before: `<img src="/banner.jpg" />`,
    after: `<img src="/banner.jpg"\n  alt="Product dashboard showing accessibility score"\n/>`,
  },
  {
    id: 2,
    severity: "CRITICAL",
    rule: "WCAG 2.2 § 2.4.7",
    location: "Nav.tsx:15",
    title: "Interactive elements have no focus indicator",
    explanation: "Your navigation links have no visible focus ring. Keyboard users navigating with Tab cannot tell which element is currently focused. This is a common ADA lawsuit trigger.",
    before: `a { outline: none; }`,
    after: `a:focus-visible {\n  outline: 2px solid #2DD4BF;\n  outline-offset: 2px;\n}`,
  },
  {
    id: 3,
    severity: "SERIOUS",
    rule: "WCAG 2.2 § 1.3.1",
    location: "ContactForm.tsx:18",
    title: "Form inputs missing associated labels",
    explanation: "Your contact form inputs have no programmatic labels. Users relying on screen readers cannot tell what each field is asking for. This affects keyboard-only users too.",
    before: `<input type="email" placeholder="Email" />`,
    after: `<label htmlFor="email" className="sr-only">\n  Email address\n</label>\n<input id="email" type="email" />`,
  },
  {
    id: 4,
    severity: "SERIOUS",
    rule: "WCAG 2.2 § 1.4.3",
    location: "Footer.tsx:7",
    title: "Insufficient color contrast ratio",
    explanation: "Your footer text has a contrast ratio of 2.1:1 against the background. WCAG requires a minimum of 4.5:1 for normal text. Low contrast text is unreadable for users with low vision.",
    before: `<p style={{ color: '#999999' }}>© 2025 Company</p>`,
    after: `<p style={{ color: '#D1D5DB' }}>© 2025 Company</p>`,
  },
  {
    id: 5,
    severity: "MODERATE",
    rule: "WCAG 2.2 § 2.1.1",
    location: "Modal.tsx:33",
    title: "Modal not keyboard accessible",
    explanation: "Your modal cannot be closed with the Escape key, and focus does not return to the trigger element when closed. Keyboard-only users are effectively trapped.",
    before: `<div onClick={onClose}>Close</div>`,
    after: `<button\n  onClick={onClose}\n  onKeyDown={(e) => e.key === 'Escape' && onClose()}\n>\n  Close\n</button>`,
  },
]

export default function WhatYouGet() {
  const [activeTab, setActiveTab] = useState<'ALL' | 'CRITICAL' | 'SERIOUS' | 'MODERATE'>('ALL')
  const [expandedId, setExpandedId] = useState<number | null>(1)
  const [codeView, setCodeView] = useState<Record<number, 'before' | 'after'>>({})
  const [copied, setCopied] = useState<number | null>(null)

  const filtered = activeTab === 'ALL' ? violations : violations.filter(v => v.severity === activeTab)

  const severityColor = (s: string) => ({
    CRITICAL: { bg: 'rgba(239,68,68,0.15)', text: '#f87171' },
    SERIOUS: { bg: 'rgba(245,158,11,0.15)', text: '#fbbf24' },
    MODERATE: { bg: 'rgba(255,255,255,0.08)', text: 'rgba(255,255,255,0.5)' },
  }[s] ?? { bg: 'rgba(255,255,255,0.08)', text: 'rgba(255,255,255,0.5)' })

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="py-24 md:py-32 border-t border-border/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">
            What You Get
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto">
            Plain-English explanations for founders. Copy-paste code fixes for developers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-2xl rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(10,10,10,0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {/* Document header */}
          <div className="px-8 pt-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40">
                  PATHVO ACCESSIBILITY REPORT
                </p>
                <p className="text-[10px] font-mono mt-1 text-muted-foreground/30">
                  yoursite.com
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold font-mono tracking-tighter text-foreground">8</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40">violations</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="text-xs font-mono text-muted-foreground/50">3 Critical</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="text-xs font-mono text-muted-foreground/50">3 Serious</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-xs font-mono text-muted-foreground/50">2 Moderate</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-8 pt-5 pb-0 flex gap-1">
            {(['ALL', 'CRITICAL', 'SERIOUS', 'MODERATE'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setExpandedId(null); }}
                className="relative px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-md transition-colors duration-200"
                style={{
                  color: activeTab === tab ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                  background: activeTab === tab ? 'rgba(255,255,255,0.08)' : 'transparent',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Violations list */}
          <div className="px-8 py-5 space-y-1">
            <AnimatePresence mode="popLayout">
              {filtered.map((v) => {
                const isOpen = expandedId === v.id
                const view = codeView[v.id] ?? 'after'
                const colors = severityColor(v.severity)
                return (
                  <motion.div
                    key={v.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg overflow-hidden"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {/* Row header — always visible, clickable */}
                    <button
                      onClick={() => setExpandedId(isOpen ? null : v.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 hover:bg-white/[0.03]"
                    >
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded shrink-0"
                        style={{ background: colors.bg, color: colors.text }}
                      >
                        {v.severity}
                      </span>
                      <span className="text-sm text-foreground/80 flex-1 truncate">{v.title}</span>
                      <span className="text-[10px] font-mono text-muted-foreground/30 shrink-0 hidden md:block">{v.location}</span>
                      <ChevronDownIcon
                        className="size-4 text-muted-foreground/30 shrink-0 transition-transform duration-300"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="px-4 pb-4 space-y-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                            <p className="text-sm leading-relaxed text-muted-foreground/60 pt-4">
                              {v.explanation}
                            </p>
                            {/* Before/After toggle */}
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex gap-1">
                                  {(['before', 'after'] as const).map(mode => (
                                    <button
                                      key={mode}
                                      onClick={() => setCodeView(prev => ({ ...prev, [v.id]: mode }))}
                                      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded transition-colors duration-200"
                                      style={{
                                        background: view === mode ? 'rgba(255,255,255,0.1)' : 'transparent',
                                        color: view === mode ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
                                      }}
                                    >
                                      {mode === 'before' ? '✕ Before' : '✓ After'}
                                    </button>
                                  ))}
                                </div>
                                {view === 'after' && (
                                  <button
                                    onClick={() => handleCopy(v.id, v.after)}
                                    className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded transition-colors duration-200"
                                    style={{ color: copied === v.id ? '#86efac' : 'rgba(255,255,255,0.3)' }}
                                  >
                                    {copied === v.id
                                      ? <><CheckIcon className="size-3" /> Copied</>
                                      : <><CopyIcon className="size-3" /> Copy fix</>
                                    }
                                  </button>
                                )}
                              </div>
                              <div
                                className="rounded-lg p-4 font-mono text-xs"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                              >
                                <pre
                                  className="whitespace-pre-wrap"
                                  style={{ color: view === 'before' ? '#f87171' : '#86efac' }}
                                >
                                  {view === 'before' ? v.before : v.after}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Document footer */}
          <div className="px-8 py-4 flex items-center justify-between"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40">
              PathVo · pathvo.io
            </p>
            <p className="text-[10px] font-mono text-muted-foreground/40">
              Page 1 of 6
            </p>
          </div>
        </motion.div>

        {/* Secondary CTA below the card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact"
            className="text-sm text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors font-mono underline underline-offset-4">
            Request a free sample report →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
