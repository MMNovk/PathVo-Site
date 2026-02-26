import type { Metadata } from 'next'
import { TextEffect } from "@/components/motion-primitives/text-effect"
import SubpageBackground from "@/components/subpage-background"

export const metadata: Metadata = {
    title: 'Terms of Service — PathVo',
    description: 'PathVo Terms of Service. Last updated February 22, 2026.',
}

export default function TermsPage() {
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
                            Terms of Service
                        </TextEffect>

                        <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
                            Last updated: February 22, 2026
                        </p>

                        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-mono">
                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Overview</h2>
                                <p>
                                    {'These terms govern your use of PathVo, a product of Euviant Technologies. By using PathVo, you agree to these terms. If you do not agree, please do not use the service. Questions can be directed to '}
                                    <a href="mailto:hello@pathvo.io" className="text-foreground/80 underline underline-offset-2 hover:text-foreground transition-colors">hello@pathvo.io</a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Who Can Use PathVo</h2>
                                <p>
                                    {'PathVo is open to anyone. By using the service, you confirm that you have the legal authority to submit the website URL you provide for scanning \u2014 meaning it is your site, your client\u2019s site, or a site you have permission to audit.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">What PathVo Does</h2>
                                <p>
                                    {'PathVo scans submitted websites for accessibility violations against WCAG 2.2 standards and delivers a report with identified issues and suggested fixes. PathVo does not guarantee that following the report\u2019s recommendations will result in full WCAG compliance, legal compliance, or freedom from accessibility-related claims. The report is a tool, not a certification.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Free Tier</h2>
                                <p>
                                    {'PathVo offers a free tier with limited functionality. Use of the free tier is subject to these same terms. PathVo reserves the right to modify or discontinue the free tier at any time with reasonable notice.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Payments and Billing</h2>
                                <p>
                                    {'Paid plans are billed on a monthly basis. Payment is processed securely through Stripe. By subscribing, you authorize PathVo to charge your payment method on a recurring monthly basis until you cancel.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Cancellations and Refunds</h2>
                                <p>
                                    {'You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period, and you will not be charged again after that. Refunds are not issued for services already rendered. If a scan has been completed and a report delivered, that charge stands.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Your Data</h2>
                                <p>
                                    {'By submitting a website URL, you confirm you have the right to have that site scanned. PathVo\u2019s handling of your personal information is described in the '}
                                    <a href="/privacy" className="text-foreground/80 underline underline-offset-2 hover:text-foreground transition-colors">Privacy Policy</a>
                                    {'.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Acceptable Use</h2>
                                <p>
                                    {'You agree not to use PathVo to scan websites you do not own or have permission to audit, to attempt to reverse engineer or misuse the service, or to use PathVo\u2019s reports in any way that misrepresents their findings.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Disclaimer of Warranties</h2>
                                <p>
                                    {'PathVo is provided as-is. While every effort is made to ensure accurate and useful results, no warranties are made regarding the completeness, accuracy, or fitness of the service for any particular purpose.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Limitation of Liability</h2>
                                <p>
                                    {'To the fullest extent permitted by law, Euviant Technologies shall not be liable for any indirect, incidental, or consequential damages arising from your use of PathVo.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-foreground font-semibold mb-2">Changes to These Terms</h2>
                                <p>
                                    {'These terms may be updated from time to time. If changes are material, notice will be posted on this page with an updated date. Continued use of PathVo after changes are posted constitutes acceptance of the revised terms.'}
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
