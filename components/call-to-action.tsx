'use client'

import { Button } from '@/components/ui/button'
import { TextEffect } from "./motion-primitives/text-effect"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { transitionVariants } from "@/lib/utils"
import React from 'react'

const inputClass = "w-full rounded-md border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring font-mono"

function ContactForm() {
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])

    if (!mounted) {
        return <div className="mt-10 space-y-4" aria-hidden>
            <div className="h-[46px] rounded-md border border-border" />
            <div className="h-[46px] rounded-md border border-border" />
            <div className="h-[46px] rounded-md border border-border" />
            <div className="h-[118px] rounded-md border border-border" />
            <div className="h-[44px] rounded-md bg-primary" />
        </div>
    }

    return (
        <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text" placeholder="Name" className={inputClass} />
            </div>
            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" className={inputClass} />
            </div>
            <div>
                <label htmlFor="website" className="sr-only">Website URL</label>
                <input id="website" name="website" type="url" placeholder="Website URL" className={inputClass} />
            </div>
            <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Message" className={`${inputClass} resize-none`} />
            </div>
            <Button type="submit" size="lg" className="w-full">
                <span>Submit</span>
            </Button>
            <p className="text-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest mt-4">{"YOU'LL HEAR BACK WITHIN 24 HOURS."}</p>
        </form>
    )
}

export default function CallToAction() {
    return (
        <section id="contact" className="py-16 mx-2">
            <div className="mx-auto max-w-2xl rounded-3xl border px-6 py-12 md:py-20 lg:py-24">
                <div className="text-center">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-balance text-3xl font-semibold lg:text-4xl">
                        {"Let's Talk"}
                    </TextEffect>
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.3}
                        as="p"
                        className="mt-4 text-muted-foreground">
                        {"Have a site that needs a scan? Drop a message and I'll get back to you."}
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
                    <ContactForm />
                </AnimatedGroup>
            </div>
        </section>
    )
}
