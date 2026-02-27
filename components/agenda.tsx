'use client'

import { motion } from 'framer-motion'

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

export default function Agenda() {
    return (
        <section id="how-it-works" className="py-24 md:py-32 border-t border-border/30">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground mb-20"
                >
                    How It Works
                </motion.h2>

                <div className="space-y-0 divide-y divide-border/30">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.65, delay: index * 0.1 }}
                        >
                            <div className="grid md:grid-cols-2 gap-8 md:gap-16 py-16 items-center">
                                {/* Left column — text content */}
                                <div className="flex flex-col gap-4">
                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40">
                                        {step.label}
                                    </p>
                                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Right column — code block */}
                                <div className="bg-zinc-950 border border-border/40 rounded-xl p-5 font-mono text-sm">
                                    <div className="flex items-center gap-1.5 mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex gap-3">
                                            <span className="text-muted-foreground/30 select-none">›</span>
                                            <span className="text-white/75">{step.primaryCommand}</span>
                                        </div>
                                        {step.secondaryLines.map((line, i) => (
                                            <div key={i} className="flex gap-3 pl-4">
                                                <span className="text-muted-foreground/40 text-xs">{line}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
