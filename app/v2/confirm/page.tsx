'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ConfirmPage() {
  const [detailsExpanded, setDetailsExpanded] = useState(false)

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
        <span className="text-ui text-text-secondary">Confirmation</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-8">
        {/* One-line decision */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-headline font-medium text-text-primary text-center mb-8">
            Renew Amoxicillin for Marie Dupont?
          </h1>

          {/* Collapsible details */}
          <button
            onClick={() => setDetailsExpanded(!detailsExpanded)}
            className="text-ui text-primary hover:underline mb-8"
          >
            {detailsExpanded ? 'Hide details ↑' : 'Show details ↓'}
          </button>

          {detailsExpanded && (
            <div 
              className="w-full max-w-sm bg-background-secondary rounded-lg p-5 mb-8 transition-all duration-fast"
            >
              <div className="space-y-3 text-ui text-text-secondary">
                <div className="flex justify-between">
                  <span>Patient</span>
                  <span className="text-text-primary">Marie Dupont (ID: 4821)</span>
                </div>
                <div className="flex justify-between">
                  <span>Medication</span>
                  <span className="text-text-primary">Amoxicillin 500mg</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span className="text-text-primary">30 capsules</span>
                </div>
                <div className="flex justify-between">
                  <span>Refills</span>
                  <span className="text-text-primary">3</span>
                </div>
                <div className="flex justify-between">
                  <span>Last filled</span>
                  <span className="text-text-primary">Jan 15, 2024</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Massive Confirm/Cancel buttons */}
        <div className="space-y-3">
          <button
            className="w-full h-20 bg-primary text-white text-content font-medium rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-fast"
          >
            Confirm
          </button>
          <button
            className="w-full h-20 bg-background-secondary text-text-primary text-content font-medium rounded-xl hover:bg-gray-100 active:scale-[0.98] transition-all duration-fast"
          >
            Cancel
          </button>
        </div>

        {/* Voice hint in footer - always visible */}
        <p className="text-ui text-text-secondary text-center mt-6">
          Try saying: &ldquo;Confirm&rdquo; or &ldquo;Cancel&rdquo;
        </p>
      </div>
    </main>
  )
}
