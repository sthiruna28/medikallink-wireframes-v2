'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

function AnimatedCheckmark() {
  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 24 24" 
      fill="none" 
      className="animate-fadeInScale"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--success)"
        strokeWidth="2"
        className="opacity-20"
      />
      <path 
        d="M8 12l3 3 5-6" 
        stroke="var(--success)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 24,
          strokeDashoffset: 0,
          animation: 'checkmark 0.4s ease-out 0.2s both'
        }}
      />
    </svg>
  )
}

export default function SuccessPage() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Auto-dismiss progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1.5
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  // Fade out when complete
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
    }
  }, [progress])

  return (
    <main className={`min-h-screen bg-[var(--background)] flex flex-col transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between bg-[var(--background-elevated)] border-b border-[var(--border)]">
        <Link 
          href="/v2/copilot" 
          className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-1.5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back
        </Link>
        <span className="text-[13px] font-medium text-[var(--text-secondary)]">Success</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Success icon with animation */}
          <div className="w-24 h-24 rounded-2xl bg-[var(--success-light)] flex items-center justify-center mb-8 animate-fadeInScale">
            <AnimatedCheckmark />
          </div>

          {/* Brief confirmation */}
          <h1 className="text-[24px] font-semibold text-[var(--text-primary)] text-center mb-2 animate-fadeInUp">
            Done
          </h1>
          <p className="text-[15px] text-[var(--text-secondary)] text-center animate-fadeInUp" style={{ animationDelay: '50ms' }}>
            Prescription renewed for Marie Dupont
          </p>
          
          {/* Additional info */}
          <div className="mt-6 px-5 py-3 rounded-xl bg-[var(--background-secondary)] animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span className="text-[14px] text-[var(--text-secondary)]">
                Sent to pharmacy at 2:34 PM
              </span>
            </div>
          </div>
        </div>

        {/* Auto-dismiss indicator */}
        <div className="space-y-4 animate-slideUp" style={{ animationDelay: '150ms' }}>
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-[var(--background-secondary)] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[var(--primary)] rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-[12px] text-[var(--text-muted)] text-center">
            Auto-dismissing in {Math.max(0, Math.ceil((100 - progress) / 25))}s
          </p>

          {/* Tap to dismiss */}
          <Link
            href="/v2/copilot"
            className="w-full h-14 flex items-center justify-center text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors rounded-xl hover:bg-[var(--background-secondary)]"
          >
            Tap to dismiss
          </Link>
        </div>

        {/* Voice hint */}
        <p className="text-[13px] text-[var(--text-muted)] text-center mt-4 py-2 px-4 rounded-full bg-[var(--background-secondary)] mx-auto">
          Try saying: &ldquo;Done&rdquo; or &ldquo;Continue&rdquo;
        </p>
      </div>
      
      <style jsx>{`
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 24;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      `}</style>
    </main>
  )
}
