'use client'

import { useState } from 'react'
import Link from 'next/link'

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-3 border-b border-[var(--border)] last:border-0">
      <span className="text-[14px] text-[var(--text-secondary)]">{label}</span>
      <span className="text-[14px] font-medium text-[var(--text-primary)]">{value}</span>
    </div>
  )
}

export default function ConfirmPage() {
  const [detailsExpanded, setDetailsExpanded] = useState(false)
  const [isConfirming, setIsConfirming] = useState(false)

  const handleConfirm = () => {
    setIsConfirming(true)
    // Simulate confirmation
    setTimeout(() => {
      setIsConfirming(false)
    }, 1500)
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
        <span className="text-[13px] font-medium text-[var(--text-secondary)]">Confirmation</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-8">
        {/* One-line decision */}
        <div className="flex-1 flex flex-col items-center justify-center animate-fadeInUp">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>

          <h1 className="text-[22px] font-semibold text-[var(--text-primary)] text-center mb-2 text-balance leading-tight">
            Renew Amoxicillin for Marie Dupont?
          </h1>
          
          <p className="text-[14px] text-[var(--text-secondary)] mb-6">
            This will create a new prescription
          </p>

          {/* Collapsible details */}
          <button
            onClick={() => setDetailsExpanded(!detailsExpanded)}
            className="text-[14px] font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors flex items-center gap-1.5 mb-6"
          >
            {detailsExpanded ? 'Hide details' : 'Show details'}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className={`transition-transform duration-200 ${detailsExpanded ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>

          {/* Details panel */}
          <div 
            className={`
              w-full max-w-sm overflow-hidden transition-all duration-300 ease-out
              ${detailsExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="bg-[var(--background-elevated)] rounded-2xl p-5 shadow-[var(--shadow-sm)] border border-[var(--border)]">
              <DetailRow label="Patient" value="Marie Dupont (ID: 4821)" />
              <DetailRow label="Medication" value="Amoxicillin 500mg" />
              <DetailRow label="Quantity" value="30 capsules" />
              <DetailRow label="Refills" value="3" />
              <DetailRow label="Last filled" value="Jan 15, 2024" />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 animate-slideUp" style={{ animationDelay: '100ms' }}>
          <button
            onClick={handleConfirm}
            disabled={isConfirming}
            className="w-full h-[72px] bg-[var(--primary)] text-white text-[16px] font-semibold rounded-2xl hover:bg-[var(--primary-dark)] active:scale-[0.98] transition-all duration-200 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-primary)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isConfirming ? (
              <>
                <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                Confirming...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Confirm
              </>
            )}
          </button>
          <button
            className="w-full h-[72px] bg-[var(--background-elevated)] text-[var(--text-primary)] text-[16px] font-semibold rounded-2xl border border-[var(--border)] hover:bg-[var(--background-secondary)] active:scale-[0.98] transition-all duration-200"
          >
            Cancel
          </button>
        </div>

        {/* Voice hint */}
        <p className="text-[13px] text-[var(--text-muted)] text-center mt-6 py-2 px-4 rounded-full bg-[var(--background-secondary)] mx-auto">
          Try saying: &ldquo;Confirm&rdquo; or &ldquo;Cancel&rdquo;
        </p>
      </div>
    </main>
  )
}
