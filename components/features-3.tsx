import { Card } from '@/components/ui/card'
import React from 'react'
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { transitionVariants } from "@/lib/utils"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import Link from 'next/link'
import { ShieldCheck, AlertTriangle, Search, Scale, Accessibility, TrendingUp } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-16 md:py-32 dark:bg-transparent bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-balance text-4xl font-semibold lg:text-5xl">
                        The web should work for everyone.
                    </TextEffect>
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
                    <div className="mx-auto mt-10 max-w-2xl text-center md:mt-14">
                        <p className="text-muted-foreground text-base leading-relaxed">
                            {"I built PathVo because I believe accessible technology should be the standard, not the exception. Too many people are being left behind by a digital world that was never built with them in mind."}
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-2">
                            <span className="text-sm text-muted-foreground font-mono">Mai Lyn Mae Novkov</span>
                            <Link
                                href="https://www.linkedin.com/in/mailyn-novkov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="LinkedIn profile">
                                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </AnimatedGroup>

                <AnimatedGroup
                    triggerOnView
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                >
                    <div className="mx-auto mt-8 md:mt-16 flex flex-col md:flex-row gap-6 items-stretch md:w-[calc(100%+3rem)] md:-mx-6">
                        {/* Card 1 — Legal Risk */}
                        <Card className="relative overflow-hidden flex flex-col p-8 min-h-[400px] border border-border/50 bg-card group cursor-default transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:flex-1 z-0 hover:md:flex-[1.5] hover:md:-mx-3 hover:md:-my-3 hover:md:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-white/20 hover:z-10">
                            {/* Ghost icon */}
                            <Scale 
                                className="absolute bottom-4 right-4 size-36 text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-500 pointer-events-none select-none"
                                fill="currentColor"
                                strokeWidth={0}
                            />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="size-4 text-muted-foreground/50 group-hover:text-white/60 transition-colors duration-500" />
                                    <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-muted-foreground/50 group-hover:text-white/60 transition-colors duration-500">Legal Risk</p>
                                </div>
                                <h3 className="text-5xl font-bold font-mono tracking-tighter text-foreground mt-4 group-hover:text-white transition-colors duration-300">8,600+</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-4 group-hover:text-white/70 transition-colors duration-500">
                                    ADA Title III federal lawsuits were filed in 2025 alone — and that number has held at record levels for three consecutive years.
                                </p>
                                <Link
                                    href="https://www.adatitleiii.com/2026/02/ada-title-iii-federal-lawsuit-filings-fall-slightly-to-8667-in-2025/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 text-[10px] font-mono text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300 no-underline">
                                    Source: ADA Title III (Feb 2026) ↗
                                </Link>
                            </div>
                        </Card>

                        {/* Card 2 — Accessibility Gap */}
                        <Card className="relative overflow-hidden flex flex-col p-8 min-h-[400px] border border-border/50 bg-card group cursor-default transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:flex-1 z-0 hover:md:flex-[1.5] hover:md:-mx-3 hover:md:-my-3 hover:md:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-white/20 hover:z-10">
                            {/* Ghost icon */}
                            <Accessibility 
                                className="absolute bottom-4 right-4 size-36 text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-500 pointer-events-none select-none"
                                fill="currentColor"
                                strokeWidth={0}
                            />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="size-4 text-muted-foreground/50 group-hover:text-white/60 transition-colors duration-500" />
                                    <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-muted-foreground/50 group-hover:text-white/60 transition-colors duration-500">Accessibility Gap</p>
                                </div>
                                <h3 className="text-5xl font-bold font-mono tracking-tighter text-foreground mt-4 group-hover:text-white transition-colors duration-300">94.8%</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-4 group-hover:text-white/70 transition-colors duration-500">
                                    Nearly all of the top one million websites fail basic WCAG 2.2 standards — a figure that has barely moved in six years.
                                </p>
                                <Link
                                    href="https://webaim.org/projects/million/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 text-[10px] font-mono text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300 no-underline">
                                    Source: WebAIM Million 2025 ↗
                                </Link>
                            </div>
                        </Card>

                        {/* Card 3 — Market Opportunity */}
                        <Card className="relative overflow-hidden flex flex-col p-8 min-h-[400px] border border-border/50 bg-card group cursor-default transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:flex-1 z-0 hover:md:flex-[1.5] hover:md:-mx-3 hover:md:-my-3 hover:md:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-white/20 hover:z-10">
                            {/* Ghost icon */}
                            <TrendingUp 
                                className="absolute bottom-4 right-4 size-36 text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-500 pointer-events-none select-none"
                                fill="currentColor"
                                strokeWidth={0}
                            />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-2">
                                    <Search className="size-4 text-muted-foreground/50 group-hover:text-white/60 transition-colors duration-500" />
                                    <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-muted-foreground/50 group-hover:text-white/60 transition-colors duration-500">Market Opportunity</p>
                                </div>
                                <h3 className="text-5xl font-bold font-mono tracking-tighter text-foreground mt-4 group-hover:text-white transition-colors duration-300">$13T</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-4 group-hover:text-white/70 transition-colors duration-500">
                                    One in four US adults lives with a disability, representing thirteen trillion dollars in global spending power that inaccessible sites cannot reach.
                                </p>
                                <Link
                                    href="https://www.cdc.gov/disability-and-health/articles-documents/disability-impacts-all-of-us-infographic.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 text-[10px] font-mono text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300 no-underline">
                                    Source: CDC Disability Impact ↗
                                </Link>
                            </div>
                        </Card>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    )
}
