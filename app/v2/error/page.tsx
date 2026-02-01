'use client'

import Link from 'next/link'

export default function ErrorPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header - Minimal */}
      <header className="px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-ui text-text-secondary hover:text-primary transition-colors"
        >
          ← Back
        </Link>
        <span className="text-ui text-text-secondary">Error</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Error icon - subtle */}
          <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center mb-6">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#ef4444" 
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
          </div>

          {/* Headline is the action */}
          <h1 className="text-headline font-medium text-text-primary text-center mb-3">
            Tap to retry
          </h1>

          {/* Secondary info as subtext */}
          <p className="text-content text-text-secondary text-center max-w-xs">
            Couldn&apos;t connect to patient records. Check your connection and try again.
          </p>
        </div>

        {/* One primary button, massive */}
        <div className="space-y-3">
          <button
            className="w-full h-24 bg-primary text-white text-content font-medium rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-fast"
          >
            Retry
          </button>
          
          {/* Secondary action - subtle */}
          <button
            className="w-full py-4 text-ui text-text-secondary hover:text-primary transition-colors"
          >
            Go back
          </button>
        </div>

        {/* Voice hint */}
        <p className="text-ui text-text-secondary text-center mt-6">
          Try saying: &ldquo;Retry&rdquo; or &ldquo;Go back&rdquo;
        </p>
      </div>
    </main>
  )
}
