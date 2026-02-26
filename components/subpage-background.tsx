'use client'

import dynamic from 'next/dynamic'

const Dither = dynamic(() => import('@/components/Dither'), { ssr: false })

export default function SubpageBackground() {
    return (
        <>
            {/* Dither masked into hand shapes — fixed to viewport, visible behind entire page */}
            <div
                className="fixed inset-0 pointer-events-none"
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

            {/* 1px grid overlay — fixed to viewport */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                aria-hidden
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />
        </>
    )
}
