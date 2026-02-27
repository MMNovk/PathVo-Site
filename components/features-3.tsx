import { Card } from '@/components/ui/card'
import React from 'react'
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { transitionVariants } from "@/lib/utils"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import Link from 'next/link'
import { ShieldCheck, AlertTriangle, Search } from 'lucide-react'

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
                    <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-16">
                        {/* Card 1 — Legal Risk */}
                        <Card className="group bg-card border border-border/50 rounded-xl p-8 flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30">
                            <ShieldCheck className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold mt-6 text-foreground">Legal Risk</h3>
                            <p className="text-3xl font-mono font-bold mt-2 text-foreground transition-colors duration-300 group-hover:text-red-400">8,600+</p>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                ADA Title III federal lawsuits were filed in 2025 alone — and that number has held at record levels for three consecutive years.
                            </p>
                            <Link
                                href="https://www.adatitleiii.com/2026/02/ada-title-iii-federal-lawsuit-filings-fall-slightly-to-8667-in-2025/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto pt-4 text-xs text-muted-foreground/60 font-mono hover:text-foreground transition-colors underline underline-offset-2">
                                Source: ADA Title III (Feb 2026)
                            </Link>
                        </Card>

                        {/* Card 2 — Accessibility Gap */}
                        <Card className="group bg-card border border-border/50 rounded-xl p-8 flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30">
                            <AlertTriangle className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold mt-6 text-foreground">Accessibility Gap</h3>
                            <p className="text-3xl font-mono font-bold mt-2 text-foreground transition-colors duration-300 group-hover:text-amber-400">94.8%</p>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                Nearly all of the top one million websites fail basic WCAG 2.2 standards — a figure that has barely moved in six years.
                            </p>
                            <Link
                                href="https://webaim.org/projects/million/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto pt-4 text-xs text-muted-foreground/60 font-mono hover:text-foreground transition-colors underline underline-offset-2">
                                Source: WebAIM Million 2025
                            </Link>
                        </Card>

                        {/* Card 3 — Market Opportunity */}
                        <Card className="group bg-card border border-border/50 rounded-xl p-8 flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
                            <Search className="size-5 text-muted-foreground" />
                            <h3 className="text-lg font-semibold mt-6 text-foreground">Market Opportunity</h3>
                            <p className="text-3xl font-mono font-bold mt-2 text-foreground transition-colors duration-300 group-hover:text-emerald-400">$13 Trillion</p>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                One in four US adults lives with a disability, representing thirteen trillion dollars in global spending power that inaccessible sites cannot reach.
                            </p>
                            <Link
                                href="https://www.cdc.gov/disability-and-health/articles-documents/disability-impacts-all-of-us-infographic.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto pt-4 text-xs text-muted-foreground/60 font-mono hover:text-foreground transition-colors underline underline-offset-2">
                                Source: CDC Disability Impact
                            </Link>
                        </Card>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    )
}
