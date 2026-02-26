import Link from 'next/link'
export default function FooterSection() {
    return (
        <footer className="relative z-10">
            {/* Solid black floor starts at the border-t line */}
            <div className="bg-[#000000]">
            <div className="mx-auto max-w-5xl px-6">
                {/* 1px separator — the exact boundary where black begins */}
                <div className="border-t border-white/10" aria-hidden />

                <div className="pt-6 pb-12 md:pb-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
                    {/* Column 1: Logo + Mission */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" aria-label="go home">
                            <span className="font-mono text-[11px] uppercase tracking-widest text-foreground">PathVo</span>
                        </Link>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                            Accessibility without the BS.
                        </p>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Product</p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#what-you-get" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Sample Report
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Company</p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/mailyn-novkov/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="https://euviant.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Euviant
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Legal</p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-4 border-t border-white/5">
                    <span className="text-muted-foreground block text-center text-[10px] font-mono uppercase tracking-widest">
                        Founded by Mai Lyn Mae Novkov | A Euviant Venture
                    </span>
                </div>
            </div>
            </div>
        </footer>
    )
}
