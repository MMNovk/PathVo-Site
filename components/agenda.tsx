'use client'

import { TextEffect } from "@/components/motion-primitives/text-effect"
import React from "react"

const steps = [
    {
        number: '01',
        label: 'Scan',
        description: 'Your site gets crawled end-to-end, capturing every page, component, and dynamic state.',
        status: 'playwright.launch(url="https://...")',
    },
    {
        number: '02',
        label: 'Diagnose',
        description: 'Every violation gets flagged against WCAG 2.2 standards, prioritized by severity.',
        status: 'axe_core.scan() -> 51 violations found',
    },
    {
        number: '03',
        label: 'Remediate',
        description: 'Every violation comes with a plain-English explanation and a copy-paste code fix. No interpretation needed.',
        status: 'weasyprint.render(report="pathvo_audit.pdf")',
    },
]

const CHAR_SPEED = 35
const typeDurations = steps.map(s => s.status.length * CHAR_SPEED)
const INTER_STEP_PAUSE = 400
const TOTAL_DURATION =
    typeDurations.reduce((a, b) => a + b, 0) +
    INTER_STEP_PAUSE * steps.length

function getStepTimings() {
    const timings: { start: number; end: number }[] = []
    let cursor = 0
    for (let i = 0; i < steps.length; i++) {
        const start = (cursor + INTER_STEP_PAUSE) / TOTAL_DURATION
        cursor += INTER_STEP_PAUSE + typeDurations[i]
        const end = cursor / TOTAL_DURATION
        timings.push({ start, end })
    }
    return timings
}
const STEP_TIMINGS = getStepTimings()

function useAutoType(text: string, active: boolean, speed = CHAR_SPEED) {
    const [display, setDisplay] = React.useState('')
    const doneRef = React.useRef(false)

    React.useEffect(() => {
        if (!active || doneRef.current) return
        let i = 0
        setDisplay('')
        const interval = setInterval(() => {
            i++
            setDisplay(text.slice(0, i))
            if (i >= text.length) {
                clearInterval(interval)
                doneRef.current = true
            }
        }, speed)
        return () => clearInterval(interval)
    }, [active, text, speed])

    return { display, done: doneRef.current }
}

function StatusLine({ text, active }: { text: string; active: boolean }) {
    const { display, done } = useAutoType(text, active)
    const showCursor = active && !done

    return (
        <div className={`h-5 overflow-hidden transition-opacity duration-300 ${active || done ? 'opacity-100' : 'opacity-0'}`}>
            <code className="text-xs font-mono text-foreground/70">
                <span className="text-foreground/40">{'> '}</span>
                {display || (done ? text : '')}
                {showCursor && (
                    <span className="inline-block w-1.5 h-3.5 bg-foreground/60 ml-px animate-pulse" />
                )}
            </code>
        </div>
    )
}

export default function Agenda() {
    const sectionRef = React.useRef<HTMLDivElement>(null)
    const [triggered, setTriggered] = React.useState(false)
    const [progress, setProgress] = React.useState(0)
    const [activeSteps, setActiveSteps] = React.useState<boolean[]>([false, false, false])
    const startRef = React.useRef<number>(0)
    const frameRef = React.useRef<number>(0)

    React.useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTriggered(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.25 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    React.useEffect(() => {
        if (!triggered) return
        function tick(now: number) {
            if (!startRef.current) startRef.current = now
            const elapsed = now - startRef.current
            const p = Math.min(elapsed / TOTAL_DURATION, 1)
            setProgress(p)
            setActiveSteps(STEP_TIMINGS.map(t => p >= t.start))
            if (p < 1) {
                frameRef.current = requestAnimationFrame(tick)
            }
        }
        frameRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frameRef.current)
    }, [triggered])

    return (
        <section id="how-it-works" className="py-24 md:py-40" ref={sectionRef}>
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center lg:text-left">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="mb-20 text-3xl font-semibold md:text-4xl">
                        How It Works
                    </TextEffect>
                </div>

                {/* Steps on the left, 1px pipeline on the right */}
                <div className="relative pr-8 lg:pr-10">
                    {/* Right-side vertical pipeline */}
                    <div className="absolute right-0 top-0 bottom-0 w-px" aria-hidden>
                        <div className="absolute inset-0 bg-border" />
                        <div
                            className="absolute top-0 left-0 w-full bg-foreground transition-none"
                            style={{ height: `${progress * 100}%` }}
                        />
                    </div>

                    <div className="flex flex-col gap-28 lg:gap-40">
                        {steps.map((step, i) => {
                            const isActive = activeSteps[i]
                            return (
                                <div key={step.number} className="relative">
                                    <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                                            {'Step ' + step.number}
                                        </span>
                                        <h3 className="text-xl font-medium mt-2">{step.label}</h3>
                                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                                            {step.description}
                                        </p>
                                        <div className="mt-4">
                                            <StatusLine text={step.status} active={isActive} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
