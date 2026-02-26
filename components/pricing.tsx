import { TextEffect } from "@/components/motion-primitives/text-effect"
import React from "react"
import { transitionVariants } from "@/lib/utils"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
    {
        name: 'Starter',
        price: '$0',
        period: 'free forever',
        description: 'Get a quick snapshot of your site\u2019s accessibility.',
        features: [
            '5-page scan',
            'Top violations highlighted',
            'WCAG 2.2 rule mapping',
        ],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        name: 'Pro',
        price: '$30',
        period: '/mo',
        description: 'Full audit with AI-generated fixes.',
        features: [
            '100-page scan',
            'AI-generated code fixes',
            'PDF report exports',
            'Email support',
        ],
        cta: 'Start Pro',
        highlighted: true,
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-balance text-3xl font-semibold md:text-4xl">
                        Pricing
                    </TextEffect>
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.3}
                        as="p"
                        className="mt-4 text-muted-foreground text-lg">
                        Start free. Scale when you need to.
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
                    className="mt-10 grid gap-6 md:grid-cols-2 md:mt-14 items-stretch max-w-2xl mx-auto"
                >
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`relative flex h-full flex-col ${plan.highlighted ? 'border-foreground/20 shadow-lg' : ''}`}>
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="rounded-full bg-foreground px-3 py-1 text-xs font-mono text-background">Popular</span>
                                </div>
                            )}
                            <CardHeader className="pb-4">
                                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">{plan.name}</p>
                                <div className="mt-3 flex items-baseline gap-1">
                                    <span className="text-4xl font-semibold">{plan.price}</span>
                                    {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                                </div>
                                <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
                            </CardHeader>
                            <CardContent className="flex flex-1 flex-col">
                                <ul className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm">
                                            <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto pt-8">
                                    <Button
                                        asChild
                                        className="w-full"
                                        variant={plan.highlighted ? 'default' : 'outline'}
                                        size="lg">
                                        <Link href="#contact">
                                            <span>{plan.cta}</span>
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </AnimatedGroup>
            </div>
        </section>
    )
}
