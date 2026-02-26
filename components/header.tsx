'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'

const navLinks = [
    { title: 'How It Works', href: '#how-it-works' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'About', href: '/about' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex items-center justify-between py-3 lg:py-4">
                        {/* Left: Logo + Nav links */}
                        <div className="flex items-center gap-8">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 flex-shrink-0">
                                <span className="font-sans text-lg font-semibold tracking-tight text-foreground">PathVo</span>
                            </Link>

                            <div className="hidden lg:flex items-center gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150">
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right: CTA + mobile menu */}
                        <div className="flex items-center gap-3">
                            <Button
                                asChild
                                size="sm"
                                className="rounded-full px-5 hidden lg:inline-flex">
                                <Link href="#contact">
                                    <span>Get Started</span>
                                </Link>
                            </Button>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden">
                                <Menu
                                    className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div
                        className="bg-background in-data-[state=active]:block mb-6 hidden w-full rounded-2xl border p-6 shadow-2xl shadow-zinc-300/20 lg:hidden dark:shadow-none">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setMenuState(false)}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    {link.title}
                                </Link>
                            ))}
                            <Button
                                asChild
                                size="sm"
                                className="rounded-full w-full mt-2">
                                <Link href="#contact">
                                    <span>Get Started</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
