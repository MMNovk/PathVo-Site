'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function TypewriterText({ text, inView }: { text: string; inView: boolean }) {
    const [displayed, setDisplayed] = useState('')
    const [started, setStarted] = useState(false)
    
    const safeText = text || ''

    useEffect(() => {
        if (inView && !started && safeText.length > 0) {
            setStarted(true)
            let i = 0
            const interval = setInterval(() => {
                setDisplayed(safeText.slice(0, i + 1))
                i++
                if (i >= safeText.length) clearInterval(interval)
            }, 18)
            return () => clearInterval(interval)
        }
    }, [inView, safeText, started])

    if (!safeText) return null

    return (
        <span>
            {displayed}
            {displayed.length < safeText.length && started && (
                <span className="inline-block w-[2px] h-[1em] bg-white/60 ml-[1px] animate-pulse align-middle" />
            )}
        </span>
    )
}

const steps = [
    {
        label: 'STEP 01',
        title: 'Scan',
        description: 'Your site gets crawled end-to-end using headless Chromium — every page, component, and dynamic state captured.',
        primaryCommand: 'playwright.launch(url="https://yoursite.com")',
        secondaryLines: [
            '# Scanning DOM tree with headless Chromium...',
            '# Pages crawled: 12 | Components mapped: 847',
        ],
    },
    {
        label: 'STEP 02',
        title: 'Diagnose',
        description: 'Every element is tested against WCAG 2.2 standards. Violations are flagged, categorized, and prioritized by severity.',
        primaryCommand: 'axe_core.scan() → 51 violations found',
        secondaryLines: [
            '# 3 critical  · 18 serious  · 30 moderate',
            '# Mapped to WCAG 2.2 success criteria',
        ],
    },
    {
        label: 'STEP 03',
        title: 'Remediate',
        description: 'Every violation comes with a plain-English explanation and a copy-paste code fix. No interpretation needed.',
        primaryCommand: 'weasyprint.render(report="pathvo_audit.pdf")',
        secondaryLines: [
            '# Generating remediation report...',
            '# Report exported → pathvo_audit.pdf',
        ],
    },
]

function StepCodeBlock({ step, index }: { step: typeof steps[0]; index: number }) {
    const [hasAnimated, setHasAnimated] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.15 }}
            onAnimationComplete={() => setHasAnimated(true)}
        >
            <div className="bg-zinc-950 border border-border/40 rounded-xl p-5 font-mono text-sm">
                <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="space-y-1.5">
                    <div className="flex gap-3">
                        <span className="text-muted-foreground/30 select-none">›</span>
                        <span className="text-white/75">
                            <TypewriterText text={step.primaryCommand} inView={hasAnimated} />
                        </span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                    >
                        {step.secondaryLines.map((line, i) => (
                            <div key={i} className="flex gap-3 pl-4">
                                <span className="text-muted-foreground/40 text-xs">{line}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Agenda() {
    return (
        <section id="how-it-works" className="py-24 md:py-32 border-t border-border/30">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground mb-20 pl-4 border-l-2 border-[#2DD4BF]/60"
                >
                    How It Works
                </motion.h2>

                <div className="space-y-0">
                    {steps.map((step, index) => (
                        <div key={step.label}>
                            {index > 0 && (
                                <motion.hr
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="border-none h-px bg-border/30"
                                />
                            )}
                            <div className="grid md:grid-cols-2 gap-8 md:gap-16 py-16 items-center">
                                {/* Left column — text content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col gap-4"
                                >
                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#2DD4BF]/60">
                                        {step.label}
                                    </p>
                                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                                        {step.description}
                                    </p>
                                </motion.div>

                                {/* Right column — code block */}
                                <StepCodeBlock step={step} index={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
