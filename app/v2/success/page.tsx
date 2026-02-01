'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function SuccessPage() {
  const [progress, setProgress] = useState(0)

  // Auto-dismiss progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

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
        <span className="text-ui text-text-secondary">Success</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-6">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Brief confirmation */}
          <h1 className="text-headline font-medium text-text-primary text-center mb-2">
            Done
          </h1>
          <p className="text-content text-text-secondary text-center">
            Prescription renewed for Marie Dupont
          </p>
        </div>

        {/* Auto-dismiss indicator */}
        <div className="space-y-4">
          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Tap to dismiss */}
          <button
            className="w-full py-4 text-ui text-text-secondary hover:text-primary transition-colors"
          >
            Tap to dismiss
          </button>
        </div>

        {/* Voice hint */}
        <p className="text-ui text-text-secondary text-center mt-4">
          Try saying: &ldquo;Done&rdquo; or &ldquo;Continue&rdquo;
        </p>
      </div>
    </main>
  )
}
