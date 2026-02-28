'use client'

import { motion } from "motion/react"
import React from "react"

export default function WhatYouGet() {
    const [dateStr, setDateStr] = React.useState('')
    
    React.useEffect(() => {
        setDateStr(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))
    }, [])

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
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mx-auto max-w-2xl"
                    style={{ transform: 'rotate(1deg)' }}
                >
                    {/* Shadow pages behind — fanned effect */}
                    <div className="absolute inset-0 translate-y-3 translate-x-2 rounded-xl opacity-30"
                        style={{ background: '#e8e4dc' }} />
                    <div className="absolute inset-0 translate-y-1.5 translate-x-1 rounded-xl opacity-50"
                        style={{ background: '#ede9e1' }} />

                    {/* Main document card */}
                    <div className="relative rounded-xl overflow-hidden"
                        style={{
                            background: '#f9f7f4',
                            boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.2)',
                        }}
                    >
                        {/* Document header */}
                        <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: '#e8e4dc' }}>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-widest" style={{ color: '#9ca3af' }}>
                                        PATHVO ACCESSIBILITY REPORT
                                    </p>
                                    <p className="text-xs font-mono mt-1" style={{ color: '#9ca3af' }}>
                                        yoursite.com · Generated {dateStr || 'February 2026'}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold font-mono tracking-tighter" style={{ color: '#111' }}>8</p>
                                    <p className="text-xs font-mono uppercase tracking-widest" style={{ color: '#9ca3af' }}>violations</p>
                                </div>
                            </div>

                            {/* Summary bar */}
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full" style={{ background: '#ef4444' }} />
                                    <span className="text-xs font-mono" style={{ color: '#6b7280' }}>3 Critical</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full" style={{ background: '#f59e0b' }} />
                                    <span className="text-xs font-mono" style={{ color: '#6b7280' }}>3 Serious</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full" style={{ background: '#6b7280' }} />
                                    <span className="text-xs font-mono" style={{ color: '#6b7280' }}>2 Moderate</span>
                                </div>
                            </div>
                        </div>

                        {/* Violation entries */}
                        <div className="px-8 py-6 space-y-6">
                            {/* Entry 1 */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded"
                                        style={{ background: '#fee2e2', color: '#dc2626' }}>
                                        CRITICAL
                                    </span>
                                    <span className="text-xs font-mono" style={{ color: '#9ca3af' }}>
                                        WCAG 2.2 § 1.1.1 · Hero.tsx:42
                                    </span>
                                </div>
                                <p className="text-sm font-medium" style={{ color: '#111827' }}>
                                    Missing alt text on hero image
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                                    Your hero image has no alt text. Screen readers will skip it entirely, leaving visually impaired users with no context for your most important visual. This is one of the most common reasons sites get flagged in ADA complaints.
                                </p>
                                <div className="rounded-lg p-4 font-mono text-xs" style={{ background: '#1a1a1a' }}>
                                    <p style={{ color: '#6b7280' }}>{'// Fix for Hero.tsx:42'}</p>
                                    <p className="mt-1" style={{ color: '#86efac' }}>{'<img src="/banner.jpg"'}</p>
                                    <p style={{ color: '#86efac' }}>{'  alt="Product dashboard showing accessibility score"'}</p>
                                    <p style={{ color: '#86efac' }}>{'/>'}</p>
                                </div>
                            </div>

                            {/* Entry 2 */}
                            <div className="space-y-3" style={{ paddingTop: '1.5rem', borderTop: '1px solid #e8e4dc' }}>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded"
                                        style={{ background: '#fef3c7', color: '#d97706' }}>
                                        SERIOUS
                                    </span>
                                    <span className="text-xs font-mono" style={{ color: '#9ca3af' }}>
                                        WCAG 2.2 § 1.3.1 · ContactForm.tsx:18
                                    </span>
                                </div>
                                <p className="text-sm font-medium" style={{ color: '#111827' }}>
                                    Form inputs missing associated labels
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                                    Your contact form inputs have no programmatic labels. Users relying on screen readers cannot tell what each field is asking for. This affects keyboard-only users too.
                                </p>
                                <div className="rounded-lg p-4 font-mono text-xs" style={{ background: '#1a1a1a' }}>
                                    <p style={{ color: '#6b7280' }}>{'// Fix for ContactForm.tsx:18'}</p>
                                    <p className="mt-1" style={{ color: '#86efac' }}>{'<label htmlFor="email" className="sr-only">'}</p>
                                    <p style={{ color: '#86efac' }}>{'  Email address'}</p>
                                    <p style={{ color: '#86efac' }}>{'</label>'}</p>
                                    <p style={{ color: '#86efac' }}>{'<input id="email" type="email" />'}</p>
                                </div>
                            </div>

                            {/* Entry 3 — blurred teaser */}
                            <div className="space-y-3 relative" style={{ paddingTop: '1.5rem', borderTop: '1px solid #e8e4dc' }}>
                                {/* Blur overlay with CTA */}
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg"
                                    style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', background: 'rgba(249,247,244,0.7)' }}>
                                    <p className="text-sm font-semibold mb-3" style={{ color: '#111827' }}>
                                        6 more violations in your full report
                                    </p>
                                    <a href="#contact"
                                        className="text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full transition-colors"
                                        style={{ background: '#111827', color: '#f9f7f4' }}>
                                        Get Your Report →
                                    </a>
                                </div>
                                {/* Blurred content underneath */}
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded"
                                        style={{ background: '#fee2e2', color: '#dc2626' }}>CRITICAL</span>
                                    <span className="text-xs font-mono" style={{ color: '#9ca3af' }}>WCAG 2.2 § 1.4.3 · Footer.tsx:7</span>
                                </div>
                                <p className="text-sm font-medium" style={{ color: '#111827' }}>Insufficient color contrast ratio</p>
                                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                                    Your footer text has a contrast ratio of 2.1:1 against the background. WCAG requires a minimum of 4.5:1 for normal text.
                                </p>
                                <div className="rounded-lg p-4 font-mono text-xs" style={{ background: '#1a1a1a' }}>
                                    <p style={{ color: '#86efac' }}>{'// Fix for Footer.tsx:7'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Document footer */}
                        <div className="px-8 py-4 flex items-center justify-between"
                            style={{ borderTop: '1px solid #e8e4dc', background: '#f3f0eb' }}>
                            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#9ca3af' }}>
                                PathVo · pathvo.io
                            </p>
                            <p className="text-[10px] font-mono" style={{ color: '#9ca3af' }}>
                                Page 1 of 6
                            </p>
                        </div>
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
                        className="text-sm text-muted-foreground/50 hover:text-muted-foreground transition-colors font-mono underline underline-offset-4">
                        Request a free sample report →
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
