'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import DecryptedText from "@/components/DecryptedText"
import { transitionVariants } from "@/lib/utils"
import dynamic from 'next/dynamic'

const Dither = dynamic(() => import('@/components/Dither'), { ssr: false })

const FALLBACK_CITY = 'NEW YORK CITY'

function useHeroDate() {
    const [dateStr, setDateStr] = React.useState('')

    React.useEffect(() => {
        const now = new Date()
        const formatted = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).format(now).toUpperCase()

        // Set immediately with fallback city
        setDateStr(`${formatted} \u2014 ${FALLBACK_CITY}`)

        // Attempt IP-based city lookup
        fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) })
            .then((res) => res.json())
            .then((data) => {
                if (data?.city) {
                    setDateStr(`${formatted} \u2014 ${data.city.toUpperCase()}`)
                }
            })
            .catch(() => {
                // Keep fallback — no-op
            })
    }, [])

    return dateStr
}

function AxeCoreLogo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`} aria-label="axe-core">
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L8.5 8.5 2 12l6.5 3.5L12 22l3.5-6.5L22 12l-6.5-3.5L12 2zm0 4.5L13.8 10 17 12l-3.2 2-1.8 3.5L10.2 14 7 12l3.2-2L12 6.5z" />
            </svg>
            <span className="font-mono text-sm font-medium tracking-tight">axe-core</span>
        </div>
    )
}

function PlaywrightLogo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`} aria-label="Playwright">
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 3a5 5 0 00-5 5v3a5 5 0 005 5h1v-2H8a3 3 0 01-3-3V8a3 3 0 013-3h1V3H8zm7 0v2h1a3 3 0 013 3v3a3 3 0 01-3 3h-1v2h1a5 5 0 005-5V8a5 5 0 00-5-5h-1zM9 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7 6v1c0 2.2 1.8 4 4 4s4-1.8 4-4v-1h-2v1c0 1.1-.9 2-2 2s-2-.9-2-2v-1H8z" />
            </svg>
            <span className="font-mono text-sm font-medium tracking-tight">Playwright</span>
        </div>
    )
}

function AnthropicLogo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`} aria-label="Anthropic Claude">
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.603 4L8.545 20h3.304l1.063-2.89h5.17L19.147 20H22.5L16.39 4h-1.787zm.922 4.116l1.81 6.267h-3.67l1.86-6.267zM1.5 4l4.34 16h2.563L4.015 4H1.5z" />
            </svg>
            <span className="font-mono text-sm font-medium tracking-tight">Anthropic</span>
        </div>
    )
}

function WeasyPrintLogo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`} aria-label="WeasyPrint">
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm9 .5L18.5 8H15V4.5zM8 13v1.5h8V13H8zm0 3v1.5h6V16H8z" />
            </svg>
            <span className="font-mono text-sm font-medium tracking-tight">WeasyPrint</span>
        </div>
    )
}

export default function HeroSection() {
    const heroDate = useHeroDate()
    return (
        <main className="overflow-x-hidden">
            <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
                {/*
                  Dither masked into hand shapes.
                  The hands image: white/light hands on black background.
                  CSS mask-image: white = visible, black = transparent.
                  So: hand regions show the dither, everything else falls through to bg-black.
                  scaleX(-1) on the OUTER wrapper flips the image so pointer hand is upper-right.
                  The INNER wrapper counter-flips so the WebGL canvas renders un-mirrored.
                */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden
                    style={{
                        transform: 'scaleX(-1)',
                        maskImage: 'url(/images/creation-hands.jpg)',
                        WebkitMaskImage: 'url(/images/creation-hands.jpg)',
                        maskSize: '130% auto',
                        WebkitMaskSize: '130% auto',
                        maskPosition: '50% 45%',
                        WebkitMaskPosition: '50% 45%',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                    }}>
                    <div className="absolute inset-0" style={{ transform: 'scaleX(-1)' }}>
                        <Dither
                            waveSpeed={0.04}
                            waveFrequency={3}
                            waveAmplitude={0.3}
                            waveColor={[0.42, 0.42, 0.45]}
                            colorNum={4}
                            pixelSize={2}
                            disableAnimation={false}
                            enableMouseInteraction={false}
                            mouseRadius={1}
                        />
                    </div>
                </div>

                {/* 1px grid overlay for subtle depth on black backdrop */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    aria-hidden
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Centered text content */}
                <div className="relative z-10 w-full">
                    <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32 text-center flex flex-col items-center">
                        {/* Date with tight backplate */}
                        <div className="mb-6">
                            {heroDate && (
                                <span className="inline-block bg-black/85 px-[3px] py-[1px] backdrop-blur-sm">
                                    <DecryptedText
                                        text={heroDate}
                                        animateOn="view"
                                        revealDirection="start"
                                        sequential
                                        useOriginalCharsOnly={false}
                                        speed={70}
                                        className="font-mono text-muted-foreground uppercase text-sm"
                                    />
                                </span>
                            )}
                        </div>

                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="text-5xl font-semibold md:text-6xl xl:text-7xl text-foreground text-balance">
                            {'Accessibility, Automated.'}
                        </TextEffect>

                        {/* Subheading with tight backplate */}
                        <div className="mt-6">
                            <span className="inline-block bg-black/85 px-[3px] py-[1px] backdrop-blur-sm max-w-xl">
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="text-lg text-muted-foreground leading-relaxed">
                                    {'PathVo scans your site for WCAG violations and delivers the exact fixes your team needs. No consultants, no guesswork.'}
                                </TextEffect>
                            </span>
                        </div>

                        <AnimatedGroup
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
                            className="mt-10 flex gap-3 justify-center"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="px-6 text-base">
                                <Link href="#contact">
                                    <span className="text-nowrap">Get Started</span>
                                </Link>
                            </Button>
                            <Button
                                key={2}
                                asChild
                                size="lg"
                                variant="outline"
                                className="px-6 text-base border-white/20 text-foreground hover:bg-white/5">
                                <Link href="#how-it-works">
                                    <span className="text-nowrap">How It Works</span>
                                </Link>
                            </Button>
                        </AnimatedGroup>
                    </div>
                </div>
            </section>

            {/* Engineered With marquee */}
            <section className="bg-background pb-16 md:pb-32">
                <AnimatedGroup
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
                    className="group relative m-auto max-w-6xl px-6"
                >
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:pr-6">
                            <p className="text-end text-sm font-mono uppercase">Engineered with</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={48}>
                                <div className="flex items-center opacity-50 hover:opacity-80 transition-opacity">
                                    <AxeCoreLogo />
                                </div>
                                <div className="flex items-center opacity-50 hover:opacity-80 transition-opacity">
                                    <PlaywrightLogo />
                                </div>
                                <div className="flex items-center opacity-50 hover:opacity-80 transition-opacity">
                                    <AnthropicLogo />
                                </div>
                                <div className="flex items-center opacity-50 hover:opacity-80 transition-opacity">
                                    <WeasyPrintLogo />
                                </div>
                            </InfiniteSlider>
                            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </AnimatedGroup>
            </section>
        </main>
    )
}
