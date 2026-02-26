import HeroSection from "@/components/hero-section";
import Features from "@/components/features-3";
import Agenda from "@/components/agenda";
import WhatYouGet from "@/components/what-you-get";
import Pricing from "@/components/pricing";
import CallToAction from "@/components/call-to-action";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Features />
            <Agenda />
            <WhatYouGet />
            <Pricing />
            <CallToAction />
        </>
    )
}
