import type { Metadata } from 'next'
import { TextEffect } from "@/components/motion-primitives/text-effect"
import SubpageBackground from "@/components/subpage-background"

export const metadata: Metadata = {
    title: 'About — PathVo',
    description: 'PathVo exists in the gap between knowing and doing. Built by Mai Lyn Mae Novkov, based in New York.',
}

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            <SubpageBackground />

            <div className="relative z-10 flex justify-center px-4 pt-32 lg:pt-40">
                <article className="bg-[#000000] p-10 mb-20 lg:mb-[104px] max-w-2xl w-full">
                    <div className="space-y-6">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="text-3xl font-semibold md:text-4xl text-foreground font-sans">
                            About
                        </TextEffect>

                        <div className="space-y-5 text-sm text-foreground/80 leading-relaxed font-sans">
                            <p>
                                {'The numbers are hard to ignore. 94.8% of the top one million websites fail basic WCAG accessibility standards, and that figure has barely moved in six years. It\u2019s not a technology problem. The tools exist. The guidelines are free. The gap between knowing and doing is where most sites stay stuck, either overwhelmed by the scope of it or sold a solution that turned out to be more promise than product.'}
                            </p>

                            <p>
                                {'PathVo exists in that gap. It scans your site the way a developer would. Page by page, component by component. It surfaces every violation against WCAG 2.2, and delivers a report written in Plain-English for the people making decisions and copy-paste code fixes for the people writing the software. No interpretation required, no consultant needed to translate the findings.'}
                            </p>

                            <p>
                                {'PathVo promises honesty about what\u2019s broken, why it matters, and what it actually takes to fix it. That\u2019s a lower bar to clear than it sounds like it should be.'}
                            </p>

                            <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest pt-4 border-t border-white/5 font-mono">
                                {'PathVo is the first venture of Euviant Technologies, and far from the last. Built by Mai Lyn Mae Novkov, based in New York.'}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}
