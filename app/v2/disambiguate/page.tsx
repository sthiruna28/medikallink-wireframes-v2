'use client'

import { useState } from 'react'
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

function PatientCard({ patient, index, isSelected, onSelect }: { 
  patient: Patient; 
  index: number; 
  isSelected: boolean;
  onSelect: () => void;
}) {
  const isHighMatch = patient.likelihood === 'high'
  
  return (
    <button
      onClick={onSelect}
      className={`
        w-full p-5 rounded-2xl text-left
        flex items-center gap-4
        transition-all duration-200 ease-out
        active:scale-[0.98]
        animate-fadeInUp
        ${isSelected || isHighMatch
          ? 'bg-[var(--primary-light)] border-2 border-[var(--primary)] shadow-[var(--shadow-md)]'
          : 'bg-[var(--background-elevated)] border-2 border-[var(--border)] hover:border-[var(--primary)]/30 hover:bg-[var(--background-secondary)]'
        }
      `}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Number badge */}
      <div className={`
        w-9 h-9 rounded-xl flex items-center justify-center
        text-[14px] font-semibold
        transition-colors duration-200
        ${isSelected || isHighMatch 
          ? 'bg-[var(--primary)] text-white' 
          : 'bg-[var(--background-secondary)] text-[var(--text-secondary)]'
        }
      `}>
        {index + 1}
      </div>

      {/* Avatar */}
      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center
        text-[15px] font-semibold
        transition-colors duration-200
        ${isSelected || isHighMatch 
          ? 'bg-[var(--primary)] text-white' 
          : 'bg-[var(--background-secondary)] text-[var(--text-primary)]'
        }
      `}>
        {patient.initials}
      </div>

      {/* Name + DOB */}
      <div className="flex-1 min-w-0">
        <p className={`text-[15px] font-semibold truncate transition-colors duration-200 ${
          isSelected || isHighMatch ? 'text-[var(--primary-dark)]' : 'text-[var(--text-primary)]'
        }`}>
          {patient.name}
        </p>
        <p className="text-[13px] text-[var(--text-secondary)]">
          DOB: {patient.dob}
        </p>
      </div>

      {/* Best match badge */}
      {isHighMatch && (
        <div className="px-3 py-1.5 bg-[var(--primary)] text-white text-[12px] font-semibold rounded-full flex items-center gap-1.5 shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Best match
        </div>
      )}
    </button>
  )
}

export default function DisambiguatePage() {
  const [selectedId, setSelectedId] = useState<string | null>('1')

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
        <span className="text-[13px] font-medium text-[var(--text-secondary)]">Select Patient</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-6">
        {/* Question */}
        <div className="text-center mb-6 animate-fadeIn">
          <h1 className="text-[20px] font-semibold text-[var(--text-primary)] mb-1">
            Which patient?
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)]">
            We found 3 matching patients
          </p>
        </div>

        {/* Patient Cards */}
        <div className="space-y-3 flex-1">
          {PATIENTS.map((patient, index) => (
            <PatientCard 
              key={patient.id}
              patient={patient}
              index={index}
              isSelected={selectedId === patient.id}
              onSelect={() => setSelectedId(patient.id)}
            />
          ))}
        </div>

        {/* Try again option */}
        <button className="w-full py-4 mt-4 text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
            <path d="M16 21h5v-5"/>
          </svg>
          None of these — try again
        </button>

        {/* Voice hint */}
        <p className="text-[13px] text-[var(--text-muted)] text-center mt-4 py-2 px-4 rounded-full bg-[var(--background-secondary)] mx-auto">
          Try saying: &ldquo;Number one&rdquo; or &ldquo;The first one&rdquo;
        </p>
      </div>
    </main>
  )
}
