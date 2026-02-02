'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ErrorPage() {
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetry = () => {
    setIsRetrying(true)
    setTimeout(() => {
      setIsRetrying(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col">
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
        <span className="text-[13px] font-medium text-[var(--text-secondary)]">Error</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-8">
        <div className="flex-1 flex flex-col items-center justify-center animate-fadeInScale">
          {/* Error icon with subtle animation */}
          <div className="relative mb-8">
            <div className="w-20 h-20 rounded-2xl bg-[var(--error-light)] flex items-center justify-center">
              <svg 
                width="36" 
                height="36" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--error)" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </div>
          </div>

          {/* Headline is the action */}
          <h1 className="text-[22px] font-semibold text-[var(--text-primary)] text-center mb-3">
            Connection failed
          </h1>

          {/* Secondary info as subtext */}
          <p className="text-[15px] text-[var(--text-secondary)] text-center max-w-xs leading-relaxed">
            Couldn&apos;t connect to patient records. Check your connection and try again.
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 animate-slideUp" style={{ animationDelay: '100ms' }}>
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="w-full h-20 bg-[var(--primary)] text-white text-[16px] font-semibold rounded-2xl hover:bg-[var(--primary-dark)] active:scale-[0.98] transition-all duration-200 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-primary)] disabled:opacity-70 flex items-center justify-center gap-3"
          >
            {isRetrying ? (
              <>
                <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                Retrying...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                  <path d="M3 3v5h5"/>
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
                  <path d="M16 21h5v-5"/>
                </svg>
                Tap to retry
              </>
            )}
          </button>
          
          {/* Secondary action */}
          <Link
            href="/v2/copilot"
            className="w-full h-14 flex items-center justify-center text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
          >
            Go back
          </Link>
        </div>

        {/* Voice hint */}
        <p className="text-[13px] text-[var(--text-muted)] text-center mt-6 py-2 px-4 rounded-full bg-[var(--background-secondary)] mx-auto">
          Try saying: &ldquo;Retry&rdquo; or &ldquo;Go back&rdquo;
        </p>
      </div>
    </main>
  )
}
