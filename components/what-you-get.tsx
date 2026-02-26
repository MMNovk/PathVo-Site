'use client'

import { TextEffect } from "@/components/motion-primitives/text-effect"
import React from "react"
import { transitionVariants } from "@/lib/utils"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { Button } from "@/components/ui/button"
import { FileText, X } from "lucide-react"
import { motion } from "motion/react"

// Terminal line definitions with syntax highlighting classes
type TermLine = { text: string; className: string; delay?: number }

const TERMINAL_LINES: TermLine[] = [
    { text: '> playwright.launch(url="https://example.com")', className: 'text-foreground/80', delay: 0 },
    { text: '# Scanning DOM tree with headless Chromium...', className: 'text-muted-foreground/50', delay: 600 },
    { text: '# Pages crawled: 12 | Components mapped: 847', className: 'text-muted-foreground/50', delay: 400 },
    { text: '', className: '', delay: 300 },
    { text: '> axe_core.scan() -> 51 violations found', className: 'text-foreground/80', delay: 500 },
    { text: '[CRITICAL] Missing alt text on hero image', className: 'text-red-400', delay: 300 },
    { text: '  -> src/components/Hero.tsx:42', className: 'text-muted-foreground', delay: 100 },
    { text: '  -> WCAG 2.2 \u00A7 1.1.1 Non-text Content', className: 'text-muted-foreground', delay: 100 },
    { text: '[CRITICAL] Form inputs lack associated labels', className: 'text-red-400', delay: 300 },
    { text: '  -> src/components/ContactForm.tsx:18', className: 'text-muted-foreground', delay: 100 },
    { text: '  -> WCAG 2.2 \u00A7 1.3.1 Info and Relationships', className: 'text-muted-foreground', delay: 100 },
    { text: '[SERIOUS] Insufficient color contrast ratio (2.1:1)', className: 'text-yellow-400', delay: 300 },
    { text: '  -> src/components/Footer.tsx:7', className: 'text-muted-foreground', delay: 100 },
    { text: '  -> WCAG 2.2 \u00A7 1.4.3 Contrast (Minimum)', className: 'text-muted-foreground', delay: 100 },
    { text: '', className: '', delay: 400 },
    { text: '> weasyprint.render(report="pathvo_audit.pdf")', className: 'text-foreground/80', delay: 500 },
    { text: '# Generating remediation report...', className: 'text-muted-foreground/50', delay: 400 },
    { text: 'Fix for Hero.tsx:42', className: 'text-emerald-400', delay: 300 },
    { text: '  <img src="/banner.jpg"', className: 'text-muted-foreground', delay: 100 },
    { text: '  +    alt="Product dashboard showcasing analytics"', className: 'text-emerald-400', delay: 100 },
    { text: '  />', className: 'text-muted-foreground', delay: 100 },
    { text: 'Fix for ContactForm.tsx:18', className: 'text-emerald-400', delay: 300 },
    { text: '  + <label htmlFor="email" className="sr-only">Email</label>', className: 'text-emerald-400', delay: 100 },
    { text: '---', className: 'text-muted-foreground/40', delay: 400 },
    { text: '3 critical violations found. 3 fixes generated.', className: 'text-foreground', delay: 200 },
    { text: 'Report exported to ./pathvo_audit.pdf', className: 'text-emerald-400', delay: 200 },
]

// Character-by-character speed (ms)
const CHAR_SPEED = 18

function useTerminalTyping(lines: TermLine[], triggered: boolean) {
    const [visibleLines, setVisibleLines] = React.useState<{ text: string; className: string; typing: boolean }[]>([])
    const doneRef = React.useRef(false)

    React.useEffect(() => {
        if (!triggered || doneRef.current) return
        doneRef.current = true

        let lineIndex = 0
        let charIndex = 0
        let timeout: ReturnType<typeof setTimeout>

        function addNextLine() {
            if (lineIndex >= lines.length) return

            const line = lines[lineIndex]

            // Empty lines just appear instantly
            if (line.text === '') {
                setVisibleLines(prev => [...prev, { text: '', className: line.className, typing: false }])
                lineIndex++
                timeout = setTimeout(addNextLine, line.delay || 100)
                return
            }

            // Start typing a new line
            charIndex = 0
            setVisibleLines(prev => [...prev, { text: '', className: line.className, typing: true }])

            function typeChar() {
                charIndex++
                const currentLineIdx = lineIndex
                setVisibleLines(prev => {
                    const copy = [...prev]
                    const idx = copy.length - 1
                    if (idx >= 0) {
                        copy[idx] = {
                            text: lines[currentLineIdx].text.slice(0, charIndex),
                            className: lines[currentLineIdx].className,
                            typing: charIndex < lines[currentLineIdx].text.length,
                        }
                    }
                    return copy
                })

                if (charIndex < line.text.length) {
                    timeout = setTimeout(typeChar, CHAR_SPEED)
                } else {
                    lineIndex++
                    const nextDelay = lineIndex < lines.length ? (lines[lineIndex].delay || 100) : 0
                    timeout = setTimeout(addNextLine, nextDelay)
                }
            }

            timeout = setTimeout(typeChar, line.delay || 0)
        }

        addNextLine()
        return () => clearTimeout(timeout)
    }, [triggered, lines])

    return visibleLines
}

function AuditReportModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [dateStr, setDateStr] = React.useState('')
    React.useEffect(() => {
        setDateStr(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))
    }, [])
    if (!open) return null
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end" role="dialog" aria-modal="true" aria-label="Sample Audit Report Preview">
            <div className="absolute inset-0 bg-background/60 backdrop-blur-xl" onClick={onClose} />
            <div className="relative z-10 h-full w-full max-w-lg border-l border-border bg-card overflow-y-auto animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                    <div className="flex items-center gap-2">
                        <FileText className="size-4 text-muted-foreground" aria-hidden />
                        <span className="font-mono text-sm">pathvo_audit.pdf</span>
                    </div>
                    <button onClick={onClose} className="rounded-md p-1 hover:bg-accent transition-colors" aria-label="Close preview">
                        <X className="size-4" />
                    </button>
                </div>
                <div className="p-6 space-y-8">
                    <div className="space-y-2">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">PathVo Accessibility Audit</p>
                        <h3 className="text-2xl font-semibold">example.com</h3>
                        <p className="text-sm text-muted-foreground font-mono">Generated {dateStr || 'February 2026'}</p>
                    </div>

                    <div className="border border-border rounded-lg p-4 space-y-3">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Executive Summary</p>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="text-center p-3 rounded-md bg-destructive/10 border border-destructive/20">
                                <p className="text-2xl font-mono font-semibold text-destructive-foreground">12</p>
                                <p className="text-xs text-muted-foreground mt-1">Critical</p>
                            </div>
                            <div className="text-center p-3 rounded-md bg-accent border border-border">
                                <p className="text-2xl font-mono font-semibold">8</p>
                                <p className="text-xs text-muted-foreground mt-1">Serious</p>
                            </div>
                            <div className="text-center p-3 rounded-md bg-accent border border-border">
                                <p className="text-2xl font-mono font-semibold">23</p>
                                <p className="text-xs text-muted-foreground mt-1">Moderate</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-border rounded-lg p-4 space-y-3">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">WCAG 2.2 Violations</p>
                        {[
                            { rule: '1.1.1 Non-text Content', severity: 'Critical', count: 4 },
                            { rule: '1.4.3 Contrast (Minimum)', severity: 'Critical', count: 3 },
                            { rule: '1.3.1 Info and Relationships', severity: 'Serious', count: 5 },
                            { rule: '4.1.2 Name, Role, Value', severity: 'Critical', count: 5 },
                        ].map((item) => (
                            <div key={item.rule} className="flex items-start justify-between py-2 border-b border-border last:border-0">
                                <div>
                                    <p className="text-sm font-mono">{item.rule}</p>
                                    <p className="text-xs text-muted-foreground mt-0.5">{item.severity}</p>
                                </div>
                                <span className="text-sm font-mono text-muted-foreground">{item.count} instances</span>
                            </div>
                        ))}
                    </div>

                    <div className="border border-border rounded-lg p-4 space-y-3">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">AI-Generated Fix Preview</p>
                        <div className="rounded-md bg-accent/50 p-3 font-mono text-xs leading-relaxed">
                            <div className="text-muted-foreground">{'// Hero.tsx:42'}</div>
                            <div className="text-muted-foreground">{'<img src="/banner.jpg"'}</div>
                            <div className="text-emerald-400">{'+ alt="Product dashboard showcasing analytics"'}</div>
                            <div className="text-muted-foreground">{'/>'}</div>
                        </div>
                    </div>

                    <div className="text-center pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground font-mono">This is a sample report preview. Full reports include page-by-page breakdowns, remediation priority scores, and exportable code patches.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function WhatYouGet() {
    const [modalOpen, setModalOpen] = React.useState(false)
    const terminalRef = React.useRef<HTMLDivElement>(null)
    const [terminalVisible, setTerminalVisible] = React.useState(false)
    const typedLines = useTerminalTyping(TERMINAL_LINES, terminalVisible)

    React.useEffect(() => {
        const el = terminalRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTerminalVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-balance text-3xl font-semibold md:text-4xl">
                        What You Get
                    </TextEffect>
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.3}
                        as="p"
                        className="mt-4 text-muted-foreground text-lg">
                        Plain-English explanations for founders. Copy-paste code for developers.
                    </TextEffect>

                    <div className="py-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            viewport={{ once: true, amount: 0.3 }}>
                            <Button
                                size="lg"
                                className="px-8 text-base"
                                onClick={() => setModalOpen(true)}>
                                <FileText className="mr-2 size-4" aria-hidden />
                                View Sample Report
                            </Button>
                        </motion.div>
                    </div>
                </div>

                <AnimatedGroup
                    triggerOnView
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.5,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                >
                    <div className="mx-auto max-w-3xl" ref={terminalRef}>
                        <div className="rounded-lg border border-border bg-card overflow-hidden">
                            {/* macOS traffic light header */}
                            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                                <div className="flex gap-1.5" aria-hidden>
                                    <div className="size-3 rounded-full bg-[#FF605C]" />
                                    <div className="size-3 rounded-full bg-[#FFBD44]" />
                                    <div className="size-3 rounded-full bg-[#28C840]" />
                                </div>
                                <span className="ml-2 text-xs font-mono text-muted-foreground">pathvo-scan.sh</span>
                            </div>
                            {/* Terminal body with auto-typing */}
                            <div className="p-4 md:p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[420px]">
                                {typedLines.map((line, i) => (
                                    <div key={i} className={line.className}>
                                        {line.text}
                                        {line.typing && (
                                            <span className="inline-block w-1.5 h-3.5 bg-foreground/60 ml-px animate-pulse" />
                                        )}
                                        {line.text === '' && '\u00A0'}
                                    </div>
                                ))}
                                {terminalVisible && typedLines.length === 0 && (
                                    <span className="inline-block w-1.5 h-3.5 bg-foreground/60 animate-pulse" />
                                )}
                            </div>
                        </div>
                    </div>
                </AnimatedGroup>
            </div>

            <AuditReportModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    )
}
