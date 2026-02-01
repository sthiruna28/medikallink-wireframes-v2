'use client'

import Link from 'next/link'

interface Patient {
  id: string
  name: string
  dob: string
  initials: string
  likelihood: 'high' | 'medium' | 'low'
}

const PATIENTS: Patient[] = [
  { id: '1', name: 'Marie Dupont', dob: '05/12/1968', initials: 'MD', likelihood: 'high' },
  { id: '2', name: 'Marc Dupont', dob: '09/23/1975', initials: 'MD', likelihood: 'medium' },
  { id: '3', name: 'Maria Duval', dob: '11/04/1982', initials: 'MD', likelihood: 'low' },
]

export default function DisambiguatePage() {
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
        <span className="text-ui text-text-secondary">Select Patient</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-4">
        {/* Question */}
        <h1 className="text-content font-medium text-text-primary text-center mb-6">
          Which patient?
        </h1>

        {/* Patient Cards - Big cards, full-width touch targets */}
        <div className="space-y-3 flex-1">
          {PATIENTS.map((patient, index) => (
            <button
              key={patient.id}
              className={`
                w-full p-5 rounded-xl text-left
                flex items-center gap-4
                transition-all duration-fast
                active:scale-[0.98]
                ${patient.likelihood === 'high'
                  ? 'bg-primary/10 border-2 border-primary'
                  : 'bg-background-secondary border-2 border-transparent hover:bg-gray-100'
                }
              `}
            >
              {/* Number badge */}
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                text-content font-medium
                ${patient.likelihood === 'high' ? 'bg-primary text-white' : 'bg-gray-200 text-text-secondary'}
              `}>
                #{index + 1}
              </div>

              {/* Avatar */}
              <div className={`
                w-14 h-14 rounded-full flex items-center justify-center
                text-content font-medium
                ${patient.likelihood === 'high' ? 'bg-primary text-white' : 'bg-gray-300 text-text-primary'}
              `}>
                {patient.initials}
              </div>

              {/* Name + DOB */}
              <div className="flex-1">
                <p className={`text-content font-medium ${patient.likelihood === 'high' ? 'text-primary' : 'text-text-primary'}`}>
                  {patient.name}
                </p>
                <p className="text-ui text-text-secondary">
                  DOB: {patient.dob}
                </p>
              </div>

              {/* Likelihood indicator */}
              {patient.likelihood === 'high' && (
                <div className="px-3 py-1 bg-primary text-white text-ui rounded-full">
                  Best match
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Try again option */}
        <button className="w-full py-4 mt-4 text-ui text-text-secondary hover:text-primary transition-colors">
          None of these — try again
        </button>

        {/* Voice hint */}
        <p className="text-ui text-text-secondary text-center mt-4">
          Try saying: &ldquo;Number one&rdquo; or &ldquo;The first one&rdquo;
        </p>
      </div>
    </main>
  )
}
