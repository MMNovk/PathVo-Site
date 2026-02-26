export function PathVoLogo({ className = '', size = 28 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden>
            {/* Outer circle */}
            <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" />
            {/* V checkmark */}
            <polyline
                points="32,38 50,62 68,38"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Two horizontal lines beneath V */}
            <line x1="38" y1="70" x2="62" y2="70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="77" x2="58" y2="77" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}
