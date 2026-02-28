"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

function CountUp({ target, inView, suffix = "" }: { target: number; inView: boolean; suffix?: string }) {
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (inView && !started) {
            setStarted(true)
            const duration = 1200
            const steps = 40
            const increment = target / steps
            let current = 0
            const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                    setCount(target)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)
            return () => clearInterval(timer)
        }
    }, [inView, target, started])

    return <span>{count.toLocaleString()}{suffix}</span>
}

export default function Agenda() {
    const step1Ref = useRef(null)
    const step2Ref = useRef(null)
    const step3Ref = useRef(null)
    const step1InView = useInView(step1Ref, { once: true, margin: "-80px" })
    const step2InView = useInView(step2Ref, { once: true, margin: "-80px" })
    const step3InView = useInView(step3Ref, { once: true, margin: "-80px" })

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
                    {/* Step 1 — Scan */}
                    <motion.div
                        ref={step1Ref}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.65, delay: 0 }}
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 py-16 items-center">
                            <div className="flex flex-col gap-3">
                                <span className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-[#2DD4BF]/40 select-none">01</span>
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-foreground">Scan</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                                    Your site gets crawled end-to-end using headless Chromium — every page, component, and dynamic state captured.
                                </p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-zinc-950 border border-border/40 rounded-xl overflow-hidden"
                            >
                                <div className="px-5 py-3 border-b border-border/30">
                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40">SCAN RESULTS</p>
                                </div>
                                <div className="px-5 py-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">Pages crawled</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={12} inView={step1InView} />
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">Components mapped</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={847} inView={step1InView} />
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">Dynamic states captured</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={34} inView={step1InView} />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Divider 1 */}
                    <motion.hr
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: 0 }}
                        className="border-none h-px bg-border/30 my-0"
                    />

                    {/* Step 2 — Diagnose */}
                    <motion.div
                        ref={step2Ref}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 py-16 items-center">
                            <div className="flex flex-col gap-3">
                                <span className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-[#2DD4BF]/40 select-none">02</span>
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-foreground">Diagnose</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                                    Every element is tested against WCAG 2.2 standards. Violations are flagged, categorized, and prioritized by severity.
                                </p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-zinc-950 border border-border/40 rounded-xl overflow-hidden"
                            >
                                <div className="px-5 py-3 border-b border-border/30">
                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40">AUDIT RESULTS</p>
                                </div>
                                <div className="px-5 py-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">Violations found</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={51} inView={step2InView} />
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">Critical</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={3} inView={step2InView} />
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">Serious</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={18} inView={step2InView} />
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">Moderate</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={30} inView={step2InView} />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Divider 2 */}
                    <motion.hr
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: 0 }}
                        className="border-none h-px bg-border/30 my-0"
                    />

                    {/* Step 3 — Remediate */}
                    <motion.div
                        ref={step3Ref}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.65, delay: 0.2 }}
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 py-16 items-center">
                            <div className="flex flex-col gap-3">
                                <span className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-[#2DD4BF]/40 select-none">03</span>
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-foreground">Remediate</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                                    Every violation comes with a plain-English explanation and a copy-paste code fix. No interpretation needed.
                                </p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-zinc-950 border border-border/40 rounded-xl overflow-hidden"
                            >
                                <div className="px-5 py-3 border-b border-border/30">
                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40">REPORT GENERATED</p>
                                </div>
                                <div className="px-5 py-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">Fixes generated</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={51} inView={step3InView} />
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">PDF pages</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={14} inView={step3InView} />
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted-foreground/50">Estimated fix time</span>
                                        <span className="text-sm font-mono font-semibold text-white/80">
                                            <CountUp target={2} inView={step3InView} suffix=" hrs" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
