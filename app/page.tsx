import Link from 'next/link'

function FeatureCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-[var(--background-elevated)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/20 transition-all duration-200 hover:shadow-[var(--shadow-md)]">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-lg bg-[var(--primary-light)] flex items-center justify-center text-[13px] font-semibold text-[var(--primary)] shrink-0">
          {number}
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-[var(--text-primary)] mb-1">{title}</h3>
          <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function ScreenCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link 
      href={href}
      className="group p-5 bg-[var(--background-elevated)] border border-[var(--border)] rounded-2xl hover:border-[var(--primary)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 rounded-full bg-[var(--primary)] group-hover:scale-125 transition-transform duration-200"></div>
        <h3 className="text-[15px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
        {description}
      </p>
    </Link>
  )
}

function ColorSwatch({ color, name, hex }: { color: string; name: string; hex: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-lg shadow-[var(--shadow-sm)]`} style={{ backgroundColor: color }}></div>
      <div>
        <span className="text-[13px] font-medium text-[var(--text-primary)]">{name}</span>
        <span className="text-[12px] text-[var(--text-muted)] ml-2">{hex}</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="px-6 py-6 bg-[var(--background-elevated)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </div>
            <div>
              <h1 className="text-[22px] font-semibold text-[var(--text-primary)]">
                MedikaLLInk Copilot
              </h1>
              <p className="text-[14px] text-[var(--text-secondary)]">
                Design Evolution: V1 to V2
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="mb-12">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--primary-light)] to-[var(--background)] border border-[var(--primary)]/10">
            <p className="text-[17px] text-[var(--text-primary)] leading-relaxed">
              A complete redesign focused on <strong>speed, clarity, and minimalism</strong> for busy doctors. 
              Voice-first. Touch-optimized. Zero cognitive overhead.
            </p>
            <Link 
              href="/v2/copilot"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[var(--primary)] text-white text-[15px] font-semibold rounded-xl hover:bg-[var(--primary-dark)] transition-all duration-200 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-primary)]"
            >
              Launch Copilot V2
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-12">
          <h2 className="text-[18px] font-semibold text-[var(--text-primary)] mb-5">
            Key Design Principles
          </h2>
          <div className="grid gap-4">
            <FeatureCard 
              number="1" 
              title="Command-Focused, Not Chat"
              description="Show only last command + current response. No conversation history. Old commands fade after 3 seconds."
            />
            <FeatureCard 
              number="2" 
              title="Giant Touch Targets"
              description="Mic button: 80% width. Confirmation buttons: 50% of modal height. Designed for walking-between-rooms use."
            />
            <FeatureCard 
              number="3" 
              title="Solution-First Errors"
              description='Lead with the fix ("Tap to retry"). One primary action, always. Subtext explains why, not what went wrong.'
            />
            <FeatureCard 
              number="4" 
              title="Flatten Visual Hierarchy"
              description="Remove 50% of borders. Whitespace instead of boxes. One accent color. Two font weights only."
            />
            <FeatureCard 
              number="5" 
              title="Smart Defaults"
              description="Pre-highlight 90%+ matches. Collapsed details, tap to expand. Auto-rotate ONE voice hint."
            />
          </div>
        </section>

        {/* V2 Screens */}
        <section className="mb-12">
          <h2 className="text-[18px] font-semibold text-[var(--text-primary)] mb-5">
            V2 Screens
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ScreenCard 
              href="/v2/copilot"
              title="Main Panel"
              description="Giant mic button, single rotating hint, minimal chrome"
            />
            <ScreenCard 
              href="/v2/confirm"
              title="Confirmation"
              description="One-line decision, collapsible details, massive buttons"
            />
            <ScreenCard 
              href="/v2/disambiguate"
              title="Disambiguation"
              description="Big cards, full-width targets, pre-highlighted match"
            />
            <ScreenCard 
              href="/v2/error"
              title="Error Recovery"
              description="Headline is the action, one primary button, no choices"
            />
            <ScreenCard 
              href="/v2/success"
              title="Success State"
              description="Brief confirmation, auto-dismiss, clean"
            />
          </div>
        </section>

        {/* Visual Specs */}
        <section>
          <h2 className="text-[18px] font-semibold text-[var(--text-primary)] mb-5">
            Visual Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-[var(--background-elevated)] rounded-2xl border border-[var(--border)]">
              <h3 className="text-[14px] font-semibold text-[var(--text-primary)] mb-4">Colors</h3>
              <div className="space-y-3">
                <ColorSwatch color="#0066CC" name="Primary" hex="#0066CC" />
                <ColorSwatch color="#059669" name="Success" hex="#059669" />
                <ColorSwatch color="#DC2626" name="Error" hex="#DC2626" />
                <ColorSwatch color="#0F172A" name="Text" hex="#0F172A" />
              </div>
            </div>
            <div className="p-6 bg-[var(--background-elevated)] rounded-2xl border border-[var(--border)]">
              <h3 className="text-[14px] font-semibold text-[var(--text-primary)] mb-4">Typography</h3>
              <div className="space-y-3 text-[14px] text-[var(--text-secondary)]">
                <p>Font: System UI stack</p>
                <p>Weights: 400 (normal), 600 (semibold)</p>
                <p>Sizes: 13px hints, 15px body, 22px headlines</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
