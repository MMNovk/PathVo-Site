import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AlertTriangleIcon, SearchIcon, ShieldCheckIcon } from 'lucide-react'
import React, { ReactNode } from 'react'
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { transitionVariants } from "@/lib/utils"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import Link from 'next/link'

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
                    <Card
                        className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
                        <div className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <ShieldCheckIcon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium text-xl font-mono">The Risk</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{'ADA Title III federal lawsuits remained at record levels in 2025, with over 8,600 filings.'}</p>
                                <Link
                                    href="https://www.adatitleiii.com/2026/02/ada-title-iii-federal-lawsuit-filings-fall-slightly-to-8667-in-2025/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block text-xs text-muted-foreground/60 font-mono hover:text-foreground transition-colors underline underline-offset-2">
                                    Source: ADA Title III (Feb 2026)
                                </Link>
                            </CardContent>
                        </div>

                        <div className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <AlertTriangleIcon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium text-xl font-mono">The Crisis</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{'94.8% of the top 1,000,000 homepages fail basic WCAG standards.'}</p>
                                <Link
                                    href="https://webaim.org/projects/million/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block text-xs text-muted-foreground/60 font-mono hover:text-foreground transition-colors underline underline-offset-2">
                                    Source: WebAIM Million 2025
                                </Link>
                            </CardContent>
                        </div>

                        <div className="group shadow-zinc-950/5">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <SearchIcon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium text-xl font-mono">The Impact</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{'1 in 4 US adults lives with a disability, representing a $13T global spending power.'}</p>
                                <Link
                                    href="https://www.cdc.gov/disability-and-health/articles-documents/disability-impacts-all-of-us-infographic.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block text-xs text-muted-foreground/60 font-mono hover:text-foreground transition-colors underline underline-offset-2">
                                    Source: CDC Disability Impact
                                </Link>
                            </CardContent>
                        </div>
                    </Card>
                </AnimatedGroup>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div
        className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
