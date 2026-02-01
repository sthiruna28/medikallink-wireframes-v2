'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const VOICE_HINTS = [
  'Try: "Renew amoxicillin for Marie Dupont"',
  'Try: "Schedule follow-up for patient 4821"',
  'Try: "Show me today\'s appointments"',
  'Try: "Refill all pending prescriptions"',
]

export default function CopilotPage() {
  const [status, setStatus] = useState<'idle' | 'listening' | 'processing'>('idle')
  const [currentCommand, setCurrentCommand] = useState<string | null>(null)
  const [hintIndex, setHintIndex] = useState(0)
  const [showCommand, setShowCommand] = useState(false)

  // Rotate voice hints every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHintIndex((prev) => (prev + 1) % VOICE_HINTS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Simulate command fading after 3 seconds
  useEffect(() => {
    if (currentCommand) {
      setShowCommand(true)
      const timeout = setTimeout(() => {
        setShowCommand(false)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [currentCommand])

  const handleMicClick = () => {
    if (status === 'idle') {
      setStatus('listening')
      // Simulate listening then processing
      setTimeout(() => {
        setStatus('processing')
        setCurrentCommand('Renew amoxicillin for Marie Dupont')
        setTimeout(() => {
          setStatus('idle')
        }, 1500)
      }, 2000)
    }
  }

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
        <span className="text-ui text-text-secondary">Copilot V2</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        {/* Status / Current Command */}
        <div className="h-16 flex items-center justify-center mb-8">
          {status === 'idle' && !showCommand && (
            <span className="text-content text-text-secondary">
              Tap microphone to start
            </span>
          )}
          {status === 'listening' && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-content text-primary">Listening...</span>
            </div>
          )}
          {status === 'processing' && (
            <span className="text-content text-text-secondary">Processing...</span>
          )}
          {showCommand && currentCommand && (
            <p 
              className="text-content text-text-primary text-center max-w-md transition-opacity duration-fast"
              style={{ opacity: showCommand ? 1 : 0 }}
            >
              &ldquo;{currentCommand}&rdquo;
            </p>
          )}
        </div>

        {/* Giant Mic Button - 80% width */}
        <button
          onClick={handleMicClick}
          className={`
            w-[80%] max-w-sm aspect-square rounded-full 
            flex items-center justify-center
            transition-all duration-fast
            ${status === 'listening' 
              ? 'bg-primary scale-105 shadow-lg shadow-primary/30' 
              : 'bg-primary hover:bg-primary/90'
            }
          `}
          aria-label={status === 'listening' ? 'Listening' : 'Start voice command'}
        >
          <svg 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            className={`transition-transform duration-fast ${status === 'listening' ? 'scale-110' : ''}`}
          >
            <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        </button>

        {/* Voice Hint - Single rotating */}
        <div className="mt-12 h-6">
          <p 
            key={hintIndex}
            className="text-ui text-text-secondary text-center animate-fadeIn"
          >
            {VOICE_HINTS[hintIndex]}
          </p>
        </div>
      </div>

      {/* Demo Navigation */}
      <div className="px-6 py-4 bg-background-secondary">
        <p className="text-ui text-text-secondary text-center mb-3">Demo flows:</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Link 
            href="/v2/confirm"
            className="px-4 py-2 bg-white rounded-full text-ui text-text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Confirmation
          </Link>
          <Link 
            href="/v2/disambiguate"
            className="px-4 py-2 bg-white rounded-full text-ui text-text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Disambiguation
          </Link>
          <Link 
            href="/v2/error"
            className="px-4 py-2 bg-white rounded-full text-ui text-text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Error
          </Link>
          <Link 
            href="/v2/success"
            className="px-4 py-2 bg-white rounded-full text-ui text-text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Success
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 200ms ease-out;
        }
      `}</style>
    </main>
  )
}
