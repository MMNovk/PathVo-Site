'use client'

import { motion } from 'framer-motion'

const steps = [
    {
        label: 'STEP 01',
        title: 'Scan',
        description: 'Your site gets crawled end-to-end using headless Chromium — every page, component, and dynamic state captured.',
        command: 'playwright.launch(url="https://yoursite.com")',
        side: 'left' as const,
    },
    {
        label: 'STEP 02',
        title: 'Diagnose',
        description: 'Every element is tested against WCAG 2.2 standards. Violations are flagged, categorized, and prioritized by severity.',
        command: 'axe_core.scan() → 51 violations found',
        side: 'right' as const,
    },
    {
        label: 'STEP 03',
        title: 'Remediate',
        description: 'Every violation comes with a plain-English explanation and a copy-paste code fix. No interpretation needed.',
        command: 'weasyprint.render(report="pathvo_audit.pdf")',
        side: 'left' as const,
    },
]

export default function Agenda() {
    return (
        <section id="how-it-works" className="py-24 md:py-32">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground text-center mb-20"
                >
                    How It Works
                </motion.h2>

                <div className="relative">
                    {/* Center vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />

                    {/* Steps */}
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className="relative grid md:grid-cols-2 gap-8 md:gap-16 mb-24 last:mb-0 items-center"
                        >
                            {/* Center dot on the line */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-background border-2 border-border/80 hidden md:block z-10" />

                            {/* Left column */}
                            <div className={step.side === 'left' ? '' : 'hidden md:block'}>
                                {step.side === 'left' && (
                                    <div>
                                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50 mb-3">
                                            {step.label}
                                        </p>
                                        <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                            {step.description}
                                        </p>
                                        <div className="bg-zinc-950 border border-border/50 rounded-lg px-4 py-3 font-mono text-sm">
                                            <span className="text-muted-foreground/40 mr-2 select-none">›</span>
                                            <span className="text-white/80">{step.command}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right column */}
                            <div className={step.side === 'right' ? '' : 'hidden md:block'}>
                                {step.side === 'right' && (
                                    <div>
                                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50 mb-3">
                                            {step.label}
                                        </p>
                                        <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                            {step.description}
                                        </p>
                                        <div className="bg-zinc-950 border border-border/50 rounded-lg px-4 py-3 font-mono text-sm">
                                            <span className="text-muted-foreground/40 mr-2 select-none">›</span>
                                            <span className="text-white/80">{step.command}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
