'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const VOICE_HINTS = [
  'Try: "Renew amoxicillin for Marie Dupont"',
  'Try: "Schedule follow-up for patient 4821"',
  'Try: "Show me today\'s appointments"',
  'Try: "Refill all pending prescriptions"',
]

type Status = 'idle' | 'listening' | 'processing' | 'success'

function SoundWave() {
  return (
    <div className="sound-wave text-white/90">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

function ProcessingSpinner() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-5 h-5">
        <div className="absolute inset-0 rounded-full border-2 border-[var(--primary)]/20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--primary)] animate-spin"></div>
      </div>
      <span className="text-[15px] text-[var(--text-secondary)]">Processing your request...</span>
    </div>
  )
}

function MicButton({ status, onClick }: { status: Status; onClick: () => void }) {
  const isActive = status === 'listening'
  const isDisabled = status === 'processing'

  return (
    <div className="relative">
      {/* Pulse rings when listening */}
      {isActive && (
        <>
          <div className="absolute inset-0 rounded-full bg-[var(--primary)] animate-pulse-ring"></div>
          <div className="absolute inset-0 rounded-full bg-[var(--primary)] animate-pulse-ring" style={{ animationDelay: '0.5s' }}></div>
        </>
      )}
      
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`
          relative w-[min(80vw,320px)] aspect-square rounded-full 
          flex items-center justify-center
          transition-all duration-300 ease-out
          ${isActive 
            ? 'bg-[var(--primary)] scale-105 shadow-[var(--shadow-primary)]' 
            : isDisabled
              ? 'bg-[var(--primary)]/60 cursor-not-allowed'
              : 'bg-[var(--primary)] hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-primary)]'
          }
        `}
        aria-label={isActive ? 'Listening' : 'Start voice command'}
      >
        {/* Inner glow effect */}
        <div className={`
          absolute inset-4 rounded-full bg-white/5 
          transition-opacity duration-300
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}></div>
        
        {/* Icon or wave */}
        <div className="relative z-10 transition-all duration-300">
          {isActive ? (
            <SoundWave />
          ) : isDisabled ? (
            <div className="w-16 h-16 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>
          ) : (
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-sm"
            >
              <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          )}
        </div>
      </button>
    </div>
  )
}

function StatusMessage({ status, command, showCommand }: { 
  status: Status; 
  command: string | null; 
  showCommand: boolean;
}) {
  return (
    <div className="h-20 flex items-center justify-center">
      {status === 'idle' && !showCommand && (
        <span className="text-[15px] text-[var(--text-muted)] animate-fadeIn">
          Tap microphone to start
        </span>
      )}
      
      {status === 'listening' && (
        <div className="flex items-center gap-2 animate-fadeInScale">
          <div className="w-2.5 h-2.5 bg-[var(--primary)] rounded-full animate-pulse"></div>
          <span className="text-[15px] font-medium text-[var(--primary)]">Listening...</span>
        </div>
      )}
      
      {status === 'processing' && (
        <div className="animate-fadeInUp">
          <ProcessingSpinner />
        </div>
      )}
      
      {showCommand && command && status !== 'listening' && status !== 'processing' && (
        <div className="animate-fadeInUp max-w-md px-4">
          <p className="text-[17px] text-[var(--text-primary)] text-center leading-relaxed">
            &ldquo;{command}&rdquo;
          </p>
        </div>
      )}
    </div>
  )
}

function VoiceHint({ hint }: { hint: string }) {
  return (
    <div className="h-12 flex items-center justify-center">
      <p 
        key={hint}
        className="text-[13px] text-[var(--text-muted)] text-center animate-fadeInUp px-6 py-2 rounded-full bg-[var(--background-secondary)]"
      >
        {hint}
      </p>
    </div>
  )
}

function DemoNavigation() {
  return (
    <div className="px-6 py-5 bg-[var(--background-elevated)] border-t border-[var(--border)]">
      <p className="text-[12px] text-[var(--text-muted)] text-center mb-3 uppercase tracking-wider font-medium">Demo flows</p>
      <div className="flex justify-center gap-2 flex-wrap">
        {[
          { href: '/v2/confirm', label: 'Confirmation' },
          { href: '/v2/disambiguate', label: 'Disambiguation' },
          { href: '/v2/error', label: 'Error' },
          { href: '/v2/success', label: 'Success' },
        ].map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            className="px-4 py-2 bg-[var(--background-secondary)] rounded-full text-[13px] font-medium text-[var(--text-secondary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function CopilotPage() {
  const [status, setStatus] = useState<Status>('idle')
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
    if (currentCommand && status === 'idle') {
      setShowCommand(true)
      const timeout = setTimeout(() => {
        setShowCommand(false)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [currentCommand, status])

  const handleMicClick = useCallback(() => {
    if (status === 'idle') {
      // Instant feedback - immediately show listening state
      setStatus('listening')
      setShowCommand(false)
      
      // Simulate listening then processing
      setTimeout(() => {
        setStatus('processing')
        setCurrentCommand('Renew amoxicillin for Marie Dupont')
        
        // Simulate processing completion
        setTimeout(() => {
          setStatus('idle')
        }, 1200)
      }, 2000)
    }
  }, [status])

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col">
      {/* Header - Minimal & refined */}
      <header className="px-6 py-4 flex items-center justify-between bg-[var(--background-elevated)] border-b border-[var(--border)]">
        <Link 
          href="/" 
          className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-1.5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse"></div>
          <span className="text-[13px] font-medium text-[var(--text-secondary)]">Copilot Ready</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-32 pt-8">
        {/* Status / Current Command */}
        <StatusMessage status={status} command={currentCommand} showCommand={showCommand} />

        {/* Spacer */}
        <div className="h-8"></div>

        {/* Giant Mic Button */}
        <MicButton status={status} onClick={handleMicClick} />

        {/* Voice Hint - Single rotating */}
        <div className="mt-12">
          <VoiceHint hint={VOICE_HINTS[hintIndex]} />
        </div>
      </div>

      {/* Demo Navigation */}
      <DemoNavigation />
    </main>
  )
}
