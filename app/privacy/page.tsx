import type { Metadata } from 'next'
import { TextEffect } from "@/components/motion-primitives/text-effect"
import SubpageBackground from "@/components/subpage-background"

export const metadata: Metadata = {
    title: 'Privacy Policy — PathVo',
    description: 'PathVo Privacy Policy. Last updated February 22, 2026.',
}

export default function PrivacyPage() {
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
                            className="text-3xl font-semibold md:text-4xl text-foreground font-mono">
                            Privacy Policy
                        </TextEffect>

                        <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
                            Last updated: February 22, 2026
                        </p>

                        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-mono">
                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Overview</h2>
                                <p>
                                    {'PathVo is a product of Euviant Technologies. This policy explains what information is collected when you use PathVo, how it is used, and what rights you have over it. If something in here is unclear, you can reach out directly at '}
                                    <a href="mailto:hello@pathvo.io" className="text-foreground/80 underline underline-offset-2 hover:text-foreground transition-colors">hello@pathvo.io</a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">What We Collect</h2>
                                <p>
                                    {'When you submit a site for scanning, PathVo collects the following information: your name, business email address, phone number, and the URL of the website being scanned. This information is collected solely for the purpose of performing your accessibility audit and delivering your report. Nothing more.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">How We Use It</h2>
                                <p>
                                    {'Your information is used to run your scan, generate your report, and contact you with results. It is not sold, rented, shared with advertisers, or used for any purpose unrelated to your audit.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Payment Information</h2>
                                <p>
                                    {'Payments are processed by Stripe. PathVo does not store your credit card number, billing details, or any other payment information on its servers. All payment data is handled directly by Stripe under their own privacy policy and security standards.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Third-Party Services</h2>
                                <p>
                                    {'PathVo may use third-party tools to help deliver its service, such as scanning infrastructure or report generation services. Any such provider is bound by contractual obligations to handle your data securely and only for the purposes of delivering PathVo\u2019s service. This policy will be updated as those services are added.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Data Retention and Deletion</h2>
                                <p>
                                    {'Your data is retained only as long as necessary to deliver your report. You may request deletion of your information at any time by emailing '}
                                    <a href="mailto:hello@pathvo.io" className="text-foreground/80 underline underline-offset-2 hover:text-foreground transition-colors">hello@pathvo.io</a>
                                    {'. Requests will be honored within 30 days.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Security</h2>
                                <p>
                                    {'Reasonable technical and organizational measures are in place to protect your information. No method of transmission over the internet is completely secure, but PathVo takes the protection of your data seriously.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Your Rights</h2>
                                <p>
                                    {'You have the right to access the information PathVo holds about you, request corrections, and request deletion at any time. To exercise any of these rights, contact '}
                                    <a href="mailto:hello@pathvo.io" className="text-foreground/80 underline underline-offset-2 hover:text-foreground transition-colors">hello@pathvo.io</a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Changes to This Policy</h2>
                                <p>
                                    {'If this policy changes in a meaningful way, notice will be posted on this page with an updated date. Continued use of PathVo after changes are posted constitutes acceptance of the revised policy.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Contact</h2>
                                <p>
                                    {'PathVo '}
                                    <a href="mailto:hello@pathvo.io" className="text-foreground/80 underline underline-offset-2 hover:text-foreground transition-colors">hello@pathvo.io</a>
                                </p>
                            </section>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}
